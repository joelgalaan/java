"use strict";
var _a, _b, _c, _d, _e, _f;
// Lista de emoticones aleatorios
const emoterandom = ["😎", "🥛", "🤯", "🐣", "🦆"];
// Array para almacenar los emoticones
let emojiArray = [];
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
    const insertIndexInput = document.getElementById('insertIndex');
    const index = parseInt(insertIndexInput.value, 10) - 1; // Ajustar el índice a 0
    const randomIndex = Math.floor(Math.random() * emoterandom.length);
    if (!isNaN(index) && index >= 0) {
        emojiArray.splice(index, 0, emoterandom[randomIndex]);
        updateResultDisplay();
    }
    else {
        console.log("Índice inválido.");
    }
}
// Función para eliminar el último emoticón
function removeLastEmoji() {
    if (emojiArray.length > 0) {
        emojiArray.pop();
        updateResultDisplay();
    }
    else {
        console.log("No hay emoticones para eliminar.");
    }
}
// Función para eliminar el primer emoticón
function removeFirstEmoji() {
    if (emojiArray.length > 0) {
        emojiArray.shift();
        updateResultDisplay();
    }
    else {
        console.log("No hay emoticones para eliminar.");
    }
}
// Función para eliminar un emoticón en un índice específico
function removeEmojiAtIndex() {
    const removeIndexInput = document.getElementById('removeItemIndex');
    const index = parseInt(removeIndexInput.value, 10) - 1; // Ajustar el índice a 0
    if (!isNaN(index) && index >= 0 && index < emojiArray.length) {
        emojiArray.splice(index, 1);
        updateResultDisplay();
    }
    else {
        console.log("Índice inválido o fuera de rango.");
    }
}
// Asignar eventos a los botones
(_a = document.querySelector('.box.push')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', pushRandomEmoji);
(_b = document.querySelector('.box.unshift')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', unshiftRandomEmoji);
(_c = document.querySelector('.box.insert')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', insertEmojiAtIndex);
(_d = document.querySelector('.box.pop')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', removeLastEmoji);
(_e = document.querySelector('.box.shift')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', removeFirstEmoji);
(_f = document.querySelector('.box.remove')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', removeEmojiAtIndex);
