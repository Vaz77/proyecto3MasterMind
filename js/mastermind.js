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




/*
// OBTENER LA DIFICULTAD ALMACENADA EN EL SESSIONSTORAGE
const dificultadSeleccionada = sessionStorage.getItem("dificultad");

// FUNCIÓN PARA GENERAR EL TABLERO SEGÚN LA DIFICULTAD SELECCIONADA
const generarTablero = (dificultad) => {
  let numFilas;
  let numFichas;

  // DETERMINAR EL NÚMERO DE FILAS Y FICHAS SEGÚN LA DIFICULTAD SELECCIONADA
  if (dificultad === "facil") {
    numFilas = 10;
    numFichas = 4;
  } if (dificultad === "medio") {
    numFilas = 8;
    numFichas = 5;
  } else if (dificultad === "dificil") {
    numFilas = 6;
    numFichas = 6;
  }

  // LIMPIAR EL TABLERO EXISTENTE
  const tablero = document.querySelector(".tablero");
  tablero.innerHTML = "";

  // GENERAR LAS FILAS Y FICHAS DINÁMICAMENTE
  for (let i = 1; i <= numFilas; i++) {
    const fila = document.createElement("div");
    fila.classList.add("fila", `fila${i}`, "d-flex", "align-items-center", "justify-content-center", "mb-3");

    const checkBtn = document.createElement("button");
    checkBtn.id = `btnCheck${i}`;
    checkBtn.classList.add("btn", "btn-primary");
    checkBtn.textContent = "Check";

    fila.appendChild(checkBtn);

    for (let i = 0; i < numFichas; i++) {
      const ficha = document.createElement("div");
      ficha.classList.add("ficha");
      fila.appendChild(ficha);
    }

    tablero.appendChild(fila);
  }
};

// LLAMAR A LA FUNCIÓN INICIALMENTE PARA GENERAR EL TABLERO DE DIFICULTAD SELECCIONADA
generarTablero(dificultadSeleccionada);
*/