const cantidad_items = document.querySelector("#cant-items");
const form = document.querySelector("#tot-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(cantidad_items.value);
  div.innerHTML = "<p>" + "Cantidad: " + cantidad_items.value + "</p>"; 
  
});