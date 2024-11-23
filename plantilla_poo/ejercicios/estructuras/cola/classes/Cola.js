export class Cola {

    constructor() {
        this.cola = [];
    }

    vacio() {
        return (this.cola.length == 0);
    }

    size() {
        return this.cola.length;
    }

    mostrar() {
        console.log("Mostrando los vehículos...");
        return this.cola;
    }

    encolar(item) {
        console.log("Añadiendo un vehículo a la cola...");
        this.cola.push(item);
        this.size = this.cola.length;
    }

    desencolar() {
        console.log("Atendiendo un vehículo...");
        if (this.size > 0) {
            this.size--;
            this.cola.shift();
        } else {
            console.log("El taller está vacío");
        }
    }

}