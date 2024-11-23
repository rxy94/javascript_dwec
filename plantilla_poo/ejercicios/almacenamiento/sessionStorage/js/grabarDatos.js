"use strict"

function grabarDatos(name, value) {
    console.log("Grabando dato...");

    let datosAcceso = JSON.parse(sessionStorage.getItem("accesoSession")) || []; //

    datosAcceso.push({
        nombre: name,
        valor: value
    }); 

    sessionStorage.setItem("accesoSession", JSON.stringify(datosAcceso)); 

    mostrarDatos();
}