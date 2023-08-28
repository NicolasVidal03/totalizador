import metodos from "./totalizador";

const cantidad = document.querySelector("#cant-items");
const precio = document.querySelector("#precio-item");
const estado = document.querySelector("#estado-item");
const form = document.querySelector("#tot-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  var precio_neto = metodos.PrecioNeto(cantidad.value, precio.value);
  var impuesto = metodos.ImpuestoEstado(estado.value);

  div.innerHTML = "<p>" + "Cantidad: " + cantidad.value + 
  "<br>Precio: " + precio.value + 
  "<br>Estado: " + estado.value +
  "&nbsp &nbsp &nbsp Impuesto: " + impuesto +
  "<br>Precio neto: " + precio_neto +
  "<br> Impuesto del precio neto para " + estado.value + ": " + metodos.Impuesto(precio_neto, impuesto) +
  "</p>"; 
  
});