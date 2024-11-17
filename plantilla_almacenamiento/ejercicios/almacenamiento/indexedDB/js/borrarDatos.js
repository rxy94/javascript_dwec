"use strict"

function borrarDatos(id) {
    console.log("Borrando datos...");
    const solicitudDB = indexedDB.open(nombreDB, versionDB);

    solicitudDB.onerror = function (e) {
        console.error(`IndexedDB error: ${e.target.errorCode}`);
    };

    solicitudDB.onsuccess = function (e) {
        const db = e.target.result;
        const canalDB = db.transaction(tablaDB, "readwrite").objectStore(tablaDB);
        canalDB.delete(id);

        console.log(`Dato con id ${id} borrado.`);
        mostrarDatos();  
    };
}
