"use strict"

function grabarDatos(name, species, imageUrl) {
    console.log("Grabando datos...");

    const solicitudDB = indexedDB.open(nombreDB, versionDB);

    solicitudDB.onerror = function (e) {
        console.log(`IndexedDB error: ${e.target.errorCode}`);
    };

    solicitudDB.onsuccess = function (e) {
        const db = e.target.result;
        const canalDB = db.transaction(tablaDB, "readwrite").objectStore(tablaDB);

        canalDB.add({ name, species, imageUrl }); 
        console.log("Datos guardados en la base de datos");
    };
}




