"use strict"
import { TAREAS, toDoList, toDoListPrior, MAX_TAREAS } from "../main.js";
import { generaAleatorio } from "./aleatorio.js";
import { actualizarVista } from "./actualizarVista.js";
import { actualizarVistaPrior } from "./actualizarVista.js";

export function aniadirTarea() {
    const tareaIndice = generaAleatorio(0, TAREAS.length - 1);
    const posicionAleatoria = generaAleatorio(0, toDoList.size());

    if (toDoList.size() >= MAX_TAREAS) {
        document.getElementById("tareas").innerHTML = "Deberías empezar a hacer las tareas...";

    } else {
        toDoList.enlistar(TAREAS[tareaIndice], posicionAleatoria);
        console.log(`Elemento introducido en la posición ${posicionAleatoria}`)
        actualizarVista(toDoList);
    }
    
}

export function eliminarTarea() {
    if (toDoList.vacio()) {
        document.getElementById("tareas").innerHTML = "No tienes tareas pendientes...";

    } else {
        const posicionAleatoria = generaAleatorio(0, toDoList.size() - 1);
        console.log(`Eliminando el elemento de la posicion: ${posicionAleatoria}`);
        toDoList.desenlistar(posicionAleatoria);

        actualizarVista(toDoList);
        if(toDoList.vacio()) {
            document.getElementById("tareas").innerHTML = "¡Enhorabuena, has realizado todas las tareas!😊";
        }
    }

}

export function aniadirPrior() {
    const tareaIndice = generaAleatorio(0, TAREAS.length - 1);
    const posicionAleatoria = generaAleatorio(0, toDoListPrior.size());

    if (toDoListPrior.size() >= MAX_TAREAS) {
        document.getElementById("tareasPrior").innerHTML = "Deberías empezar a hacer las tareas...";

    } else {
        toDoListPrior.enlistar(TAREAS[tareaIndice], posicionAleatoria);
        console.log(`Elemento introducido en la posición ${posicionAleatoria}`)
        actualizarVistaPrior(toDoListPrior);
    }

}

export function eliminarPrior() {
    if (toDoListPrior.vacio()) {
        document.getElementById("tareasPrior").innerHTML = "No tienes tareas pendientes...";

    } else {
        toDoListPrior.posicionMayor();
        actualizarVistaPrior(toDoListPrior);

        if (toDoListPrior.vacio()) {
            document.getElementById("tareasPrior").innerHTML = "¡Enhorabuena, has realizado todas las tareas!😊";
        }
    }
}
