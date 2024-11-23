"use strict"
import { Cola } from "./classes/Cola.js";
import { aniadirVehiculo } from "./modules/aniadirVehiculo.js";
import { atenderVehiculo } from "./modules/atenderVehiculo.js";

export const VEHICULOS = [
    {emoji:"🚗", nombre:"Coche"},
    {emoji:"🚑", nombre:"Ambulancia"},
    {emoji:"🚚", nombre:"Camión"},
    {emoji:"🚜", nombre:"Tractor"},
    {emoji:"🚲", nombre:"Bicicleta"},
    {emoji:"🏍️", nombre:"Moto"},
    {emoji:"🚕", nombre:"Taxi"},
    {emoji:"🚍", nombre:"Autobús"},
    {emoji:"🚓", nombre:"Policía"},
    {emoji:"🚆", nombre:"Tren"}
];

export const taller = new Cola();
export const MAX_VEHICULOS = 8;

document.getElementById("llegada").addEventListener("click", aniadirVehiculo);
document.getElementById("atender").addEventListener("click", atenderVehiculo);

