"use strict"

function borrarDatos(name) {
    console.log("Borrando dato...");
    
    let datosAcceso = JSON.parse(sessionStorage.getItem("accesoSession")) || [];

    // Filtramos el array para eliminar los elementos cuyo 'nombre' coincida con el proporcionado
    datosAcceso = datosAcceso.filter(item => item.nombre !== name);
    
    sessionStorage.setItem("accesoSession", JSON.stringify(datosAcceso));

    mostrarDatos();
}