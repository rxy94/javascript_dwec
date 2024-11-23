"use strict"

export function actualizarVista(toDoList) {
    const tareasDiv = document.getElementById("tareas");
    tareasDiv.innerHTML = ""; 

    if (toDoList.vacio()) {
        tareasDiv.innerHTML = "No hay tareas pendientes...";

    } else {
        toDoList.mostrar().forEach((tarea) => {
            const tareaElemento = document.createElement("p");

            tareaElemento.textContent = `${tarea.emoji} ${tarea.nombre}`;
            tareaElemento.classList.add("tarea-item");
            tareasDiv.appendChild(tareaElemento);
        });
    }
}

export function actualizarVistaPrior(toDoListPrior) {
    const tareasDiv = document.getElementById("tareasPrior");
    tareasDiv.innerHTML = ""; 

    if (toDoListPrior.vacio()) {
        tareasDiv.innerHTML = "No hay tareas pendientes...";

    } else {
        toDoListPrior.mostrar().forEach((tarea) => {
            const tareaElemento = document.createElement("p");

            tareaElemento.textContent = `${tarea.emoji} ${tarea.nombre} ${tarea.prior}`;
            tareaElemento.classList.add("tarea-item");
            tareasDiv.appendChild(tareaElemento);
        });
    }
}
