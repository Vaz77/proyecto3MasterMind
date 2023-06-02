// OBTENER ARRAY COLORES DEL USUARIO
const colorArray = JSON.parse(sessionStorage.getItem("colorsArr"));
// CON JSON.STRINGIFY CONVERTIMOS A STRING CUALQUIER COSA PARA GUARDARLOS EN EL SESSION STORAGE
// CON JSON.PARSE VOLVEMOS A CONVERTIRLO EN EL TIPO DE JAVASCRIPT, OBJETO... ARRAY.... NUMERO...
// CREACIÓN DE VARIABLES / CONSTANTES
const lvlMode = "easy";
const eleccionUsuario = [""];
//ARRAY QUE GUARDARÁ EL COLOR QUE ELIJA EL USUSARIO EN LA POSICIÓN DE LA BOLA QUE LO ELIJA
const combinacionSecreta = [];
let comprobar;
let bolitasCheck;
const filaArray = Array.from(document.querySelectorAll(".fila")).reverse();
console.log("array filas :", filaArray);

let cuentaFilas = 1;
const creaCombinacionSecreta = () => {
  for (i = 0; i < 4; i++) {
    let numeroAleatorio = Math.floor(Math.random() * colorArray.length);
    combinacionSecreta.push(colorArray[numeroAleatorio]);
  }
};
// EJECUTAR LA FUNCIÓN
creaCombinacionSecreta();
console.log("este es el codigo secreto :", combinacionSecreta);
//EJECUTAR SELECCION DEL JUGADOR
const playerSelectColor = (fila) => {
  const eleccionColor = Array.from(fila.querySelectorAll(".ficha"));
  console.log(eleccionColor);
  bolitasCheck = Array.from(fila.querySelectorAll(".check-circle"));
  comprobar = fila.querySelector(`#btnCheck`);
  console.log(comprobar);
  eleccionColor.map((eleccionColor, index) => {
    let posicion = 0;
    eleccionColor.addEventListener("click", () => {
      eleccionColor.style.backgroundColor = colorArray[posicion];
      //AGREGAMOS EL COLOR QUE HA ELEGIDO EL USUARIO A NUESTRO ARRAY FINAL
      eleccionUsuario[index] = colorArray[posicion];
      if (posicion >= colorArray.length - 1) {
        posicion = 0;
      } else {
        posicion++;
      }
    });
  });
};

//ITERACION FILAS
const cambioFilas = () => {
  if (cuentaFilas <= 10) {
    filaArray.forEach((fila, index) => {
      let filaActiva = document.querySelector(`.fila${cuentaFilas}`);
      playerSelectColor(filaActiva);
      //BOTONCHECK
      const bolitasCheck = Array.from(filaActiva.querySelectorAll(".check-circle"));

      comprobar.addEventListener("click", () => {
        //COMPROBAR SI HA GANADO
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
      cuentaFilas++;
    });
  } else {
    alert("has perdido");
  }
};
cambioFilas();

/*
comprobar.addEventListener("click", () => {
let filaSeleccionada = document.getElementsByClassName(`fila${cuentaFilas}`);
playerSelectColor(filaSeleccionada);
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
*/
/*
cuentaFilas++;
 //CAPTURAR BOTON DE VALIDAR, Y AÑADIR EVENTO CLICK
comprobar.addEventListener("click", () => {
  let cuentaFilas = 1;
  let fila = document.getElementsByClassName(`fila${cuentaFilas}`)
  console.log (`fila${cuentaFilas}`)
  console.log("Esta es la variable fila" + fila)
  fila.classList.add("filaInactiva");
  cuentaFilas++
  fila = document.getElementsByClassName(`fila${cuentaFilas}`)
  
  fila.classList.remove("filaInactiva");
  
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

*/












/*
//POSIBLE TABLERO DINAMICO
const iniciarJuego = (nivel) => {
  let numeroFichas = 4;

  if (nivel === 'medio') {
    numeroFichas = 5;
  } else if (nivel === 'dificil') {
    numeroFichas = 7;
  } 

  const combinacion = document.querySelector('.combinacion');
  combinacion.innerHTML = '';

  for (let i = 0; i < numeroFichas; i++) {
    const ficha = document.createElement('div');
    ficha.classList.add('ficha');
    combinacion.appendChild(ficha);
  }

};

 */