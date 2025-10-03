// --- 1. Conference Attendee Data ---
// This array holds all the attendee records.
const conferenceAttendees = [
  { name: 'Maria Lopez', company: 'TechSolutions', role: 'Developer', sessionsAttended: 4 },
  { name: 'David Lee', company: 'InnovateCorp', role: 'Manager', sessionsAttended: 2 },
  { name: 'Sara Chen', company: 'GlobalSoft', role: 'Developer', sessionsAttended: 5 },
  { name: 'Ethan Jones', company: 'TechSolutions', role: 'Analyst', sessionsAttended: 1 },
  { name: 'Chloe Kim', company: 'InnovateCorp', role: 'Manager', sessionsAttended: 3 },
];

// --- 2. Function Definitions ---

/**
 * Counts the total number of people attending the conference.
 * @param {Array<Object>} attendeeList - The list of attendees.
 * @returns {number} The total count.
 */
// Attendee objects have: name, company, role, sessionsAttended

const countTotalAttendees = (attendeeList) => {
  // The simplest way to count items in a list is checking its 'length' property!
  return attendeeList.length;
};

/**
 * Filters the list to find attendees with a specific role.
 * This uses a simple loop to check each person one by one.
 * @param {Array<Object>} attendeeList - The list of attendees.
 * @param {string} specificRole - The role to search for (e.g., 'Developer').
 * @returns {Array<Object>} List of attendees matching the role.
 */
const filterAttendeesByRole = (attendeeList, specificRole) => {
  let filteredList = [];

  for (let i = 0; i < attendeeList.length; i++) {
    const attendee = attendeeList[i];
    
    // We check if the role matches exactly
    if (attendee.role === specificRole) {
      filteredList.push(attendee);
    }
  }

  return filteredList;
};
const findMostSessionsAttendee = (attendeeList) => {
  if (attendeeList.length === 0) {
    return null;
  }
  
  // Start tracking with the first person in the list
  let maxSessions = -1;
  let mostSessionsAttendee = null; 

  // Loop through everyone to see who has the biggest number
  for (const attendee of attendeeList) {
    if (attendee.sessionsAttended > maxSessions) {
      maxSessions = attendee.sessionsAttended;
      mostSessionsAttendee = attendee;
    }
  }

  return mostSessionsAttendee;
};

const groupAttendeesByCompany = (attendeeList) => {
  let companyGroups = {};

  for (const attendee of attendeeList) {
    const companyName = attendee.company;
    
    // Check if we already created an array for this company
    if (companyGroups[companyName]) {
      // If yes, just add the new person to that array
      companyGroups[companyName].push(attendee);
    } else {
      // If no, create a new array with this person as the first element
      companyGroups[companyName] = [attendee];
    }
  }

  return companyGroups;
};

const fetchNewAttendeesAsync = (currentAttendees) => {
  const newSignUps = [
    { name: 'Zoe Hart', company: 'StartupX', role: 'CEO', sessionsAttended: 6 },
    { name: 'Alex Bell', company: 'GlobalSoft', role: 'Intern', sessionsAttended: 1 },
  ];
  return new Promise(resolve => {
    // Wait 1.5 seconds (1500 milliseconds)
    setTimeout(() => {
      // Combine the old list and the new sign-ups into one new list
      const updatedList = [...currentAttendees, ...newSignUps];
      resolve(updatedList);
    }, 1500);
  });
};

// 1. Count total attendees
const totalCount = countTotalAttendees(conferenceAttendees);
console.log(`Attendee Count: ${totalCount} people`);
console.log("---------------------------------\n");

// 2. Filter by role
const developers = filterAttendeesByRole(conferenceAttendees, 'Developer');
console.log("Developers in Attendance:");
console.log(developers);
console.log("---------------------------------\n");

// 3. Find the most dedicated attendee
const sessionChamp = findMostSessionsAttendee(conferenceAttendees);
console.log("Attendee with the MOST sessions:");
if (sessionChamp) {
    console.log(`Name: ${sessionChamp.name}, Sessions: ${sessionChamp.sessionsAttended}`);
} else {
    console.log("The list is empty!");
}
console.log("---------------------------------\n");


// 4. Group by company
const groups = groupAttendeesByCompany(conferenceAttendees);
console.log("Attendees Grouped by Company:");
console.log(groups);
console.log("---------------------------------\n");

// 5. Run the async update simulation
const runUpdate = async () => {
    console.log("Waiting for new attendees to sign up (Simulating network delay)...");

    // We use 'await' because we have to wait for the Promise to finish
    let updatedRoster = await fetchNewAttendeesAsync(conferenceAttendees);

    console.log("\n*** UPDATE COMPLETE! ***");
    console.log(`Old Count: ${conferenceAttendees.length}`);
    console.log(`New Count: ${updatedRoster.length}`);
    console.log("Updated Roster:");
    console.log(updatedRoster);
}

runUpdate();