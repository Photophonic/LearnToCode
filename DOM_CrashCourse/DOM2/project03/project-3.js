// grab all elements with class of content-container
const accordion = document.getElementsByClassName("content-container");

// create a loop that will add an event listener to all
// elements in the variable
for (let i = 0; i < accordion.length; i++) {
  // attach an event listener to each element
  accordion[i].addEventListener("click", function () {
    // this referencing the item and toggle the style
    // by using classList will add .active
    // e.g. .accordion .content-container.active
    this.classList.toggle("active");
  });
}
