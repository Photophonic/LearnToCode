// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const preload = document.querySelector(".preloader");

// listen for load event on the window
window.addEventListener("load", function () {
  // once load is complete, add the hide class
  preload.classList.add("hide-preloader");
});

// add event to btn
btn.addEventListener("click", function () {
  // if btn does not have slide class
  if (!btn.classList.contains("slide")) {
    // add slide (button will slide on screen)
    btn.classList.add("slide");
    // pause the video playing
    video.pause();
  } else {
    // opposite of the above
    btn.classList.remove("slide");
    video.play();
  }
});
