"use strict"

export class Lista {

    constructor() {
        this.lista = new Array();
    }

    vacio() {
        return (this.lista.length == 0);
    }

    size() {
        return this.lista.length;
    }

    enlistar(elemento, indice) {
        this.lista.splice(indice, 0, elemento);
    }

    desenlistar(indice) {
        this.lista.splice(indice, 1);
    }

    mostrar() {
        return this.lista;
    }

    posicionMayor() {
        let mayor = {
            posicion: 0,
            contenido: null
        };
    
        if (!this.vacio()) {
            mayor.contenido = this.lista[mayor.posicion];

            for (let i = 1; i < this.lista.length; i++) {
                if (this.lista[i].prior > mayor.contenido.prior) {
                    mayor.posicion = i;
                    mayor.contenido = this.lista[i];
                }
            }
        }
        this.lista.splice(mayor.posicion, 1);
    }
    
}