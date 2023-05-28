//SELECCIONAR LOS ELEMNTOS DE LAS OPCIONES DE COLOR
const colorOptions = document.querySelectorAll('.colorOption');
console.log(colorOptions)
const colorPicker = document.getElementById('color-picker');

const colorsArr = []


//ASIGNAR EL COLOR SELECCIONADO A CADA OPCION DE COLOR Y GUARDAR EN sessionStorage
colorOptions.forEach((option, index) => {
  console.log("Vueltas del forEach:" , index, option)
  option.addEventListener('click', () => {
    option.style.backgroundColor = colorPicker.value
    
    colorsArr[index] = colorPicker.value
    
    //GUARDAR EL VALOR DEL COLOR EN SESSIONSTORAGE
    sessionStorage.setItem(`colorsArr`, JSON.stringify
    (colorsArr));
});
});

    





