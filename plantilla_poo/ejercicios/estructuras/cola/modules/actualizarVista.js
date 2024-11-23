"use strict"

export function actualizarVista(taller) {
    const cuerpo = document.getElementById("cuerpo");

    cuerpo.innerHTML = ""; 
    mensaje.innerHTML = "";
    taller.mostrar().forEach(vehiculo => {
        const vehiculoElemento = document.createElement("p");
        
        vehiculoElemento.textContent = vehiculo.emoji + " " + vehiculo.nombre;
        vehiculoElemento.classList.add("vehiculo");
        cuerpo.appendChild(vehiculoElemento);
    });
}