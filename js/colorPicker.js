// Obtener nivel del tablero
const nivelTablero = sessionStorage.getItem("nivelTablero");

const divPrincipal = document.querySelector(".color-selector");

const generarOptionColors = () => {
  for (let index = 0; index < nivelTablero; index++) {
    const htmlColorOption = `<div id="colorOption${index+1}" class="colorOption"></div>`;

    divPrincipal.insertAdjacentHTML("beforeend", htmlColorOption)
  }
};

generarOptionColors();

//SELECCIONAR LOS ELEMNTOS DE LAS OPCIONES DE COLOR
const colorOptions = document.querySelectorAll(".colorOption");
const colorPicker = document.getElementById("color-picker");

const colorsArr = [];

//ASIGNAR EL COLOR SELECCIONADO A CADA OPCION DE COLOR Y GUARDAR EN sessionStorage
colorOptions.forEach((option, index) => {
  console.log("Vueltas del forEach:", index, option);
  option.addEventListener("click", () => {
    option.style.backgroundColor = colorPicker.value;

    colorsArr[index] = colorPicker.value;

    //GUARDAR EL VALOR DEL COLOR EN SESSIONSTORAGE
    sessionStorage.setItem(`colorsArr`, JSON.stringify(colorsArr));
  });
});





