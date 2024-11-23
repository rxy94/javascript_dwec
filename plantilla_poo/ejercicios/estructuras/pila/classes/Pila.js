export class Pila {

    constructor() {
        this.pila = [];
        this.size = 0;
    }

    vacio() {
        return (this.pila.length == 0);
    }

    size() {
        return this.pila.length;
    }

    mostrar() {
        console.log("Mostrando las prendas...");
        return this.pila;
    }

    apilar(item) {
        console.log("Añadiendo una prenda a la colada...");
        this.pila.push(item);
        this.size = this.pila.length;
    }

    desapilar() {
        console.log("Lavando una prenda...");
        if (this.size > 0) {
            this.size--;
            this.pila.pop();
        } else {
            console.log("La cesta está vacía");
        }
    }

}