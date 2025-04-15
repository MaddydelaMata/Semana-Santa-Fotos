// Función para generar el certificado
function generarCertificado() {
    // Obtener el nombre del usuario
    const nombre = document.getElementById('nombre').value;
    const fotoInput = document.getElementById('foto');
    const foto = fotoInput.files[0];
  
    // Verificar que el nombre y la foto han sido ingresados
    if (nombre && foto) {
      // Mostrar el certificado
      document.getElementById('certificado').style.display = 'block';
      
      // Mostrar el nombre en el certificado
      document.getElementById('nombreMostrado').textContent = nombre;
  
      // Mostrar la foto en el certificado
      const reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('fotoMostrada').src = e.target.result;
      };
      reader.readAsDataURL(foto);
  
      // Mostrar el botón de descarga
      document.getElementById('descargarBtn').style.display = 'inline-block';
    } else {
      alert("Por favor, ingresa tu nombre y selecciona una foto.");
    }
}

// Función para cambiar el fondo del certificado
function cambiarFondo() {
  const fondoSeleccionado = document.getElementById('fondo').value;
  document.getElementById('fondoCertificado').src = fondoSeleccionado;
}

// Función para descargar el certificado como imagen
function descargarImagen() {
    // Usar html2canvas para convertir el certificado en una imagen
    html2canvas(document.getElementById('certificado-content')).then(function(canvas) {
      // Crear un enlace para descargar la imagen
      const enlace = document.createElement('a');
      enlace.href = canvas.toDataURL('image/png');
      enlace.download = 'certificado_semanasanta.png';
      enlace.click();
    });
}
