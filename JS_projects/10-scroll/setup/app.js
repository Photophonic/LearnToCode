// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
// get Date() object and getFullYear() method
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

// can be used, but will not be dynamic.
// navToggle.addEventListener("click", function () {
//   linksContainer.classList.toggle("show-links");
// });

navToggle.addEventListener("click", function () {
  // linksContainer div used to wrap links for height sizing
  // use .height to retreive just the height
  const containerHeight = linksContainer.getBoundingClientRect().height;

  // get the height of the links region
  const linksHeight = links.getBoundingClientRect().height;
  // if the heigh is 0, expand to the size of links
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    // set height back to 0 to hide the link
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

// attach to the main window object
window.addEventListener("scroll", function () {
  // pageYOffset replaced by scrollY
  const navbarHeight = navbar.getBoundingClientRect().height;
  const scrollHeight = this.window.scrollY;
  // compare the heights
  if (scrollHeight > navbarHeight) {
    // add fixed class if scrolled past size
    navbar.classList.add("fixed-nav");
  } else {
    // remove it
    navbar.classList.remove("fixed-nav");
  }
});
// ********** smooth scroll ************
// select links
