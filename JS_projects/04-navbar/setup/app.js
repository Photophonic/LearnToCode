// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");

const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  
  // classList will return the list of assigned classes
  // then we'll toggle the class 
  links.classList.toggle("show-links");
});
