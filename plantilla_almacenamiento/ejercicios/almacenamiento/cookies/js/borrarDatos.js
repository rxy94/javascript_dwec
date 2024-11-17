"use strict"

function borrarDatos(nombre) {

    console.log("Borrando dato...");

    let caducidadCookie = 1 * 60 * 1000;
    let fechaActual = new Date();
    let fechaActualMilisegundos = fechaActual.getTime();
    let caducidadMilisegundos = fechaActualMilisegundos - caducidadCookie; 

    fechaActual.setTime(caducidadMilisegundos); 
    console.log(`Fecha caducidad: ${fechaActual}`);

    document.cookie = nombre + "=;expires=" + fechaActual.toUTCString() + ";path=./;SameSite=Strict;Secure"; 

    mostrarDatos();
    //window.location.reload(); /* Recargo la página para que se dejen de mostrar los datos borrados */
}