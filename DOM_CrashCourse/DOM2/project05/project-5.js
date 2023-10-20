// Variables
const addTask = document.getElementById("add-task");
const inputTask = document.getElementById("input-task");
// blank DIV on the HTML, will have elements attached
const taskContainer = document.getElementById("task-container");

// Event Listener for add button
addTask.addEventListener("click", function () {
  // create a div that will house the task and the buttons
  let task = document.createElement("div");
  // give classList so it can be styled.
  task.classList.add("task");

  // create a list item and display the text from value
  let li = document.createElement("li");
  // grab the value of the li
  li.innerText = `${inputTask.value}`;
  // append the li to the task variable
  task.appendChild(li);

  // create a check button
  let checkButton = document.createElement("button");
  // add html of the button for icons
  checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
  // add styling from css with classList
  checkButton.classList.add("checkTask");
  // append the button to the task element
  task.appendChild(checkButton);

  // Same notes above
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  deleteButton.classList.add("deleteTask");
  task.appendChild(deleteButton);

  // validate if the inputTask value (text box) is empty
  if (inputTask.value === "") {
    alert("Please enter a task");
  } else {
    // if there is a value, append the entire task variable to the container
    taskContainer.appendChild(task);
  }
  // this will clear the field after adding an item
  inputTask.value = "";

  checkButton.addEventListener("click", function () {
    // move one element up (LI) style the text with strickthrough
    checkButton.parentElement.style.textDecoration = "line-through";
  });

  // grab the calling element with e
  deleteButton.addEventListener("click", function (e) {
    // set the target of e
    let target = e.target;

    // move up to the div element (remove -> li -> div, two hops ups )
    target.parentElement.parentElement.remove();
  });
});
