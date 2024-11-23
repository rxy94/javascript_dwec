"use strict"
import { taller } from "../main.js";
import { actualizarVista } from "./actualizarVista.js";

export function atenderVehiculo() {
    if (taller.vacio()) {
        document.getElementById("cuerpo").innerHTML = "No hay vehículos que atender...";
    } else {
        taller.desencolar();
        actualizarVista(taller);

        if(taller.vacio()) {
            document.getElementById("cuerpo").innerHTML = "¡Enhorabuena, has reparado todos los vehículos!🤗";
        } else {
            document.getElementById("mensaje").innerHTML += `<br>Quedan por atender: ${taller.size} vehículos`;
        }
        
    }
}