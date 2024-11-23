"use strict";
import { Lista } from "./classes/Lista.js";
import { aniadirTarea } from "./modules/tareas.js";
import { eliminarTarea } from "./modules/tareas.js";
import { aniadirPrior } from "./modules/tareas.js";
import { eliminarPrior } from "./modules/tareas.js";

export const TAREAS = [
    {emoji: "🛏️", nombre: "Hacer la cama", prior: 4},
    {emoji: "🍳", nombre: "Preparar el desayuno", prior: 10},
    {emoji: "🧹", nombre: "Barrer la casa", prior: 5},
    {emoji: "🧺", nombre: "Lavar la ropa", prior: 7},
    {emoji: "📚", nombre: "Leer un libro", prior: 3},
    {emoji: "🚶", nombre: "Dar un paseo", prior: 6},
    {emoji: "🛒", nombre: "Hacer la compra", prior: 15},
    {emoji: "🍽️", nombre: "Poner la mesa", prior: 9},
    {emoji: "💻", nombre: "Revisar correos", prior: 18},
    {emoji: "📞", nombre: "Llamar a un amigo", prior: 20},
    {emoji: "🖼️", nombre: "Ordenar fotos", prior: 13},
    {emoji: "🌱", nombre: "Regar las plantas", prior: 11},
    {emoji: "🏋️", nombre: "Hacer ejercicio", prior: 14},
    {emoji: "✍️", nombre: "Escribir en el diario", prior: 2},
    {emoji: "🧼", nombre: "Lavar los platos", prior: 8},
    {emoji: "🚗", nombre: "Llevar el coche al taller", prior: 19},
    {emoji: "📦", nombre: "Organizar un armario", prior: 12},
    {emoji: "🎧", nombre: "Escuchar música", prior: 1},
    {emoji: "🛁", nombre: "Tomar un baño relajante", prior: 16},
    {emoji: "🕹️", nombre: "Jugar a videojuegos", prior: 17}
];

export const toDoList = new Lista();
export const toDoListPrior = new Lista();
export const MAX_TAREAS = 10;

document.getElementById("aniadir").addEventListener("click", aniadirTarea);
document.getElementById("eliminar").addEventListener("click", eliminarTarea);
document.getElementById("aniadirPrioritario").addEventListener("click", aniadirPrior);
document.getElementById("eliminarPrioritario").addEventListener("click", eliminarPrior);
