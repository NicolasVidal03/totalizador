import fizzbuzz from "./fizzbuzz";

const number = document.querySelector("#fzz-numero");
const form = document.querySelector("#fzz-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const n = Number.parseInt(number.value);

  var cont = 1;
  while (cont <= n) {
    div.innerHTML += "<span>  " + fizzbuzz(cont) + "&nbsp &nbsp &nbsp &nbsp &nbsp </span>";  
    cont++;
  }
  
});