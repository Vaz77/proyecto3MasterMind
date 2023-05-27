
// Obtener la lista de colores desde sessionStorage y almacenarlos en un array
const colorArray = [];
const combinacionSecreta = [];

// se recorre desde i = 1 hasta la longitud del sessionStorage, si es diferente a null pinta color con el push
for (let i = 1; i <= sessionStorage.length; i++) {
const colorKey = `colorOption${i}`;
const colorValue = sessionStorage.getItem(colorKey);
if (colorValue !== null) {
    colorArray.push(colorValue);
    }
}
console.log('Este es el colorArray ' + colorArray)

//Declaro funcion creaCombinacionSecreta utilizando la funcion flecha, en cada iteracion del bucle se genera un numero aleatorio con Matth.Random, y con Math.floor redondeo hacia abajo el numero decimal que me devuelve Math.random para obtener un numero entero. La funcion creaCombinacionSecreta genera una combinacion secreta de colores aleatoriamente utilizando Math.random y los almacena en combinacionSecreta
const creaCombinacionSecreta = () => {

    for ( i = 0; i < 4; i++){
        let numeroAleatorio = Math.floor(Math.random()*colorArray.length)
        combinacionSecreta.push(colorArray[numeroAleatorio])
    }
}

//Se llama a la funcion creaCombinacionSecreta para generar una combinacion de colores y almacenarla en el array
creaCombinacionSecreta()
console.log('Esta es la combinacion secreta' + combinacionSecreta)
//Se obtienen elementos del html con sus id utilizando document.getElementById
const eleccionColor1 = document.getElementById('eleccionColor1');
const eleccionColor2 = document.getElementById('eleccionColor2');
const eleccionColor3 = document.getElementById('eleccionColor3');
const eleccionColor4 = document.getElementById('eleccionColor4');

//Declaro funcion posicion con valor 0, se utiliza para llevar el seguimiento de la posicion en el array, si es mayor a 3 se reinicia a 0 para asegurar la posicion este dentro del rango valido
let posicion = 0;

if (posicion > 3){
    posicion=0
}
//Se agrega un evento de escucha, cuando haga click se ejecuta la funcion flecha estableciendo los backgroundColor de los eleccionColor disponibles, segun el valor de colorArray en la posicion de la variable 'posicion', incrementa 'posicion' en 1 y verifica si es mayor a 3, de ser asi reinicia a 0
eleccionColor1.addEventListener('click', () => {

eleccionColor1.style.backgroundColor = colorArray[posicion];
posicion++

if (posicion > 3){
    posicion=0
}


})

eleccionColor2.addEventListener('click', () => {

    eleccionColor2.style.backgroundColor = colorArray[posicion];
    posicion++
    
    if (posicion > 3){
        posicion=0
    }
    
    
    })

    eleccionColor3.addEventListener('click', () => {

        eleccionColor3.style.backgroundColor = colorArray[posicion];
        posicion++
        
        if (posicion > 3){
            posicion=0
        }
        
        
        })

        eleccionColor4.addEventListener('click', () => {

            eleccionColor4.style.backgroundColor = colorArray[posicion];
            posicion++
            
            if (posicion > 3){
                posicion=0
            }
            
            
            })


            //Bolitas check

const combinacionUsuario = [];
const comprobar = document.getElementById('btnCheck');
const bolitaCheckElements = Array.from(document.getElementsByClassName('check-circle'));

comprobar.addEventListener('click', () => {
  const eleccionColor1 = document.getElementById('eleccionColor1').value;
  combinacionUsuario.push(eleccionColor1);
  console.log('Esta es la combinación del usuario: ' + combinacionUsuario);

  if (combinacionSecreta.join("") === combinacionUsuario.join("")) {
    // Acciones cuando las combinaciones son iguales
  }

  for (let i = 0; i < 4; i++) {
    if (combinacionSecreta[i] === combinacionUsuario[i]) {
      bolitaCheckElements[i].style.backgroundColor = '#000000';
    } else {
      bolitaCheckElements[i].style.backgroundColor = '';
    }

    if (combinacionSecreta.includes(combinacionUsuario[i])) {
      // Acciones cuando se cumple la condición
    }
  }
});

            
            
            
