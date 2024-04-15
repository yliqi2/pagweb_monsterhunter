document.addEventListener("DOMContentLoaded", function() {
    const desplegable = document.querySelector(".desplegable");
    const contenidoDesplegable = document.querySelector(".contenido-desplegable");

    // Evento click en el botón del desplegable
    desplegable.addEventListener("click", function() {
        contenidoDesplegable.classList.toggle("show");
    });

    // Evento click en cualquier parte fuera del desplegable para cerrarlo
    window.addEventListener("click", function(event) {
        if (!event.target.matches(".dropbtn")) {
            if (contenidoDesplegable.classList.contains("show")) {
                contenidoDesplegable.classList.remove("show");
            }
        }
    });
});