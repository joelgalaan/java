"use strict";
document.addEventListener("DOMContentLoaded", () => {
    // Guardar elemento de la imagen
    const imagen = document.getElementById("miImagen"); // Asegúrate de que sea del tipo correcto
    imagen.addEventListener("mouseover", () => {
        imagen.src = "./imagenes/card-front.png"; // Cambia a la imagen frontal
    });
    imagen.addEventListener("mouseout", () => {
        imagen.src = "./imagenes/card-back.png"; // Vuelve a la imagen de fondo
    });
});
