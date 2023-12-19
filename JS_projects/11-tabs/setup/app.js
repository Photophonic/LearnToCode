// Event Targeting using event bubbling

const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

// access the event object
about.addEventListener("click", function (e) {
  // what is the target? Event bubbling will show what's clicked
  // use the following to get the data-id from button
  // console.log(e.target.dataset.id);
  const id = e.target.dataset.id;
  if (id) {
    // remove active class from all buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });

    // hide all articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    // assign the ID of the current target
    const element = document.getElementById(id);
    // add active to the matching item
    element.classList.add("active");
  }
});
