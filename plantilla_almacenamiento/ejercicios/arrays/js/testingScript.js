"use strict"

"use strict";

let matrizA = [];
let matrizB = [];

document.addEventListener("DOMContentLoaded", () => {

    const dimension = document.getElementById("dimension");
    const btnGenerarMatrices = document.getElementById("generarMatrices");
    const btnValoresAleatorios = document.getElementById("valoresAleatorios");

    btnGenerarMatrices.addEventListener("click", (e) => {
        e.preventDefault();
        const size = parseInt(dimension.value);
        const min = parseInt(document.getElementById("min").value);
        const max = parseInt(document.getElementById("max").value);
    
        if (isNaN(size) || size <= 0 || isNaN(min) || isNaN(max) || min >= max) {
            alert("Por favor, introduce dimensiones y valores válidos.");
            return;
        }
    
        matrizA = generarMatriz(size, min, max);
        matrizB = generarMatriz(size, min, max);
    
        actualizarMatriz(matrizA, 0);
        actualizarMatriz(matrizB, 1);
    });
    

    // Genera los valores aleatorios de los campos input
    btnValoresAleatorios.addEventListener("click", (e) => {
        e.preventDefault();

        const randomDimension = Math.floor(Math.random() * 7) + 2;
        const randomMin = Math.floor(Math.random() * 6);
        const randomMax = Math.floor(Math.random() * 5) + 6;

        dimension.value = randomDimension;
        document.getElementById("min").value = randomMin;
        document.getElementById("max").value = randomMax;
    });
});

//Limpia los campos de las matrices generadas y los inputs
document.getElementById("limpiar").addEventListener("click", function(e) {
    e.preventDefault();

    document.getElementById("dimension").value = "";
    document.getElementById("min").value = "";
    document.getElementById("max").value = "";

    const tabla = document.querySelector("table");
    const filas = tabla.rows;

    for (let i = 1; i < filas.length; i++) { 
        const celdas = filas[i].cells;
        for (let j = 0; j < celdas.length; j++) {
            celdas[j].innerHTML = "";
        }
    }
});


let intervalId;
let velocidad = 1000;

// Realiza una operación de forma aleatoria
document.getElementById("aleatorio").addEventListener("click", function(e) {
    e.preventDefault();

    if (matrizA.length === 0 || matrizB.length === 0) {
        alert("Primero genera las matrices antes de realizar operaciones.");
        return;
    }

    intervalId = setInterval(() => {
        const operaciones = ["sumar", "restar", "multiplicar"];
        const operacion = operaciones[Math.floor(Math.random() * operaciones.length)];

        let matrizResultante;
        switch (operacion) {
            case "sumar":
                matrizResultante = sumarMatrices(matrizA, matrizB);
                break;
            case "restar":
                matrizResultante = restarMatrices(matrizA, matrizB);
                break;
            case "multiplicar":
                matrizResultante = multiplicarMatrices(matrizA, matrizB);
                break;
        }
        actualizarMatriz(matrizResultante, 2);

    }, velocidad);

});

// Detiene el evento Aleatorio
document.getElementById("parar").addEventListener("click", function(e) {
    e.preventDefault();
    clearInterval(intervalId);

});

// Realiza las operaciones aleatorias más rápido
document.getElementById("rapido").addEventListener("click", function(e) {
    e.preventDefault();
    velocidad = 500; 

    if (intervalId) {
        clearInterval(intervalId);
        intervalId = setInterval(() => {

            const operaciones = ["sumar", "restar", "multiplicar"];
            const operacion = operaciones[Math.floor(Math.random() * operaciones.length)];

            let matrizResultante;
            switch (operacion) {
                case "sumar":
                    matrizResultante = sumarMatrices(matrizA, matrizB);
                    break;
                case "restar":
                    matrizResultante = restarMatrices(matrizA, matrizB);
                    break;
                case "multiplicar":
                    matrizResultante = multiplicarMatrices(matrizA, matrizB);
                    break;
            }
            actualizarMatriz(matrizResultante, 2);

        }, velocidad);

    }
});

//Realiza las operaciones aleatorias más lento
document.getElementById("lento").addEventListener("click", function(e) {
    e.preventDefault();
    velocidad = 2000; 

    if (intervalId) {
        clearInterval(intervalId);
        intervalId = setInterval(() => {

            const operaciones = ["sumar", "restar", "multiplicar"];
            const operacion = operaciones[Math.floor(Math.random() * operaciones.length)];

            let matrizResultante;
            switch (operacion) {
                case "sumar":
                    matrizResultante = sumarMatrices(matrizA, matrizB);
                    break;
                case "restar":
                    matrizResultante = restarMatrices(matrizA, matrizB);
                    break;
                case "multiplicar":
                    matrizResultante = multiplicarMatrices(matrizA, matrizB);
                    break;
            }
            actualizarMatriz(matrizResultante, 2);

        }, velocidad);

    }
});

