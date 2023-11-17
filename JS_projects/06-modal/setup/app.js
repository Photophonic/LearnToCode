// const sidebarToggle = document.querySelector(".sidebar-toggle");

// const sidebar = document.querySelector(".sidebar");
// const closeBtn = document.querySelector(".close-btn");

// sidebarToggle.addEventListener("click", function () {
//   sidebar.classList.toggle("show-sidebar");
// });

// closeBtn.addEventListener("click", function () {
//   sidebar.classList.remove("show-sidebar");
// });

const modalOverlay = document.querySelector(".modal-overlay");

const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");

// modalBtn.addEventListener("click", function () {
//   modalOverlay.style.visibility = "visible";
//   modalOverlay.style.zIndex = "20";
// });

// closeBtn.addEventListener("click", function () {
//   modalOverlay.style.visibility = "hidden";
//   modalOverlay.style.zIndex = "-10";
// });

modalBtn.addEventListener("click", function () {
  modalOverlay.classList.toggle("open-modal");
});

closeBtn.addEventListener("click", function () {
  modalOverlay.classList.remove("open-modal");
});
