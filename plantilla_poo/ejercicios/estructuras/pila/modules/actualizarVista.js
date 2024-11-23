"use strict"

export function actualizarVista(cesto) {
    const cuerpo = document.getElementById("cuerpo");

    cuerpo.innerHTML = ""; 
    cesto.mostrar().forEach(prenda => {
        const prendaElemento = document.createElement("p");
        
        prendaElemento.textContent = prenda.emoji + " " + prenda.nombre;
        prendaElemento.classList.add("prenda");
        cuerpo.appendChild(prendaElemento);
    });
}