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
const times = document.querySelectorAll(".deadline-format h4");

// Temp dates for page load for functionality
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDay();

// this will get a str of the current system time
// can set a specfic date using the following format:
// YYYY, MM (0 index), DD, HH24, MM, SS
// let futureDate = new Date(2024, 0, 9, 17, 30, 0);

// ser futureDate to the temps so the page will work, add 10 days
let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 17, 30, 0);

const year = futureDate.getFullYear();
// getDate() returns the day as a number
const day = futureDate.getDate();
// use getDay() to return the day in the week for the array
const dayName = weekdays[futureDate.getDay()];
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const month = months[futureDate.getMonth()];

giveaway.textContent = `giveaway ends on ${dayName}, ${day} ${month}, ${year}, ${hours}:${minutes}.`;

// get miliseconds for the end date and current date.
// will subtract difference and update page

// future time in ms with .getTime()
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const difference = futureTime - today;

  // 1s = 1000ms
  // 1m = 60s
  // 1h = 60m
  // 1d = 24hr

  // values in ms (d - h - m - s)
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  // calculate differences
  let days = Math.floor(difference / oneDay);
  // remove the remainder from ms so the value is only days
  let hours = Math.floor((difference % oneDay) / oneHour);
  // remove hours to just minutes
  let minutes = Math.floor((difference % oneHour) / oneMin);
  // get just the seconds
  let seconds = Math.floor((difference % oneMin) / 1000);

  // set values array with adjusted times from above
  const values = [days, hours, minutes, seconds];

  // create formatting function when count = 0
  function format(time) {
    if (time < 10) {
      return (time = `0${time}`);
    }
    return time;
  }

  // loop over times element from querySelectorAll
  times.forEach(function (time, index) {
    // forEach function to update each item with
    // a value from our adjusted times array
    // pass value to format function to get leading 0
    // then update innerHTML on page
    time.innerHTML = format(values[index]);
  });
  // when time has expired, update message
  if (difference < 0) {
    // remove the interval timer
    clearInterval(countdown);
    // update the HTML with a new message
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired </h4>`;
  }
}

// use setInterval to call a function every second
let countdown = setInterval(getRemainingTime, 1000);

// call this to set the initial value on screen
// after a second the countdown will takeover
getRemainingTime();
