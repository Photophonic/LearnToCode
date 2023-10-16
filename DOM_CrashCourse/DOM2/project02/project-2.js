// Variables
let openBtn = document.getElementById("open-btn");
let modalContainer = document.getElementById("modal-container");
let closeBtn = document.getElementById("close-btn");

openBtn.addEventListener("click", function () {
  modalContainer.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  modalContainer.style.display = "none";
});

// grab the event object (e)
window.addEventListener("click", function (e) {
  // e.target will return the element triggering the event.
  // if target is the modalContainer, then apply style
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});
