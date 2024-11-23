"use strict"
import { taller, MAX_VEHICULOS, VEHICULOS } from "../main.js";
import { actualizarVista } from "./actualizarVista.js";

export function aniadirVehiculo() {
    let vehiculo = Math.floor(Math.random() * 10);

    if (taller.size == MAX_VEHICULOS) {
        document.getElementById("cuerpo").innerHTML = "Es hora de hacer atender los vehículos...";

    } else {
        console.log("Vehículo seleccionado: ", VEHICULOS[vehiculo]);
        taller.encolar(VEHICULOS[vehiculo]);
        actualizarVista(taller);
    }

}

