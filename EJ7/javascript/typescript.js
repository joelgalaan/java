"use strict";
// Obtener los elementos del DOM
const comidaMeter = document.getElementById('vidacomida');
const playMeter = document.getElementById('vidaplay');
const fuerzaMeter = document.getElementById('vidafuerza');
const sleepMeter = document.getElementById('vidasleep');
const happinessMeter = document.getElementById('vidahappiness');
const heartsDisplay = document.getElementById('hearts'); // Elemento para los corazones
// Inicializar los valores de las barras
comidaMeter.value = 100;
playMeter.value = 100;
fuerzaMeter.value = 100;
sleepMeter.value = 100;
happinessMeter.value = 100;
// Función para actualizar el color de las barras
function actualizarColor(meter) {
    if (meter.value > 66) {
        meter.style.backgroundColor = 'green'; // Alto
    }
    else if (meter.value > 33) {
        meter.style.backgroundColor = 'orange'; // Medio
    }
    else {
        meter.style.backgroundColor = 'red'; // Bajo
    }
}
// Función para alimentar
function alimentar() {
    if (comidaMeter.value < comidaMeter.max) {
        comidaMeter.value += 10; // Incrementa el valor de comida
        actualizarColor(comidaMeter);
        document.getElementById('numcomida').innerText = `${comidaMeter.value}%`;
    }
}
// Función para jugar
function jugar() {
    if (playMeter.value < playMeter.max) {
        playMeter.value += 10; // Incrementa el valor de diversión
        actualizarColor(playMeter);
        document.getElementById('numplay').innerText = `${playMeter.value}%`;
    }
}
// Función para entrenar
function entrenar() {
    if (fuerzaMeter.value < fuerzaMeter.max) {
        fuerzaMeter.value += 10; // Incrementa el valor de fuerza
        actualizarColor(fuerzaMeter);
        document.getElementById('numfuerza').innerText = `${fuerzaMeter.value}%`;
    }
}
// Función para dormir
function dormir() {
    if (sleepMeter.value < sleepMeter.max) {
        sleepMeter.value += 10; // Incrementa el valor de energía
        actualizarColor(sleepMeter);
        document.getElementById('numsleep').innerText = `${sleepMeter.value}%`;
    }
}
// Función para actualizar la barra de salud y corazones
function actualizarSalud() {
    const meters = [comidaMeter, playMeter, fuerzaMeter, sleepMeter];
    // Calcular el promedio de las barras
    let total = 0;
    meters.forEach(meter => {
        total += meter.value;
    });
    const promedio = total / meters.length;
    // Actualizar la barra de salud
    happinessMeter.value = promedio; // Ajusta el valor de la barra de salud
    actualizarColor(happinessMeter); // Actualiza el color
    document.getElementById('numhappiness').innerText = `${promedio}%`; // Actualiza el texto
    // Actualizar los corazones
    actualizarCorazones(promedio);
}
// Función para actualizar los corazones según el promedio
function actualizarCorazones(promedio) {
    const maxHearts = 5; // Número máximo de corazones
    const heartsToShow = Math.floor((promedio / 100) * maxHearts); // Calcular cuántos corazones mostrar
    // Si el promedio es 0, mostrar solo corazones rotos
    if (promedio === 0) {
        heartsDisplay.innerText = '💔💔💔💔💔'; // Todos los corazones rotos
    }
    else {
        heartsDisplay.innerText = '💗'.repeat(heartsToShow) + '💔'.repeat(maxHearts - heartsToShow); // Mostrar corazones intactos y rotos
    }
}
// Función para iniciar el decremento de las barras
function iniciarDecremento() {
    const meters = [comidaMeter, playMeter, fuerzaMeter, sleepMeter, happinessMeter];
    setInterval(() => {
        meters.forEach(meter => {
            if (meter.value > 0) {
                meter.value -= 2; // Disminuye el valor en 1
                actualizarColor(meter); // Actualiza el color
                // Actualiza el texto correspondiente
                const num = meter.id.replace('vida', 'num');
                const numElement = document.getElementById(num);
                if (numElement) {
                    numElement.innerText = `${meter.value}%`;
                }
            }
        });
        // Llama a la función para actualizar la barra de salud
        actualizarSalud();
    }, 1000); // Cada segundo
}
// Asignar eventos a los botones
document.querySelector('.alimentar').addEventListener('click', alimentar);
document.querySelector('.jugar').addEventListener('click', jugar);
document.querySelector('.entrenar').addEventListener('click', entrenar);
document.querySelector('.dormir').addEventListener('click', dormir);
// Iniciar el decremento al cargar
iniciarDecremento();
