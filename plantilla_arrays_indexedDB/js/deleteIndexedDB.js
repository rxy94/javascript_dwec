"use strict"

async function deleteIndexedDB() {
    await openDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(["miAlmacen"], "readwrite");
        const almacen = transaction.objectStore("miAlmacen");
        const request = almacen.openCursor(); // Abrimos un cursor

        request.onsuccess = function(event) {
            const cursor = event.target.result;
            if (cursor) {
                const firstKey = cursor.key; // Obtenemos la clave del primer registro

                // Ahora eliminamos el registro usando la clave
                const deleteRequest = almacen.delete(firstKey);

                deleteRequest.onsuccess = function(event) {
                    console.log(`La clave ${firstKey} se ha eliminado correctamente.`);
                    resolve(event);
                };

                deleteRequest.onerror = function(event) {
                    console.error("Error al eliminar los datos: ", event);
                    reject(event);
                };
            } else {
                console.log("No hay entradas en el almacenamiento para eliminar.");
                resolve(null);
            }
        };

        request.onerror = function(event) {
            console.error("Error al abrir el cursor: ", event);
            reject(event);
        };
    });
}


/* function deleteIndexedDB(name) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(["miAlmacen"], "readwrite");
        const almacen = transaction.objectStore("miAlmacen");
        const request = almacen.delete(name);

        request.onsuccess = function(event) {
            console.log(`La clave ${name} se ha eliminado correctamente.`);
            resolve(event);
        };

        request.onerror = function(event) {
            console.error("Error al eliminar los datos: ", event);
            reject(event);
        };
    });
} */

