"use strict"

document.getElementById("logout").addEventListener("click", function() {

    const username = localStorage.key(0);

    if (username) {
        console.log(`Eliminando: ${username}`); 
        localStorage.removeItem(username);
    }

    //Se establece la clave de control de sesión que indica que el usuario cerró sesión
    localStorage.setItem("loggedOut", "true");

    //Redirige al login.html después de cerrar la sesión
    window.location.replace("../../login.html");

    //Evitamos que el usuario regrese al index.html al pulsar la flecha de ir atrás del navegador
    history.pushState(null, null, window.location.href);
    history.back(); 
    history.forward();

});

//Redirigimos al login si el usuario ha cerrado sesión
window.addEventListener("load", function() {

    if (localStorage.getItem("loggedOut") === "true") {
        window.location.replace("../../login.html");
    }

});


