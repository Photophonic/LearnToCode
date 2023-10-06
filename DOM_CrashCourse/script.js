// // getElementByID()
// const title = document.getElementById("main-heading");

// // getElementByClassName()
// // Returns an array like item of all items selected
// const listItem = document.getElementsByClassName("list-item");

// // getElementByTagName()
// // returns all items with the same tag name
// const tagName = document.getElementsByClassName("list-item");

// // querySelector()
// // will select the first instance of an items by css tag
// const selector = document.querySelector(".container");

// // querySelectorAll()
// // will select all items with the same css tag name
// const selectAll = document.querySelectorAll(".container");

// create elements
// grab the ul
const ul = document.querySelector("ul");
// create a new li element
const li = document.createElement("li");

// append the new element into the UL
ul.append(li);
// add the new text to the new li
li.innerText = "X-Men";

// add an attribute to the new li so it can be styled
// one option, set the item and content to add
// li.setAttribute("class", "list-item");

// preferred method to modify an element's class
li.classList.add("list-item");
// to remove
li.classList.remove("list-item");

// Style Elements

// to apply styles
// remember . for class, # for ID
const title = document.querySelector("#main-heading");

// variable.style.css property = value
title.style.color = "red";

const listItems = document.querySelectorAll(".list-item");

for (let i = 0; i < listItems.length; i++) {
  // loop through list and [i] = position in list
  listItems[i].style.fontSize = "1.5rem";
}

// DOM Traversal

// Parent Node Traversal
let ul1 = document.querySelector("ul");

console.log(ul1);
console.log(ul1.parentNode);
console.log(ul1.parentElement);
// these return the container element

// to get the grandparent, chain them
console.log(ul1.parentNode.parentNode);

// additional examples
const html = document.documentElement;
console.log(html.parentNode);
// this will return NULL since there is nothing above it.
console.log(html.parentElement);

// Child Node Traversal
// returns a list of nodes associated to the UL
console.log(ul1.childNodes);
console.log(ul1.firstChild);
console.log(ul1.lastChild);

// .children will grab just the elements vs. text nodes
console.log(ul1.children);
// .first/lastChildElement to get the first/last of the list
console.log(ul1.firstElementChild);
console.log(ul1.lastElementChild);

// Sibling Node Traversal
console.log(ul1.previousSibling);
console.log(ul1.nextSibling);

console.log(ul1.previousElementSibling);
console.log(ul1.nextElementSibling);

// Event Listeners
