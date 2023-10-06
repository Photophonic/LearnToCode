const btn1 = document.querySelector(".btn-1");
const newColor = document.querySelector(".box-2");
const revealBtn = document.querySelector(".reveal-btn");
const hiddenContent = document.querySelector(".hidden-content");
// btn1.addEventListener("click", function () {
//   alert("Test");
// });

// alternate method for more flexibility
function alertBtn() {
  alert("Test");
}
// this allows the callback to be used in other places
btn1.addEventListener("click", alertBtn);

function changeFont() {
  newColor.style.color = "red";
}

function removeColor() {
  newColor.style.removeProperty("color");
}

function revealContent() {
  if (hiddenContent.classList.contains("reveal-btn")) {
    hiddenContent.classList.remove("reveal-btn");
  } else {
    hiddenContent.classList.add("reveal-btn");
  }
}

newColor.addEventListener("mouseover", changeFont);
newColor.addEventListener("mouseout", removeColor);

revealBtn.addEventListener("click", revealContent);
