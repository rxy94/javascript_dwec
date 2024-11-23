"use strict"

function grabarDatos(name, value) {
    console.log("Grabando dato...");

    let datosAcceso = JSON.parse(localStorage.getItem("accesoLocal")) || []; //

    datosAcceso.push({
        nombre: name,
        valor: value
    }); 

    localStorage.setItem("accesoLocal", JSON.stringify(datosAcceso)); 

    mostrarDatos();
}