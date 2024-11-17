"use strict"

function borrarDatos(name) {
    console.log("Borrando dato...");
    
    let datosAcceso = JSON.parse(localStorage.getItem("accesoLocal")) || [];

    // Filtramos el array para eliminar los elementos cuyo 'nombre' coincida con el proporcionado
    datosAcceso = datosAcceso.filter(item => item.nombre !== name);
    
    localStorage.setItem("accesoLocal", JSON.stringify(datosAcceso));

    mostrarDatos();
}