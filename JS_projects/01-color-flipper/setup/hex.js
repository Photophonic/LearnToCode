const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// btn.addEventListener("click", function () {
//   const randomNumber = Math.floor(Math.random() * 4);
//   document.body.style.background = colors[randomNumber];
//   color.innerText = colors[randomNumber];
// });

btn.addEventListener("click", function () {
  let output = "#";
  for (let i = 0; i <= 5; i++) {
    output += hex[Math.floor(Math.random() * 16)];
  }

  document.body.style.background = output;
  color.innerText = output;
});
