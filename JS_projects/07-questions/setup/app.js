//using selectors inside the element
// traversing the dom
// const btns = document.querySelectorAll(".question-btn");

// // forEach is used to loop through an array of items
// // passes a callback function for each element
// // https://www.freecodecamp.org/news/javascript-foreach-how-to-loop-through-an-array-in-js/
// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     // currentTarget identifes WHAT is being clicked
//     //  traveres up the DOM up two spots.
//     const question = e.currentTarget.parentElement.parentElement;

//     question.classList.toggle("show-text");
//   });
// });

// using selectors inside the element vs. traversing the DOM
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  // create variable of buttons
  const btn = question.querySelector(".question-btn");
  // listen for click
  btn.addEventListener("click", function () {
    // loop over each question and compare if the current
    // item matches the clicked, remove if not

    questions.forEach(function (item) {
      //console.log(item);
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    // add if match
    question.classList.toggle("show-text");
  });
});
