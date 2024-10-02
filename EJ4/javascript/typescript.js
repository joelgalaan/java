"use strict";

// Definir opciones de piedra, papel y tijera
const opciones = {
    piedra: "✊🏻",
    papel: "🖐🏻",
    tijera: "✌🏻"
};

// Función para obtener una opción aleatoria
function obtenerEleccionAleatoria() {
    const opcionAleatoria = Object.keys(opciones);
    const eleccion = Math.floor(Math.random() * opcionAleatoria.length);
    return opcionAleatoria[eleccion];
}

// Función para determinar quién gana
function determinarGanador(jugador, cpu) {
    if (jugador === cpu) {
        return "Es un empate 🤨"; // si son iguales
    } else if (jugador === "piedra" && cpu === "tijera") {
        return "Ganaste 🎇🎆"; // piedra gana a tijera
    } else if (jugador === "papel" && cpu === "piedra") {
        return "Ganaste 🎇🎆"; // papel gana a piedra
    } else if (jugador === "tijera" && cpu === "papel") {
        return "Ganaste 🎇🎆"; // tijera gana a papel
    } else {
        return "La CPU gana 🤖🔥"; // todo lo demás
    }
}

// Función para jugar
function jugar(eleccionJugador) {
    const eleccionCPU = obtenerEleccionAleatoria();
    
    const resultadoDiv = document.getElementById("resultado");
    // Mostramos qué eligió cada uno
    resultadoDiv.innerHTML = "<p>Tu elección: " + opciones[eleccionJugador] + "</p>";
    resultadoDiv.innerHTML += "<p>CPU eligió: " + opciones[eleccionCPU] + "</p>";
    
    // Mostramos el resultado
    const resultado = determinarGanador(eleccionJugador, eleccionCPU);
    resultadoDiv.innerHTML += "<p>Resultado: " + resultado + "</p>";
}

// Función para jugar desde el input
function jugarDesdeInput() {
    const inputEleccion = document.getElementById("inputEleccion").value.toLowerCase();
    if (opciones[inputEleccion]) { // checamos si la opción es válida
        jugar(inputEleccion); // llamamos a la función jugar
    } else {
        alert("Elige piedra, papel o tijera."); // alerta si no es válido
    }
}
