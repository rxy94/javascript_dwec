"use strict"
import { Pila } from "./classes/Pila.js";
import { aniadirPrenda } from "./modules/aniadirPrenda.js";
import { lavarPrenda } from "./modules/lavarPrenda.js";

export const PRENDAS = [
    {emoji:"👗", nombre:"Vestido"},
    {emoji:"👚", nombre:"Camiseta"},
    {emoji:"👖", nombre:"Vaqueros"},
    {emoji:"🧦", nombre:"Calcetines"},
    {emoji:"🧣", nombre:"Bufanda"},
    {emoji:"🧤", nombre:"Guantes"},
    {emoji:"🥼", nombre:"Chaqueta"},
    {emoji:"🧥", nombre:"Abrigo"},
    {emoji:"🦺", nombre:"Chaleco"},
    {emoji:"👔", nombre:"Camisa"}
];

export const cesto = new Pila();
export const MAX_PRENDAS = 10;

document.getElementById("aniadir").addEventListener("click", aniadirPrenda);
document.getElementById("sacar").addEventListener("click", lavarPrenda);

