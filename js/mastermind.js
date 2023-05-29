// OBTENER ARRAY COLORES DEL USUARIO
const colorArray = JSON.parse(sessionStorage.getItem("colorsArr"));
// CON JSON.STRINGIFY CONVERTIMOS A STRING CUALQUIER COSA PARA GUARDARLOS EN EL SESSION STORAGE
// CON JSON.PARSE VOLVEMOS A CONVERTIRLO EN EL TIPO DE JAVASCRIPT, OBJETO... ARRAY.... NUMERO...

// CREACIÓN DE VARIABLES / CONSTANTES
let posicion = 0; // Indicador de la posición para el color
const eleccionUsuario = ["", "", "", ""]; // ARRAY QUE GUARDARÁ EL COLOR QUE ELIJA EL USUSARIO EN LA POSICIÓN DE LA BOLA QUE LO ELIJA
const combinacionSecreta = []; // CREAR ARRAY PARA CONBINACIÓN SECRETA DE COLORES
const comprobar = document.getElementById("btnCheck"); // CAPTURAR BOTON DE CHECK
const bolitasCheck = document.querySelectorAll(".fila1 > .check > .d-flex > .check-circle");  // CAPTURAR LAS BOLITAS PEQUEÑAS DEL CHECK


// GENERAR LA CONBINACIÓN SECRETA DE LA PARTIDA
const creaCombinacionSecreta = () => {
  for (i = 0; i < 4; i++) {
    let numeroAleatorio = Math.floor(Math.random() * colorArray.length);
    combinacionSecreta.push(colorArray[numeroAleatorio]);
  }
};

// EJECUTAR LA FUNCIÓN
creaCombinacionSecreta();

/**********************/
// CAPTURAR EL ELEMENTO DE LAS BOLAS DONDE EL USUSARIO INSERTARÁ LOS COLORES
const eleccionColor = document.querySelectorAll(".fila1 > .ficha");
// querySelectorAll DEVUELVE UN ARRAY CON TODOS LOS ELEMENTOS QUE ENCUENTRE, PUEDE SER UN ARRAY DE 1 POSICIÓN O DE MILES
// querySelector solo devuelve el elemento que le indiques
// Para ambos puedes usar "clases (.mi-clase) id (#mi-id) o selectores de html (body, div, header......)"

// RECORREMOS EL ARRAY DE LAS BOLAS DEL USUSARIO PARA ASIGNARLES A CADA UNA EL EVENTO CLICK
// CUANDO EL USUSARIO HAGA CLICK, SE IRÁN APLICANDO LOS COLORES VISUALMENTE Y GUARDANDO EN NUESTRO ARRAY DE: "eleccionUsuario"
// ADEMAS INCREMENTAMOS O RESETEAMOS LA POSICIÓN DEL COLOR
eleccionColor.forEach((eleccionColor, index) => {
  eleccionColor.addEventListener("click", () => {
    // AL HACER CLICK ASIGNAMOS EL COLOR
    eleccionColor.style.backgroundColor = colorArray[posicion];
    // Y AGREGAMOS EL COLOR QUE HA ELEGIDO EL USUARIO A NUESTRO ARRAY FINAL
    eleccionUsuario[index] = colorArray[posicion];

    posicion++;

    if (posicion > 3) posicion = 0;
  });
});


// CAPTURAR BOTON DE VALIDAR, Y AÑADIR EVENTO CLICK
comprobar.addEventListener("click", () => {

  eleccionUsuario.forEach((eleccion, index) => {
    if (eleccion === combinacionSecreta[index]) {
      console.log("son iguales");

      bolitasCheck[index].style.backgroundColor = "#000000";
    } else if (combinacionSecreta.includes(eleccion)) {
      console.log("no es igual pero existe");

      bolitasCheck[index].style.backgroundColor = "#ffffff";
    } else {
      bolitasCheck[index].style.backgroundColor = "#2bff00";

      console.log("no son iguales");
    }
  });
});












function agregarElementosLista(number){
    const arrDeListas = document.querySelectorAll('.list')
    arrDeListas.forEach((lista, index) => {

        for (let index = 0; index < number; index++) {
            const nuevoElementoHtml = '<button></button>'
            lista.insertAdjacentHTML("beforeend", nuevoElementoHtml)         
        }


    })
    
};

const miLista = document.querySelector('.list')
const boton = document.querySelector('#btnCheck2')

boton.addEventListener('click', () => {
  miLista.classList.remove('desabilitar')

});