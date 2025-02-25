document.addEventListener("DOMContentLoaded", function () {
    // Simular tiempo de carga
    setTimeout(() => {
        // Ocultar el preloader
        const preloader = document.getElementById("preloader");
        preloader.style.display = "none";

        // Mostrar el contenido principal
        const content = document.getElementById("content");
        content.style.display = "block";
    }, 2000); // Ajusta el tiempo en milisegundos según sea necesario
});

