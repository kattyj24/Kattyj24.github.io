// Seleccionar el formulario y el modal
const contactForm = document.getElementById("contactForm");
const modal = document.getElementById("modalExito");
const closeModal = document.querySelector(".close");

if (contactForm) {
    // Evento para enviar el formulario
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío tradicional del formulario

        // Mostrar el modal
        modal.style.display = "block";

        // Reinicia el formulario después de enviar
        contactForm.reset();
    });
}

// Evento para cerrar el modal al hacer clic en la "X"
closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});

// Cerrar el modal al hacer clic fuera de la ventana del modal
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
