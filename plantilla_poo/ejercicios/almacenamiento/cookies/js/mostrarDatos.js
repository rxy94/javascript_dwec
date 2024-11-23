"use strict"

function mostrarDatos() {

    console.log("Mostrando datos...");
    const cuerpo = document.getElementById("cuerpo");
    //let datosAcceso;

    if(document.cookie && document.cookie.length > 0) {
        datosAcceso = document.cookie.split(";");
        cuerpo.innerHTML = "<br><p>Los datos almacenados son: </p><br>";

        datosAcceso.forEach(function (dato) {
            let fila = document.createElement("tr"),
                celdaNombre = document.createElement("td"),
                celdaValor = document.createElement("td"),
                celdaBorrar = document.createElement("td"),
                celdaActualizar = document.createElement("td"),

                botonBorrar = document.createElement("button"),
                botonActualizar = document.createElement("button");
        
            dato = dato.split("="); 

            celdaNombre.innerHTML = decodeURIComponent(dato[0]);
            celdaValor.innerHTML = decodeURIComponent(dato[1]);
        
            botonBorrar.textContent = "Borrar";
        
            botonBorrar.addEventListener("click", function () {
                borrarDatos(dato[0]);
            });

            botonActualizar.textContent = "Actualizar";

            botonActualizar.addEventListener("click", function () { 
                document.getElementById("nombre").value = decodeURIComponent(dato[0]);
                document.getElementById("valor").value = decodeURIComponent(dato[1]);
                borrarDatos(dato[0]);
            });
        
            celdaBorrar.appendChild(botonBorrar);
            celdaActualizar.appendChild(botonActualizar);
            fila.appendChild(celdaNombre);
            fila.appendChild(celdaValor);
            fila.appendChild(celdaBorrar);
            fila.appendChild(celdaActualizar);

            cuerpo.appendChild(fila);

        });

    } else {
        cuerpo.innerHTML = "<br><p>No existen datos almacenados</p>";
    }

    console.log(datosAcceso);

}