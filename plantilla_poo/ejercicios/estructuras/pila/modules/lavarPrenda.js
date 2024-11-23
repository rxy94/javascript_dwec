"use strict"
import { cesto } from "../main.js";
import { actualizarVista } from "./actualizarVista.js";

export function lavarPrenda() {
    if (cesto.vacio()) {
        document.getElementById("cuerpo").innerHTML = "No hay ropa que lavar...";
    } else {
        cesto.desapilar();
        actualizarVista(cesto);

        if(cesto.vacio()) {
            document.getElementById("cuerpo").innerHTML = "¡Enhorabuena, has terminado de hacer la colada!😄";
        } else {
            document.getElementById("cuerpo").innerHTML += `<br />Quedan por lavar: ${cesto.size} prendas`;
        }
        
    }
}