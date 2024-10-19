"use strict"

const cadenaTexto = document.getElementById("textbox");

/**
 * 
 * @param {*} min 
 * @param {*} max 
 * @returns un número aleatorio
 */
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Función asíncrona para obtener información desde una API
 */
async function obtenerPersonaje() {
    
    try {
        
        let index = aleatorio(0, 200);
        const response = await fetch(`https://rickandmortyapi.com/api/character/${index}`);

        if (!response.ok) {
            throw new Error("Ha ocurrido un error en la solicitud");
        }

        console.log(response);

        const data = await response.json();
        console.log(data);
        cadenaTexto.value= `Character "${data.name}" information: species - ${data.species}, status - ${data.status}, gender - ${data.gender}`;

    } catch (error) {

        cadenaTexto.value = 'Ocurrió un error al obtener el personaje.';
        console.error(error);

    }

}

/**
 *  Vacía el contenido que hay dentro del textarea
 */
function limpiarTexto() {
    cadenaTexto.value = "";
}

/**
 *  Pone en mayúscula la primera letra de una palabra
 */
function primeraLetraMayuscula() {

    let textarea = document.getElementById("textbox");
    let palabras = textarea.value.split(' ');
    let nuevaCadena = "";

    for (let i = 0; i < palabras.length; i++) {
        const palabra = palabras[i];

        if (palabra.length > 0) {
            nuevaCadena += palabra.charAt(0).toUpperCase() + palabra.slice(1) + " ";
        }
        
    }

    textarea.value = nuevaCadena.trim();

}

/**
 *  Pone en mayúscula la última letra de una palabra
 */
function ultimaLetraMayuscula() {

    let textarea = document.getElementById("textbox");
    let palabras = textarea.value.split(' ');
    let nuevaCadena = "";

    for (let i = 0; i < palabras.length; i++) {
        const palabra = palabras[i];

        if (palabra.length > 0) {
            nuevaCadena += palabra.slice(0, -1) + palabra.charAt(palabra.length - 1).toUpperCase() + " ";
        }
        
    }

    textarea.value = nuevaCadena.trim();

}

/**
 *  Pone en minúscula la primera letra de una palabra
 */
function  primeraLetraMinuscula() {

    let textarea = document.getElementById("textbox");
    let palabras = textarea.value.split(' ');
    let nuevaCadena = "";

    for (let i = 0; i < palabras.length; i++) {
        const palabra = palabras[i];

        if (palabra.length > 0) {
            nuevaCadena += palabra.charAt(0).toLowerCase() + palabra.slice(1) + " ";
        }
        
    }

    textarea.value = nuevaCadena.trim();

}

/**
 *  Pone en minúscula la última letra de una palabra
 */
function ultimaLetraMinuscula() {

    let textarea = document.getElementById("textbox");
    let palabras = textarea.value.split(' ');
    let nuevaCadena = "";

    for (let i = 0; i < palabras.length; i++) {
        const palabra = palabras[i];

        if (palabra.length > 0) {
            nuevaCadena += palabra.slice(0, -1) + palabra.charAt(palabra.length - 1).toLowerCase() + " ";
        }
        
    }

    textarea.value = nuevaCadena.trim();

}

/**
 * Pone en mayúsculas todas las vocales de una palabra
 */
function vocalesMayusculas() {

    let textarea = document.getElementById("textbox");
    let sentence = textarea.value;

    let capitalizedSentence = sentence.replace(/[aeiouáéíóúü]/gi, (match) => match.toUpperCase());

    textarea.value = capitalizedSentence;

}

/**
 * Pone en minúsculas todas las vocales de una palabra
 */
function vocalesMinusculas() {

    let textarea = document.getElementById("textbox");
    let sentence = textarea.value;

    let loweredSentence = sentence.replace(/[aeiouáéíóúü]/gi, (match) => match.toLowerCase());

    textarea.value = loweredSentence;

}

/**
 * Pone en mayúsculas todas las consonantes de una palabra
 */
function consonantesMayusculas() {

    let textarea = document.getElementById("textbox");
    let sentence = textarea.value;

    let loweredSentence = sentence.replace(/[^aeiouáéíóúü]/gi, (match) => match.toUpperCase());

    textarea.value = loweredSentence;

}

/**
 * Pone en minúsculas todas las consonantes de una palabra
 */
function consonantesMinusculas() {

    let textarea = document.getElementById("textbox");
    let sentence = textarea.value;

    let loweredSentence = sentence.replace(/[^aeiouáéíóúü]/gi, (match) => match.toLowerCase());

    textarea.value = loweredSentence;

}

let lastIndex = -1;

/**
 *  Ejecuta una función de manera aleatoria
 */
function isRandom() {
    
    const stringFunctions = [
        primeraLetraMayuscula,
        ultimaLetraMayuscula,
        primeraLetraMinuscula,
        ultimaLetraMinuscula,
        vocalesMayusculas,
        vocalesMinusculas,
        consonantesMayusculas,
        consonantesMinusculas
    ];

    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * stringFunctions.length);
    } while (newIndex === lastIndex);

    lastIndex = newIndex;
    console.log(lastIndex);
    
    stringFunctions[newIndex]();

}



