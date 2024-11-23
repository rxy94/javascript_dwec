"use strict"

document.addEventListener("DOMContentLoaded", () => {

    let textarea = document.getElementById("textbox");
    let interval;
    let intervalTime = 2000;
    let isActive = false;

    //Convierte todo a mayúsculas
    document.getElementById("mayusculas").addEventListener("click", () => textarea.value = textarea.value.toUpperCase());

    //Convierte todo a minúsculas
    document.getElementById("minusculas").addEventListener("click", () => textarea.value = textarea.value.toLowerCase());

    //Convierte la 1ª letra de cada palabra en mayúscula
    document.getElementById("primeraLetraMayus").addEventListener("click", primeraLetraMayuscula) ;

    //Convierte la ultima letra de cada palabra en mayúscula
    document.getElementById("ultimaLetraMayus").addEventListener("click", ultimaLetraMayuscula) ;

    //Convierte la 1ª letra de cada palabra en minúscula
    document.getElementById("primeraLetraMinus").addEventListener("click", primeraLetraMinuscula) ;

    //Convierte la última letra de cada palabra en minúscula
    document.getElementById("ultimaLetraMinus").addEventListener("click", ultimaLetraMinuscula) ;

    //Convierte todas las vocales en mayúsculas
    document.getElementById("vocalesMayus").addEventListener("click", vocalesMayusculas) ;
    
    //Convierte todas las vocales en minúsculas
    document.getElementById("vocalesMinus").addEventListener("click", vocalesMinusculas) ;

    //Convierte todas las consonantes en mayúsculas
    document.getElementById("consonantesMayus").addEventListener("click", consonantesMayusculas) ;

    //Convierte todas las consonantes en minúsculas
    document.getElementById("consonantesMinus").addEventListener("click", consonantesMinusculas) ;

    //Ejecuta una de las funciones anteriores de forma aleatoria
    document.getElementById("aleatorio").addEventListener("click", activarIntervalo) ;

    //Acelera la ejecución de Aleatorio
    document.getElementById("rapido").addEventListener("click", aleatorioRapido);

    //Ralentiza la ejecución de Aleatorio
    document.getElementById("lento").addEventListener("click", aleatorioLento);

    //Para la ejecución de Aleatorio
    document.getElementById("parar").addEventListener("click", pararAleatorio);

    //Carga información desde una API al textarea
    document.getElementById("cargar").addEventListener("click", obtenerPersonaje);

    //Limpia el texto que hay dentro del textarea
    document.getElementById("limpiar").addEventListener("click", limpiarTexto);

    /**
     * Activa el intervalo para la función isRandom()
     */
    function activarIntervalo() {
        if (!isActive) {
            startInterval();
        }
    }

    /**
     *  Inicia el intervalo en el que se ejecutarán las funciones con la opción Aleatorio
     *  Intervalo de 2s 
     */
    function startInterval() {
        isActive = true;
        interval = setInterval(isRandom, intervalTime);
    }

    /**
     *  Para la ejecución de isRandom() y limpia los intervalos
     */
    function pararAleatorio() {
        clearInterval(interval);
        isActive = false;
    }

    /**
     *  Acelera la ejecución de isRandom()
     *  Intervalo de 1s 
     */
    function aleatorioRapido() {
        if (intervalTime > 500) { 
            intervalTime -= 1000;
            restartInterval();
        }
    }

    /**
     *  Ralentiza la ejecución de isRandom()
     *  Intervalo de 3s 
     */
    function aleatorioLento() {
        intervalTime += 1000;
        restartInterval();
    }

    /**
     * Reinicia el intervalo con un nuevo valor
     */
    function restartInterval() {
        pararAleatorio();
        startInterval();
    }

});




