"use strict"

async function setIndexedDB(name, value) {
    await openDB();
    const transaction = db.transaction(["miAlmacen"], "readwrite");
    const almacen = transaction.objectStore("miAlmacen");
    const request = almacen.put({name: name, value: encodeURIComponent(value)});

    request.onsuccess = function() {
        console.log(`Se ha almacenado ${name}=${encodeURIComponent(value)} en IndexedDB.`);
    };

    request.onerror = function(event) {
        console.error("Error al almacenar los datos: ", event);
    };

    transaction.onerror = function(event) {
        console.log("Error en la transacción: ", event);
    };

    transaction.oncomplete = function() {
        console.log("Transacción completada con éxito.");
    };

}