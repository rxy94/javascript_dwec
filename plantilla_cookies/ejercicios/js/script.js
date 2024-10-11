"use strict"

/**
 * Esta función afectará al Home(index.html).
 * Si al recargar la Home no se encuentra la cookie, 
 * pues ésta ha expirado al minuto, se redirigirá al login.
 */
window.addEventListener("load", function() {
    if (getCookie("loggedIn") !== "true") {
        window.location.href = "./login.html";
    }
});

/**
 * Estas 2 funciones afectarán a los ejercicios.
 * Si al recargar la página o pasar a otro ejercicio no se encuentra la cookie,
 * pues ésta ha expirado al minuto, se redirigirá al login.
 * La única diferencia es la ruta al login dependiendo de en qué carpeta
 * se encuentren los ejercicios.
 */
window.addEventListener("load", function() {
    if (getCookie("loggedIn") !== "true") {
        window.location.href = "../../login.html";
    }
});

window.addEventListener("load", function() {
    if (getCookie("loggedIn") !== "true") {
        window.location.href = "../../../login.html";
    }
});

document.getElementById("home").addEventListener("click", function() {
    if(getCookie("loggedIn") === "true") {
        window.location.href = "../../index.html" ;

    } else {
        window.location.href = "../../login.html" 
    }
}) ;

document.getElementById("logout").addEventListener("click", function() {
    eraseCookie("loggedIn") ;
    window.location.href = "../../login.html" ;
}) ;

document.getElementById("dom").addEventListener("click", function() {
    window.location.href = "../dom/dom.html" ;
}) ;

document.getElementById("miniCalculadora").addEventListener("click", function() {
    window.location.href = "../miniCalculadora/miniCalculadora.html" ;
}) ;

document.getElementById("cambioBases").addEventListener("click", function() {
    window.location.href = "../cambioBases/cambioBases.html" ;
}) ;

/* 
CALCULADORA CIENTÍFICA. Todavía no se ha creado este ejercicio:

document.getElementById("calculadora").addEventListener("click", function() {
    loadExercise("calculadora") ;
}) ; */

