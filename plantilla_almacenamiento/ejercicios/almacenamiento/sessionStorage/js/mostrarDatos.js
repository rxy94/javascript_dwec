"use strict"

function mostrarDatos() {

    console.log("Mostrando datos...");
    const cuerpo = document.getElementById("cuerpo");

    let datosAcceso = JSON.parse(sessionStorage.getItem("accesoSession")) || [];

    if(datosAcceso.length > 0) {
        cuerpo.innerHTML = "<br><p>Los datos almacenados son: </p><br>";

        datosAcceso.forEach(function (dato) {
            let fila = document.createElement("tr"),
                celdaNombre = document.createElement("td"),
                celdaValor = document.createElement("td"),
                celdaBorrar = document.createElement("td"),
                celdaActualizar = document.createElement("td"),

                botonBorrar = document.createElement("button"),
                botonActualizar = document.createElement("button");

            celdaNombre.innerHTML = dato.nombre;
            celdaValor.innerHTML = dato.valor;
        
            botonBorrar.textContent = "Borrar";
            botonBorrar.className ="borrar";
        
            botonBorrar.addEventListener("click", function () {
                borrarDatos(dato.nombre);
            });

            botonActualizar.textContent = "Actualizar";
            botonActualizar.className ="actualizar";

            botonActualizar.addEventListener("click", function () { 
                document.getElementById("nombre").value = dato.nombre;
                document.getElementById("valor").value = dato.valor;
                borrarDatos(dato.nombre);
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