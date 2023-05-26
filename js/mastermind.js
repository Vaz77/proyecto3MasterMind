
// Obtener la lista de colores desde sessionStorage y almacenarlos en un array
const colorArray = [];
const combinacionSecreta = [];

// se recorre desde i = 1 hasta la longitud del sessionStorage
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

