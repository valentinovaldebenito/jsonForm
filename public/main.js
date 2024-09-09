let form = document.getElementById("formDatos");
let select = document.getElementById("sexSelect");

fetch("../data.json")
  .then((response) => response.json())
  .then((data) => {
    data.sexOptions.forEach((element) => {
      select.innerHTML += `<option value="${element.value}">${element.label}</option>`;
    });
  })
  .catch((error) => console.error("Error al cargar las opciones:", error));

  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('formDatos').addEventListener('submit', function (event) {
      event.preventDefault();
      const form = this;
      const formData = new FormData(form);
      const formObject = {};
      formData.forEach((value, key) => {
        formObject[key] = value;
      });
      console.log(formObject);
    });
  });
