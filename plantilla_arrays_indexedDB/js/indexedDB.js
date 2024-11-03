"use strict"

let db;

async function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("LoginDB", 1);

        request.onerror = function(event) {
            console.error("Error al abrir la base de datos: ", event.target.error);
            reject(event);
        }

        request.onsuccess = function(event) {
            db = event.target.result;
            console.log("La base de datos se ha abierto con éxito.");
            resolve(db);
        };

        request.onupgradeneeded = function(event) {
            db = event.target.result;

            if(!db.objectStoreNames.contains("miAlmacen")) {
                db.createObjectStore("miAlmacen", {keyPath: "name"});
                console.log(`Almacén creado`);

            }
            
        };

    });

}