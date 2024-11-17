"use strict"

let solicitudDB, db, canalDB;

let nombreDB = "DATOS";
let versionDB = 1;
let tablaDB = "datos";

// Abrimos la base de datos
solicitudDB = indexedDB.open(nombreDB, versionDB);

solicitudDB.onerror = function (e) {
    console.error(`IndexedDB error: ${e.target.errorCode}`);
};

solicitudDB.onsuccess = function (e) {
    console.info('Conexión satisfactoria');
    db = e.target.result;
};

solicitudDB.onupgradeneeded = function (e) {
    console.info('Base de datos creada');
    db = e.target.result;
    let registros = db.createObjectStore(tablaDB, { keyPath: "id", autoIncrement: true });
    registros.createIndex("name", "name", { unique: false });
    registros.createIndex("species", "species", { unique: false });
    registros.createIndex("imageUrl", "imageUrl", { unique: false });
    console.info("Almacen de datos creado");
};

const nombre = document.getElementById("nombre");
const valor = document.getElementById("valor");
const img = document.getElementById("url");

const guardar = document.getElementById("guardar");
/* Evento para el botón Guardar */
guardar.addEventListener("click", function() {
    
    if (!nombre.value || !valor.value || !img.value) {
        obtenerDatosAPI(); 

    } else {
        grabarDatos(nombre.value, valor.value, img.value);
        mostrarDatos(); 
        nombre.value = "";
        valor.value = "";
        img.value = "";
    }

});

const masUno = document.getElementById("masUno");
/* Evento para el botón +1 */
masUno.addEventListener("click", function() {
    obtenerDatosAPI();

});

const masTres = document.getElementById("masTres");
/* Evento para el botón +3 */
masTres.addEventListener("click", function() {

    for(let i = 0; i < 3; i++) {
        obtenerDatosAPI();
    }

});

/**
 * Función asíncrona que realiza peticiones a una API
 */
async function obtenerDatosAPI() {
    try {

        let index = Math.floor(Math.random() * 826) + 1; 
        const response = await fetch(`https://rickandmortyapi.com/api/character/${index}`);

        if (!response.ok) {
            throw new Error("Ha ocurrido un error en la solicitud");
        }

        const data = await response.json();
        console.log("Personaje obtenido:", data);

        grabarDatos(data.name, data.species, data.image);
        console.log(data.name, data.species, data.image)

        mostrarDatos(data.name, data.species, data.image);

    } catch (error) {
        console.error("Error al obtener el personaje:", error);
    }
}




