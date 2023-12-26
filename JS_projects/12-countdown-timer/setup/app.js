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
// YYYY, MM (0 index), DD, HH24, MM, SS
let futureDate = new Date(2020, 4, 24, 17, 30, 0);
