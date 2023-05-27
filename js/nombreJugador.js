function guardarNombre() {
    let nombreUsuario = document.getElementById('nombreJugador').value;

    if (nombreUsuario) {
      sessionStorage.setItem('nombreUsuario', nombreUsuario);
      console.log('Nombre guardado');
      window.location.href = "./niveles.html"; 
    } else {
      alert('Por favor, ingresa un nombre antes de guardar');
    }
  }

