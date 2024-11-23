"use strict"
import { cesto, MAX_PRENDAS, PRENDAS } from "../main.js";
import { actualizarVista } from "./actualizarVista.js";

export function aniadirPrenda() {
    let prenda = Math.floor(Math.random() * 10);

    if (cesto.size == MAX_PRENDAS) {
        document.getElementById("cuerpo").innerHTML = "Es hora de hacer la colada...";

    } else {
        console.log("Prenda seleccionada: ", PRENDAS[prenda]);
        cesto.apilar(PRENDAS[prenda]);
        actualizarVista(cesto);
    }

}


