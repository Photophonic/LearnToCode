// variables for buttons
const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

// variables for time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// create variables for leading 0 in values
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// create variable for interval & status and apply to buttons
let timerInterval = null;
let timerStatus = "stopped";

// create stop watch function
function stopWatch() {
  // increment seconds first
  seconds++;
  // 60 seconds / 60 = 1, increase min by 1
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  if (seconds < 10) {
    // convert the seconds to string while they are displayed
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }

  if (minutes < 10) {
    // convert the seconds to string while they are displayed
    leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }

  if (hours < 10) {
    // convert the seconds to string while they are displayed
    leadingHours = "0" + hours.toString();
  } else {
    leadingHours = hours;
  }

  // create a variable that will update the timer's innerText value
  let displayTime = (document.getElementById("timer").innerText =
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds);
}

startStopBtn.addEventListener("click", function () {
  if (timerStatus === "stopped") {
    timerInterval = window.setInterval(stopWatch, 1000);
    document.getElementById(
      "startStopBtn"
    ).innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
    timerStatus = "started";
  } else {
    window.clearInterval(timerInterval);
    document.getElementById(
      "startStopBtn"
    ).innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timerStatus = "stopped";
  }
});

resetBtn.addEventListener("click", function () {
  window.clearInterval(timerInterval);
  document.getElementById(
    "startStopBtn"
  ).innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
  timerStatus = "stopped";
  seconds = 0;
  minutes = 0;
  hours = 0;

  document.getElementById("timer").innerText = "00:00:00";
});
