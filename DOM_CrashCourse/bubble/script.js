window.addEventListener(
  "click",
  function () {
    console.log("Window");
  },
  false
);

document.addEventListener(
  "click",
  function () {
    console.log("Document");
  },
  false
);

document.querySelector(".div2").addEventListener(
  "click",
  // to stop event propagation.
  // this will stop events either up or down the flow
  function (e) {
    e.stopPropagation();
    console.log("DIV2");
  },
  false
);

document.querySelector(".div1").addEventListener(
  "click",
  function () {
    console.log("DIV1");
  },
  // this will tell the event to only fire once.
  { once: true }
);

document.querySelector(".button").addEventListener(
  "click",
  function (e) {
    // to prevent the default behavior of the element
    e.preventDefault();
    // can modify the font on the target element
    console.log((e.target.innerText = "Clicked"));
  },
  false
);
