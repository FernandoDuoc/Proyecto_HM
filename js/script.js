// Selección de elementos
const forgotPasswordLink = document.getElementById("forgot-password-link");
const passwordRecoveryModal = document.getElementById("password-recovery-modal");
const closeModalIcon = document.getElementById("close-modal");
const closeModalButton = document.getElementById("close-modal-button");

// Asegura que el modal esté oculto al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  passwordRecoveryModal.style.display = "none";
});

// Función para abrir el modal
forgotPasswordLink.addEventListener("click", function (e) {
  e.preventDefault(); // Previene el comportamiento por defecto del enlace
  passwordRecoveryModal.style.display = "flex";
});

// Función para cerrar el modal (con icono 'x')
closeModalIcon.addEventListener("click", function () {
  passwordRecoveryModal.style.display = "none";
});

// Función para cerrar el modal (con botón "Cerrar")
closeModalButton.addEventListener("click", function () {
  passwordRecoveryModal.style.display = "none";
});

// Cierra el modal si el usuario hace clic fuera del contenido
window.addEventListener("click", function (e) {
  if (e.target === passwordRecoveryModal) {
    passwordRecoveryModal.style.display = "none";
  }
});




document.getElementById("encuestaForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const rut = document.getElementById("rut").value;
    const celular = document.getElementById("celular").value;
    const email = document.getElementById("email").value;
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const anio = document.getElementById("anio").value;
    const patente = document.getElementById("patente").value;
    const satisfaccion = document.getElementById("satisfaccion").value;
    const comentarios = document.getElementById("comentarios").value;

    alert(`
        ¡Gracias por tu respuesta!\n
        Nombre: ${nombre} ${apellido}\n
        RUT: ${rut}\n
        Celular: ${celular}\n
        Email: ${email}\n
        Vehículo: ${marca} ${modelo}, Año: ${anio}, Patente: ${patente}\n
        Satisfacción: ${satisfaccion}/10\n
        Comentarios: ${comentarios}
    `);
});


