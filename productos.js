// Índice actual del carrusel
let currentIndex = 0;

// Función para mover el carrusel
function moveCarousel(direction) {
    const slides = document.querySelectorAll(".carousel-slide");
    const totalSlides = slides.length;

    // Remueve la clase "active" del slide actual
    slides[currentIndex].classList.remove("active");

    // Actualiza el índice del carrusel
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

    // Mueve el contenedor a la posición correspondiente
    const container = document.querySelector(".carousel-container");
    container.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Agrega la clase "active" al nuevo slide
    slides[currentIndex].classList.add("active");
}

// Función para iniciar el desplazamiento automático
function autoSlide() {
    setInterval(() => {
        moveCarousel(1); // Avanza al siguiente slide
    }, 5000); // Cambia cada 5 segundos
}

// Inicia el desplazamiento automático cuando la página se carga
document.addEventListener("DOMContentLoaded", () => {
    autoSlide();
});
