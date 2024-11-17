"use strict"

function grabarDatos(nombre, valor) {

    console.log("Grabando dato...");
    
    let caducidadCookie = 1 * 60 * 1000;
    let fechaActual = new Date();
    let fechaActualMilisegundos = fechaActual.getTime();
    let caducidadMilisegundos = fechaActualMilisegundos + caducidadCookie; 

    fechaActual.setTime(caducidadMilisegundos); 
    console.log(`Fecha caducidad: ${fechaActual}`);

    document.cookie = encodeURIComponent(nombre) + "=" + encodeURIComponent(valor) + ";expires=" + fechaActual.toUTCString() + ";path=./;SameSite=Strict;Secure";

    mostrarDatos();

}