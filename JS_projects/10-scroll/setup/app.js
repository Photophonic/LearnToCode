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

  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});
// ********** smooth scroll ************
// select all links
const scrollLinks = document.querySelectorAll(".scroll-link");

// loop over all links, use the link as the parameter
scrollLinks.forEach(function (link) {
  // use e (event) as the parameter
  link.addEventListener("click", function (e) {
    // prevent default smooth scroll behavior
    e.preventDefault();
    // navigate to specific spot on scroll
    // use current target so JS knows which item in the loop
    // looking for the specific href on link
    // slice extracts a section of a string without modifying original string
    // 1 = index 1 to skip the hashtag on id
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    //offsetTop - A Number, representing the top position of the element, in pixels
    // grab the relative position of the element

    // calculate the proper height, should setup globally
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = links.getBoundingClientRect().height;
    // fixed-nav class added above at line 41
    const fixedNav = navbar.classList.contains("fixed-nav");

    // position is corrected by subtracting navHeight from offset
    let position = element.offsetTop - navHeight;

    // if fixedNav is not attached
    if (!fixedNav) {
      position = position - navHeight;
    }

    // for a compact screen. 82 is the height the normal navbar
    if (navHeight > 82) {
      position = position + containerHeight;
    }
    // left margin, top position = the offsetTop
    window.scrollTo({
      left: 0,
      top: position,
    });
    // close the links window by setting height back to 0
    linksContainer.style.height = 0;
  });
});
