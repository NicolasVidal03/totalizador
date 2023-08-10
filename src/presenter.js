import multiplicar from "./multiplicador";
import sumar from "./sumador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const form_mult = document.querySelector("#multiplicar-form");
const div = document.querySelector("#resultado-div");
const div_mult = document.querySelector("#resultado-mult-div"); 

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>Resultado de la suma " + firstNumber + "+" + secondNumber + ": " + sumar(firstNumber, secondNumber) + "</p>";
});

form_mult.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div_mult.innerHTML = "<p>Resultado de la multiplicación " + firstNumber + "x" + secondNumber + ": " + multiplicar(firstNumber, secondNumber) + "</p>";
});
