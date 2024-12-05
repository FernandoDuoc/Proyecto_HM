// Referencias a los elementos
const forgotPasswordLink = document.getElementById("forgot-password-link");
const modal = document.getElementById("password-recovery-modal");
const closeModalButton = document.getElementById("close-modal");

// Mostrar el modal
forgotPasswordLink.addEventListener("click", (event) => {
  event.preventDefault(); // Evitar recargar la página
  modal.style.display = "flex"; // Mostrar el modal
});

// Cerrar el modal
closeModalButton.addEventListener("click", () => {
  modal.style.display = "none"; // Ocultar el modal
});

// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
