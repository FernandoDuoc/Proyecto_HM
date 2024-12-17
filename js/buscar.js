// Función para abrir el modal con los datos del reclamo
function openModal(cliente, fecha, estado, descripcion) {
    const modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = `
      <strong>Cliente:</strong> ${cliente}<br>
      <strong>Fecha:</strong> ${fecha}<br>
      <strong>Estado:</strong> ${estado}<br>
      <strong>Descripción:</strong> ${descripcion}
    `;
    document.getElementById("modal").style.display = "flex";
  }
  
  // Función para cerrar el modal
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  