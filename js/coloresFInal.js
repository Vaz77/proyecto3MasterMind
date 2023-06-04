const mostrarColoresColoresFinal = () => {
    const circulos = Array.from(document.querySelectorAll(".circulo"));
    const combinacionSecretaGuardada = JSON.parse(sessionStorage.getItem("combinacionSecreta"));
    if (combinacionSecretaGuardada && combinacionSecretaGuardada.length === 4) {
    combinacionSecretaGuardada.forEach((color, index) => {
        circulos[index].style.backgroundColor = color;
    });
    }
};

mostrarColoresColoresFinal();