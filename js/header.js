// Función para manejar el clic en el botón 1
document.getElementById('boton1').addEventListener('click', function () {
      window.location.href = './';
});
// Función para manejar el clic en el botón 2
document.getElementById('boton2').addEventListener('click', function () {
      window.location.href = './php/body.html';
});
// Función para manejar el clic en el botón 2
document.getElementById('boton3').addEventListener('click', function () {
      window.location.href = './php/habilidades.html';
});
document.getElementById('boton4').addEventListener('click', function () {
      window.location.href = './php/proyectos.html';
});
// Función para manejar el clic en el botón 2
document.getElementById('boton5').addEventListener('click', function () {
      window.location.href = './php/contactos.html';
});
   function cambiarColorAlHacerScroll() {
      var scrollPos = window.scrollY;
      var nuevaColor;

      // Puedes ajustar los valores según tus preferencias
      if (scrollPos > 30) {
            nuevaColor = '#E0E0E0'; // Rojo
      } else {
            nuevaColor = '#FFFFFF'; // Blanco
      }

      // Aplicar el nuevo color de fondo
      document.body.style.backgroundColor = nuevaColor;
}

// Agregar un listener para el evento de scroll
window.addEventListener('scroll', cambiarColorAlHacerScroll);
