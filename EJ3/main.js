// Esperamos a que el documento esté completamente cargado
$(document).ready(function() {
    // Seleccionamos todos los elementos <p> (párrafos) y los almacenamos en una variable llamada 'paragrafo'
    const paragrafo = $("p");

    // Cuando se hace clic en el botón con id "botonRojo"
    $("#botonRojo").click(function() {
        // Cambiamos el fondo del primer párrafo (el primer párrafo en la lista)
        // a rojo o lo revertimos si ya estaba rojo
        $(paragrafo[0]).toggleClass("rojo");
    });

    // Seleccionamos el botón con id "botonAzul" usando JavaScript puro
    const botonAzul = document.getElementById("botonAzul");
    
    // Cuando se hace clic en el botón "botonAzul"
    botonAzul.onclick = function() {
        // Cambiamos el fondo del segundo párrafo (el segundo párrafo en la lista)
        // a azul o lo revertimos si ya estaba azul
        paragrafo[1].classList.toggle("blue");
    };
});
