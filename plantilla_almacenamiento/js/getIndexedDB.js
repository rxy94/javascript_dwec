"use strict"

async function getIndexedDB() {
    await openDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(["miAlmacen"], "readonly");
        const almacen = transaction.objectStore("miAlmacen");
        
        // Usar un cursor para acceder a la primera entrada
        const request = almacen.openCursor();

        request.onsuccess = function(event) {
            const cursor = event.target.result;
            if (cursor) {
                // Aquí recuperamos la primera clave y su valor
                const key = cursor.key; // La clave (nombre)
                const value = decodeURIComponent(cursor.value.valor); // El valor (contraseña)
                console.log(`IndexedDB: Se ha recuperado la primera entrada: ${key}=${value}`);
                resolve({ key, value }); // Devolvemos tanto la clave como el valor
            } else {
                console.log("No hay entradas en el almacenamiento.");
                resolve(null);
            }
        };

        request.onerror = function(event) {
            console.error("Error en la obtención de datos: ", event);
            reject(event);
        };
    });
}


/* async function getIndexedDB(name) {
    await openDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(["miAlmacen"], "readonly");
        const almacen = transaction.objectStore("miAlmacen");
        const request = almacen.get(name);
        console.log("VALOR DE NAME: ", name);

        request.onsuccess = function() {
            if(request.result) {
                const value = decodeURIComponent(request.result.value);
                console.log(`IndexedDB: Se ha recuperado ${name}=${value}`);
                resolve(value);
    
            } else {
                console.log(`No se encontró el valor para ${name}`);
                resolve(null);
    
            }

        };

        request.onerror = function(event) {
            console.error("Error en la obtención de datos: ", event);
            reject(event);

        };

    });
    
} */
