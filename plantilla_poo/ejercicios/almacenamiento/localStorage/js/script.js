"use strict"

if (window.localStorage) { 
    const nombre = document.getElementById("nombre"); 
    const valor = document.getElementById("valor"); 
    const guardar = document.getElementById("guardar");

    mostrarDatos();

    guardar.addEventListener("click", function () {
        if(nombre.value && valor.value) {
            grabarDatos(nombre.value, valor.value);

        } else {
            alert("Por favor, completa los campos.");
            
        }
    });

} else {
    alert("El navegador no soporta localStorage");
}
