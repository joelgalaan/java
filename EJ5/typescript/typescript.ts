"use strict";
document.addEventListener("DOMContentLoaded", () => {
    // Guardar elemento de la imagen
    const imagen = document.getElementById("miImagen") as HTMLImageElement; // Asegúrate de que sea del tipo correcto

    // Asegúrate de que la imagen se ha cargado
    if (imagen) {
        imagen.addEventListener("mouseover", () => {
            imagen.src = "/EJ5/imagenes/card-front.png"; // Cambia a la imagen frontal
        });
        
        imagen.addEventListener("mouseout", () => {
            imagen.src = "/EJ5/imagenes/card-back.png"; // Vuelve a la imagen de fondo
        });
    } else {
        console.error("No se pudo encontrar la imagen con el id 'miImagen'.");
    }
});
