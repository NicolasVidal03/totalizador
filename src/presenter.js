import metodos from "./totalizador";

const cantidad = document.querySelector("#cant-items");
const precio = document.querySelector("#precio-item");
const estado = document.querySelector("#estado-item");
const form = document.querySelector("#tot-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  var precioNeto = metodos.PrecioNeto(cantidad.value, precio.value);
  var impuesto = metodos.Impuesto(precioNeto, metodos.ImpuestoEstado(estado.value));
  var descuento = metodos.Descuento(precioNeto);

  div.innerHTML = "<p>" + "Cantidad: " + cantidad.value + 
  "<br>Precio: $" + precio.value + 
  "<br>Estado: " + estado.value +
  "&nbsp &nbsp &nbsp Impuesto: " + metodos.ImpuestoEstado(estado.value) + "%" +
  "<br>Precio neto: $" + precioNeto +
  "<br> Impuesto del precio neto para " + estado.value + ": $" + impuesto +
  "<br> Precio total: $" + metodos.PrecioTotal(precioNeto, impuesto, metodos.Descuento(precioNeto)) +
  "<br> Descuento (" + descuento/precioNeto + "%): $" + descuento +
  "</p>"; 
  
});