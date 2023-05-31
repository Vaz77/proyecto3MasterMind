// OBTENER ARRAY COLORES DEL USUARIO
const colorArray = JSON.parse(sessionStorage.getItem("colorsArr"));
// CON JSON.STRINGIFY CONVERTIMOS A STRING CUALQUIER COSA PARA GUARDARLOS EN EL SESSION STORAGE
// CON JSON.PARSE VOLVEMOS A CONVERTIRLO EN EL TIPO DE JAVASCRIPT, OBJETO... ARRAY.... NUMERO...

// CREACIÓN DE VARIABLES / CONSTANTES
const lvlMode = "easy";
const eleccionUsuario = (lvlMode === "easy") ? [A, B, C, D] : (lvlMode === "medium") ? [A, B, C, D, E] : [A, B, C, D, E, F];// ARRAY QUE GUARDARÁ EL COLOR QUE ELIJA EL USUSARIO EN LA POSICIÓN DE LA BOLA QUE LO ELIJA
const combinacionSecreta = []; // CREAR ARRAY PARA CONBINACIÓN SECRETA DE COLORES
const comprobar = document.getElementById("btnCheck"); // CAPTURAR BOTON DE CHECK
const bolitasCheck = document.querySelectorAll(".fila1 > .check > .d-flex > .check-circle");  // CAPTURAR LAS BOLITAS PEQUEÑAS DEL CHECK
const filaArray = Array.from(document.querySelectorAll(".fila")).reverse();
console.log("array filas :", filaArray);







// GENERAR LA CONBINACIÓN SECRETA DE LA PARTIDA
const creaCombinacionSecreta = () => {
  for (i = 0; i < 4; i++) {
    let numeroAleatorio = Math.floor(Math.random() * colorArray.length);
    combinacionSecreta.push(colorArray[numeroAleatorio]);
  }
};

// EJECUTAR LA FUNCIÓN
creaCombinacionSecreta();
console.log("este es el codigo secreto :" +combinacionSecreta);




//EJECUTAR SELECCION DEL JUGADOR
const playerSelectColor = (fila) => {
  const eleccionColor = fila.querySelectorAll(".ficha");
  console.log(eleccionColor)
  eleccionColor.forEach((eleccionColor, index) => {
  let posicion = 0;
  eleccionColor.addEventListener("click", () => {
    // AL HACER CLICK ASIGNAMOS EL COLOR
    eleccionColor.style.backgroundColor = colorArray[posicion];
    // Y AGREGAMOS EL COLOR QUE HA ELEGIDO EL USUARIO A NUESTRO ARRAY FINAL
    eleccionUsuario[index] = colorArray[posicion];
    if (posicion > colorArray.length){
      posicion = 0;
    }    
    posicion++;
  });  
});
}



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



//ITERACION FILAS
let cuentaFilas = 1;


const cambioFilas = () => {
  if(cuentaFilas <= 10 ) {
      filaArray.forEach((fila, index) => {
    let filaActiva = document.querySelector(`.fila${cuentaFilas}`)
    playerSelectColor(filaActiva)

        //BOTONCHECK
          //COMPROBAR SI HA GANADO
            //SI HA GANADO: 
              //COLOREAR DE ROJO LA PUNTUACION
              //REDIRIGIR A LA PAGINA GANADORA
            //SI NO HA GANADO
              //COMPROBAR SI HAY VALORES
                //SI HAY VALORES
                  //COMPROBAR VALORES
                  //PINTAR VALORES
                  //CUENTAFILAS++
                //NO HAY VALORES 
                  //RETURN



    cuentaFilas++
  }) 
  }
  else{
    alert("has perdido");
  }
}
cambioFilas() 











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