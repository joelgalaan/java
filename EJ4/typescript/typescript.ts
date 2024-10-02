// Definir los iconos de piedra, papel y tijera
const opciones: { [key: string]: string } = {
    piedra: "✊🏻",
    papel: "🖐🏻",
    tijera: "✌🏻"
};

// Función para obtener una elección aleatoria
function obtenerEleccionAleatoria(): string {
    const opcionAleatoria = Object.keys(opciones);
    const eleccion = Math.floor(Math.random() * opcionAleatoria.length);
    return opcionAleatoria[eleccion];
}

// Función para determinar el ganador
function determinarGanador(jugador: string, aleatorio: string): string {
    if (jugador === aleatorio) {
        return "Empate";
    } else if (
        (jugador === "piedra" && aleatorio === "tijera") ||
        (jugador === "papel" && aleatorio === "piedra") ||
        (jugador === "tijera" && aleatorio === "papel")
    ) {
        return "Ganaste 🎆🎇";
    } else {
        return "Ha Ganado la CPU 🤖🔥";
    }
}

// Función del juego con entrada directa
function jugar(eleccionJugador: string) {
    const eleccionCPU = obtenerEleccionAleatoria();

    // Mostrar elecciones
    const resultadoDiv = document.getElementById("resultado")!;
    resultadoDiv.innerHTML = `
        <p>Jugador: ${opciones[eleccionJugador]}</p>
        <p>CPU: ${opciones[eleccionCPU]}</p>
    `;

    // Determinar y mostrar el ganador
    const resultado = determinarGanador(eleccionJugador, eleccionCPU);
    resultadoDiv.innerHTML += `<p>${resultado}</p>`;
}

// Función para jugar desde el input
function jugarDesdeInput() {
    const inputEleccion = (document.getElementById("inputEleccion") as HTMLInputElement).value.toLowerCase();
    if (opciones[inputEleccion]) {
        jugar(inputEleccion);
    } else {
        alert("Por favor, elige una opción válida: piedra, papel o tijera.");
    }
}
