const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
// use of cclass & element to target a specific group of h4
const time = document.querySelectorAll(".deadline-format h4");

// this will get a str of the current system time
// can set a specfic date using the following format:
// YYYY, MM (0 index), DD, HH24, MM, SS
let futureDate = new Date(2024, 0, 9, 17, 30, 0);

const year = futureDate.getFullYear();
// getDate() returns the day as a number
const day = futureDate.getDate();
// use getDay() to return the day in the week for the array
const dayName = weekdays[futureDate.getDay()];
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const month = months[futureDate.getMonth()];

giveaway.textContent = `giveaway ends on ${dayName}, ${day} ${month}, ${year}, ${hours}:${minutes}.`;
