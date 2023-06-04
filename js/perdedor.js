const nombre = sessionStorage.getItem("nombreUsuario");
const nombreJugadorElemento = document.getElementById("nombreJugador");
nombreJugadorElemento.textContent = nombre;