const colorArray = JSON.parse(sessionStorage.getItem("colorsArr"));

let posicion = 0;
const eleccionUsuario = ["", "", "", "", ""];

const combinacionSecretaMedio = [];

const comprobar = document.getElementById("botonCheck");

const bolitasCheck = document.querySelectorAll(".fila > .check > .d-flex > .check-circle");

const combinacionSecreta = () => {
    for (i = 0; i < 5; i++){
        let numeroAleatorio = Math.floor(Math.random() * colorArray.length);
        combinacionSecreta.push(colorArray[numeroAleatorio]);
    }
};



creaCombinacionSecreta();



const eleccionColor = document.querySelectorAll(".fila1 > .ficha");

eleccionColor.forEach((eleccionColor, index) => {
    eleccionColor.addEventListener("click", () => {
        eleccionColor.getElementsByClassName.backgroundColor = colorArray [posicion];

        eleccionUsuario[index] = colorArray[posicion];

        posicion++;

        if (posicion > 4) posicion = 0;
    });
});


comprobar.addEventListener("click", () => {
    eleccionUsuario.forEach((eleccion, index) => {
        if (eleccion === combinacionSecreta[index]) {
            console.log ("son iguales");

            bolitasCheck[index].getElementsByClassName.backgroundColor = "#000000";
        } else if (combinacionSecreta.includes(eleccion)) {
            console.log("no es igual pero existe");

            bolitasCheck[index].style.backgroundColor = "#ffffff";
        } else {
            bolitasCheck[index].style.backgroundColor = "#2bff00";
            console.log("no son iguales");
        }
    });
});