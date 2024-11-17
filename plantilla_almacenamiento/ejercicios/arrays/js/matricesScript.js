"use strict"

document.addEventListener("DOMContentLoaded", () => {
    const dimension = document.getElementById("dimension");
    const buttons = document.querySelectorAll("button");
    
    let matrizA = [];
    let matrizB = [];
    
    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault(); 

            const size = parseInt(dimension.value);

            if (e.target.textContent !== "Limpiar campos" && isNaN(size) || size <= 0) {
                alert("Por favor, introduce una dimensión válida.");
                return;
            }

            if (e.target.textContent === "Generar matrices") {
                matrizA = generarMatriz(size);
                matrizB = generarMatriz(size);

                actualizarMatriz(matrizA, 0);
                actualizarMatriz(matrizB, 1); 

            } else if (matrizA.length === 0 || matrizB.length === 0) {
                alert("Primero genera las matrices antes de realizar operaciones.");
                return;

            } else {
                let matrizResultante;

                switch (e.target.textContent) {

                    case "Sumar matrices":
                        matrizResultante = sumarMatrices(matrizA, matrizB);
                        break;
                    case "Restar matrices":
                        matrizResultante = restarMatrices(matrizA, matrizB);
                        break;
                    case "Multiplicar matrices":
                        matrizResultante = multiplicarMatrices(matrizA, matrizB);
                        break;

                }
                actualizarMatriz(matrizResultante, 2);

            }
        });
    });
});

//Limpia los campos de las matrices generadas
document.getElementById("limpiar").addEventListener("click", function() {

    document.getElementById("dimension").value = "";

    const tabla = document.querySelector("table");
    const filas = tabla.rows;

    for (let i = 1; i < filas.length; i++) { 
        const celdas = filas[i].cells;
        for (let j = 0; j < celdas.length; j++) {
            celdas[j].innerHTML = "";
        }
    }
});
