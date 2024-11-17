"use strict"

function mostrarDatos() {
    console.log("Mostrando datos...");
    const cuerpo = document.getElementById("cuerpo");
    cuerpo.innerHTML = "<br><p>Los datos almacenados son: </p><br>";

    const solicitudDB = indexedDB.open(nombreDB, versionDB);

    solicitudDB.onerror = function (e) {
        console.error(`IndexedDB error: ${e.target.errorCode}`);
    };

    solicitudDB.onsuccess = function (e) {
        const db = e.target.result;
        const canalDB = db.transaction(tablaDB, "readonly").objectStore(tablaDB);

        canalDB.getAll().onsuccess = function (e) {
            const registros = e.target.result;
            console.log("Registros:", registros);

            if (registros.length === 0) {
                cuerpo.innerHTML = "<br><p>No existen datos almacenados.</p>";
                return;
            }

            registros.forEach((registro) => {
                let fila = document.createElement("tr"),
                    celdaNombre = document.createElement("td"),
                    celdaValor = document.createElement("td"),
                    celdaImg = document.createElement("td"),
                    celdaBorrar = document.createElement("td"),
                    celdaActualizar = document.createElement("td"),
                    botonBorrar = document.createElement("button"),
                    botonActualizar = document.createElement("button");

                celdaNombre.innerHTML = registro.name;
                celdaValor.innerHTML = registro.species;
                celdaImg.innerHTML = `<img src="${registro.imageUrl}" alt="${registro.name}" width="50">`;

                /* Evento para el botón Borrar */
                botonBorrar.textContent = "Borrar";
                botonBorrar.className = "borrar";
                botonBorrar.addEventListener("click", function () {
                    borrarDatos(registro.id); 
                });

                /* Evento para el botón Actualizar */
                botonActualizar.textContent = "Actualizar";
                botonActualizar.className = "actualizar";
                botonActualizar.addEventListener("click", function() {
                    document.getElementById("nombre").value = registro.name;
                    document.getElementById("valor").value = registro.species;
                    document.getElementById("url").value = registro.imageUrl;
                    borrarDatos(registro.id);
                });

                celdaBorrar.appendChild(botonBorrar);
                celdaActualizar.appendChild(botonActualizar);
                fila.appendChild(celdaNombre);
                fila.appendChild(celdaValor);
                fila.appendChild(celdaImg);
                fila.appendChild(celdaBorrar);
                fila.appendChild(celdaActualizar);
                cuerpo.appendChild(fila);
            });
        };
    };
}