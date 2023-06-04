// OBTENER ARRAY COLORES DEL USUARIO
const colorArray = JSON.parse(sessionStorage.getItem("colorsArr"));
// CON JSON.STRINGIFY CONVERTIMOS A STRING CUALQUIER COSA PARA GUARDARLOS EN EL SESSION STORAGE
// CON JSON.PARSE VOLVEMOS A CONVERTIRLO EN EL TIPO DE JAVASCRIPT, OBJETO... ARRAY.... NUMERO...
// CREACIÓN DE VARIABLES / CONSTANTES
const lvlMode = "easy";
let eleccionUsuario = [];
//ARRAY QUE GUARDARÁ EL COLOR QUE ELIJA EL USUSARIO EN LA POSICIÓN DE LA BOLA QUE LO ELIJA
const combinacionSecreta = [];
let comprobar;
let bolitasCheck;

// Capturar todas las filas del tablero y darles la vuelta para que empiece de abajo arriba
const filaArray = Array.from(document.querySelectorAll(".fila")).reverse();

console.log(filaArray)

// Contador de la fila en la que estás
let cuentaFilas = 1;
let totalFilas

const modificarTablero = () => {
  const nivelTablero = parseInt(sessionStorage.getItem("nivelTablero"));

  switch (nivelTablero) {
    case 4:
      totalFilas = 10;
      break;

    case 5:
      totalFilas = 8;

      break;

    case 6:
      totalFilas = 6;
      break;

    default:
      break;
  }

  filaArray.forEach((fila, index) =>{
    if(index >= totalFilas){
      fila.classList.add('ocultar')
    }
  })
}

modificarTablero()




const creaCombinacionSecreta = () => {
  for (i = 0; i < 4; i++) {
    let numeroAleatorio = Math.floor(Math.random() * colorArray.length);
    combinacionSecreta.push(colorArray[numeroAleatorio]);
  }
  console.log("este es el codigo secreto :", combinacionSecreta);
};
creaCombinacionSecreta();

// Mostrar los colores de la combinación secreta en la página de vistaPerdedor
const mostrarColoresMastermind = () => {
  sessionStorage.setItem("combinacionSecreta", JSON.stringify(combinacionSecreta));
};

mostrarColoresMastermind();



//EJECUTAR SELECCION DEL JUGADOR
const playerSelectColor = (fila) => {
  const eleccionColor = Array.from(fila.querySelectorAll(".ficha"));

  console.log("Captura de todas las fichas de esa fila", eleccionColor)

  bolitasCheck = Array.from(fila.querySelectorAll(".check-circle"));
  comprobar = fila.querySelector(`#btnCheck`);
  
  console.log("Captura de los botones check", comprobar);


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
  console.log("llamo a cambio filas ()")
  if (cuentaFilas <= totalFilas) {
      let filaActiva = document.querySelector(`.fila${cuentaFilas}`);
      filaActiva.classList.remove('filaInactiva')    
      playerSelectColor(filaActiva);   
      console.log("fila activa: ", filaActiva)
      //BOTONCHECK
      const bolitasCheck = Array.from(filaActiva.querySelectorAll(".check-circle"));
      comprobar.addEventListener("click", () => {
        if(eleccionUsuario.length < 4){
        }else{
          console.log(eleccionUsuario === combinacionSecreta)
          //COMPROBAR SI HA GANADO
          if(JSON.stringify(eleccionUsuario) === JSON.stringify(combinacionSecreta)){
            //PÁGINA DE VICTORIA
            window.location.href = "../pages/vistaGanador.html";
          }
          filaActiva.classList.add('filaInactiva')
          eleccionUsuario.forEach((eleccion, index) => {
            if (eleccion === combinacionSecreta[index]) {
              console.log("son iguales");
              bolitasCheck[index].style.backgroundColor = "#000000";
            } else if (combinacionSecreta.includes(eleccion)) {
              console.log("no es igual pero existe");
              bolitasCheck[index].style.backgroundColor = "#ffffff";
            } else {
              bolitasCheck[index].style.backgroundColor = "#4C00FF62";
              console.log("no son iguales");
            }
          });
          eleccionUsuario = []
          cuentaFilas++;
          cambioFilas();
        }
        });
  } else {
    window.location.href = "../pages/vistaPerdedor.html";
  }
};

cambioFilas();