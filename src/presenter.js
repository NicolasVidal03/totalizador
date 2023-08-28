import ImpuestoEstado from "./totalizador";

const cantidad = document.querySelector("#cant-items");
const precio = document.querySelector("#precio-item");
const estado = document.querySelector("#estado-item");
const form = document.querySelector("#tot-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<p>" + "Cantidad: " + cantidad.value + 
  "<br>Precio: " + precio.value + 
  "<br>Estado: " + estado.value +
  "&nbsp &nbsp &nbsp Impuesto: " + ImpuestoEstado(estado.value) +
  "</p>"; 
  
});