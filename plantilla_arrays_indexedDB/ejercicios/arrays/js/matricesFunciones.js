"use strict"

/**
 * Genera una matriz aleatoria dada una dimensión
 * @param {*} dimension 
 */
function generarMatriz(dimension) {
    const matriz = [];

    for (let i = 0; i < dimension; i++) {
        const fila = [];

        for(let j = 0; j < dimension; j++) {
            fila.push(Math.floor(Math.random() * 6));
        }

        matriz.push(fila);
    }
    console.log(matriz);
    return matriz;

}

/**
 * Devuelve el resultado de la suma de los valores de dos matrices
 * @param {*} matrizA 
 * @param {*} matrizB 
 */
function sumarMatrices(matrizA, matrizB) {
    return matrizA.map((fila, i) => fila.map((valor, j) => valor + matrizB[i][j]));

}

/**
 * Devuelve el resultado de la resta de los valores de dos matrices
 * @param {*} matrizA 
 * @param {*} matrizB 
 * @returns 
 */
function restarMatrices(matrizA, matrizB) {
    return matrizA.map((fila, i) => fila.map((valor, j) => valor - matrizB[i][j]));

}

/**
 * Devuelve el resultado de la multiplición de los valores de dos matrices
 * @param {*} matrizA 
 * @param {*} matrizB 
 */
function multiplicarMatrices(matrizA, matrizB) {
    const filasA = matrizA.length;
    const columnasA = matrizA[0].length;
    const filasB = matrizB.length;
    const columnasB = matrizB[0].length;

    // Verificar si las matrices son compatibles para la multiplicación
    if (columnasA !== filasB) {
        throw new Error("Las dimensiones de las matrices no son compatibles para la multiplicación.");
    }

    // Inicializar la matriz resultado
    const resultado = [];
    for (let i = 0; i < filasA; i++) {
        resultado[i] = [];
        for (let j = 0; j < columnasB; j++) {
            resultado[i][j] = 0;
        }
    }

    for (let i = 0; i < filasA; i++) {
        for (let j = 0; j < columnasB; j++) {
            for (let k = 0; k < columnasA; k++) {
                resultado[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }
    
    return resultado;
}

/**
 * Actualiza la tabla con la matriz
 * @param {*} matriz 
 * @param {*} indice 
 */
function actualizarMatriz(matriz, indice) {
    const tabla = document.querySelector("table");
    const resultado = tabla.rows[1].cells[indice];
    resultado.replaceChildren();

    if(matriz) {
        matriz.forEach(fila => {
            const elementoFila = document.createElement("tr");

            fila.forEach(value => {
                const celda = document.createElement("td");
                celda.appendChild(document.createTextNode(value));
                elementoFila.appendChild(celda);

            });
            resultado.appendChild(elementoFila);

        });

    }

}




