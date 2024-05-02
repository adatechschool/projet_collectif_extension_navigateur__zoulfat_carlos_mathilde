"use strict";

let selectedElements;
const btnON = document.querySelector("#save-btn");

btnON.addEventListener("click", function (e) {
  e.preventDefault();
  selectedElements = Array.from(
    document.querySelectorAll("h1,h2,h3,h4,h5,p,a,span,caption")
  );
  console.log(selectedElements);
  const filteredElements = selectedElements.filter((el) => {
    console.log(el.innerHTML);
    return el.innerHTML.includes("Bye");
  });
  console.log(filteredElements);

  filteredElements.forEach((el) => {
    let pattern = "of";
    let re = new RegExp(pattern, "g");
    console.log(el.innerHTML);
    el.innerHTML = el.innerHTML.replaceAll(
      "Bye",
      `<span style="background-color: orangered">BAR</span>`
    );
  });
  console.log(filteredElements);
});
