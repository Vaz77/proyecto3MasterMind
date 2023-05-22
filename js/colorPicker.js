// Seleccionar los elementos de las opciones de color
const colorOptions = document.querySelectorAll('.color-selector > div');
const colorPicker = document.getElementById('color-picker');


// Convertir NodeList en un array
const colorOptionsArray = Array.from(colorOptions);

// Asignar el color seleccionado a cada opción de color
colorOptionsArray.forEach((option, index) => {
  option.addEventListener('click', function () {
    option.style.backgroundColor = colorPicker.value;
  });
});






