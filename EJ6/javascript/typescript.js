"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const imagenBombilla = document.getElementById("miBombilla");
    const imagenInterruptor = document.getElementById("miInterruptor");
    const rotacionBar = document.getElementById("rotacion");
    // Cambiar la rotación de la imagen
    rotacionBar.addEventListener("input", () => {
        const rotacion = rotacionBar.value;
        imagenBombilla.style.transform = `rotate(${rotacion}deg)`; // Usa backticks para interpolar la variable
    });
    // Control de tamaño
    const tamañoBar = document.getElementById("tamaño");
    tamañoBar.addEventListener("input", () => {
        const tamañoActual = parseInt(imagenBombilla.style.width) || 500; // Obtener tamaño actual o valor por defecto
        const nuevoTamaño = (tamañoBar.value - 50) + tamañoActual; // Calcular nuevo tamaño a partir del actual
        imagenBombilla.style.width = `${nuevoTamaño}px`;
        imagenBombilla.style.height = `${nuevoTamaño}px`;
    });
    // Control de transparencia (intensidad de luz)
    const transpaBar = document.getElementById("transpa");
    transpaBar.addEventListener("input", () => {
        const valorTranspa = parseInt(transpaBar.value, 10);
        if (valorTranspa === 0) {
            // Cuando la transparencia está en 0, la bombilla está apagada
            imagenBombilla.src = "/EJ6/imagenes/off.jpg";
        }
        else {
            // Cuando hay un valor positivo, la bombilla está encendida
            imagenBombilla.src = "/EJ6/imagenes/on.jpg";
            imagenBombilla.style.opacity = `${valorTranspa / 100}`; // Cambiar la transparencia en base al valor
        }
    });
    // Cambiar la imagen al hacer clic en el interruptor
    imagenInterruptor.addEventListener("click", () => {
        if (imagenInterruptor.src.endsWith("/EJ6/imagenes/boff.jpg")) {
            imagenInterruptor.src = "/EJ6/imagenes/bon.jpg"; // Cambia a la imagen de encendido
            imagenBombilla.src = "/EJ6/imagenes/on.jpg"; // Bombilla encendida
        }
        else {
            imagenInterruptor.src = "/EJ6/imagenes/boff.jpg"; // Cambia a la imagen de apagado
            imagenBombilla.src = "/EJ6/imagenes/off.jpg"; // Bombilla apagada
        }
    });
});
