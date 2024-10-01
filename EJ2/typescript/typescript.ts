// Lista de emoticones aleatorios
const emoterandom: string[] = ["😎", "🥛", "🤯", "🐣", "🦆"];
// Array para almacenar los emoticones
let emojiArray: string[] = [];


// Función para actualizar el display de resultados
function updateResultDisplay() {
    const resultadoDiv = document.querySelector('.resultado');
    if (resultadoDiv) {
        resultadoDiv.textContent = `RESULTADO = ${emojiArray.join(' ')}`;
    }
}


// Función para agregar un emoticón aleatorio al final
function pushRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emoterandom.length);
    emojiArray.push(emoterandom[randomIndex]);
    updateResultDisplay();
}


// Función para agregar un emoticón aleatorio al principio
function unshiftRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emoterandom.length);
    emojiArray.unshift(emoterandom[randomIndex]);
    updateResultDisplay();
}


// Función para insertar un emoticón en un índice específico
function insertEmojiAtIndex() {
    const insertIndexInput = document.getElementById('insertIndex') as HTMLInputElement;
    const index = parseInt(insertIndexInput.value, 10) - 1; // Ajustar el índice a 0
    const randomIndex = Math.floor(Math.random() * emoterandom.length);


    if (!isNaN(index) && index >= 0) {
        emojiArray.splice(index, 0, emoterandom[randomIndex]);
        updateResultDisplay();
    } else {
        console.log("Índice inválido.");
    }
}
// Función para eliminar el último emoticón
function removeLastEmoji() {
    if (emojiArray.length > 0) {
        emojiArray.pop();
        updateResultDisplay();
    } else {
        console.log("No hay emoticones para eliminar.");
    }
}


// Función para eliminar el primer emoticón
function removeFirstEmoji() {
    if (emojiArray.length > 0) {
        emojiArray.shift();
        updateResultDisplay();
    } else {
        console.log("No hay emoticones para eliminar.");
    }
}


// Función para eliminar un emoticón en un índice específico
function removeEmojiAtIndex() {
    const removeIndexInput = document.getElementById('removeItemIndex') as HTMLInputElement;
    const index = parseInt(removeIndexInput.value, 10) - 1; // Ajustar el índice a 0


    if (!isNaN(index) && index >= 0 && index < emojiArray.length) {
        emojiArray.splice(index, 1);
        updateResultDisplay();
    } else {
        console.log("Índice inválido o fuera de rango.");
    }
}


// Asignar eventos a los botones
document.querySelector('.box.push')?.addEventListener('click', pushRandomEmoji);
document.querySelector('.box.unshift')?.addEventListener('click', unshiftRandomEmoji);
document.querySelector('.box.insert')?.addEventListener('click', insertEmojiAtIndex);
document.querySelector('.box.pop')?.addEventListener('click', removeLastEmoji);
document.querySelector('.box.shift')?.addEventListener('click', removeFirstEmoji);
document.querySelector('.box.remove')?.addEventListener('click', removeEmojiAtIndex);
