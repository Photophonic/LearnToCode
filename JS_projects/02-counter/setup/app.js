// const decrease = document.querySelector(".decrease");
// const reset = document.querySelector(".reset");
// const increase = document.querySelector(".increase");
// const value = document.getElementById("value");

// let countValue = 0;

// decrease.addEventListener("click", function () {
//   countValue -= 1;
//   value.innerText = countValue;
// });

// reset.addEventListener("click", function () {
//   countValue = 0;
//   value.innerText = countValue;
// });

// increase.addEventListener("click", function () {
//   countValue += 1;
//   value.innerText = countValue;
// });

// alternate method
// counter
let counter = 0;

// buttons and value
const value = document.querySelector("#value");
const btn = document.querySelectorAll(".btn");

btn.forEach(function (btn) {
  // use event(e) to check which btn is calling
  btn.addEventListener("click", function (e) {
    // look to see all the classes on the calling element
    // save e.classList to variable
    const styles = e.currentTarget.classList;
    // check if the style is contained in e.
    if (styles.contains("decrease")) {
      counter--;
    } else if (styles.contains("increase")) {
      counter++;
    } else if (styles.contains("reset")) {
      counter = 0;
    }

    if (counter > 0) {
      value.style.color = "green";
    } else if (counter < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }

    // update the screen
    value.textContent = counter;
  });
});
