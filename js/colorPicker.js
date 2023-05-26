    // Seleccionar los elementos de las opciones de color
    const colorOptions = document.querySelectorAll('.color-selector > div');
    const colorPicker = document.getElementById('color-picker');

    // Convertir NodeList en un array
    const colorOptionsArray = Array.from(colorOptions);

    // Asignar el color seleccionado a cada opción de color y guardar en sessionStorage
    colorOptionsArray.forEach((option, index) => {
      option.addEventListener('click', function () {
        option.style.backgroundColor = colorPicker.value;

        // Guardar el valor del color en sessionStorage
        sessionStorage.setItem(`colorOption${index + 1}`, colorPicker.value);
      });
    });

    





