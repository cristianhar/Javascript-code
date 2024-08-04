class FiguraGeometrica {
    #nombre;
    #color;

    constructor(nombre, color) {
        this.#nombre = nombre;
        this.#color = color;
    }

    establecerNombre(nombre) {
        if (typeof nombre === 'string' && nombre.trim() !== '') {
            this.#nombre = nombre;
        } else {
            throw new Error('El nombre debe ser una cadena no vacía.');
        }
    }

    obtenerNombre() {
        return this.#nombre;
    }

    establecerColor(color) {
        if (typeof color === 'string' && color.trim() !== '') {
            this.#color = color;
        } else {
            throw new Error('El color debe ser una cadena no vacía.');
        }
    }

    obtenerColor() {
        return this.#color;
    }
}


class Rectangulo extends FiguraGeometrica {
    #longitud;
    #ancho;

    constructor(nombre, color, longitud, ancho) {
        super(nombre, color);
        this.#longitud = longitud;
        this.#ancho = ancho;
    }

    establecerLongitud(longitud) {
        if (typeof longitud === 'number' && longitud > 0) {
            this.#longitud = longitud;
        } else {
            throw new Error('La longitud debe ser un número positivo.');
        }
    }

    obtenerLongitud() {
        return this.#longitud;
    }

    establecerAncho(ancho) {
        if (typeof ancho === 'number' && ancho > 0) {
            this.#ancho = ancho;
        } else {
            throw new Error('El ancho debe ser un número positivo.');
        }
    }

    obtenerAncho() {
        return this.#ancho;
    }

    calcularArea() {
        return this.#longitud * this.#ancho;
    }

    calcularPerimetro() {
        return 2 * (this.#longitud + this.#ancho);
    }
}

class Circulo extends FiguraGeometrica {
    #radio;

    constructor(nombre, color, radio) {
        super(nombre, color);
        this.#radio = radio;
    }

    establecerRadio(radio) {
        if (typeof radio === 'number' && radio > 0) {
            this.#radio = radio;
        } else {
            throw new Error('El radio debe ser un número positivo.');
        }
    }

    obtenerRadio() {
        return this.#radio;
    }

    calcularArea() {
        return Math.PI * Math.pow(this.#radio, 2);
    }

    calcularPerimetro() {
        return 2 * Math.PI * this.#radio;
    }
}

const rectangulo = new Rectangulo('Rectángulo', 'Rojo', 5, 3);
console.log(rectangulo.obtenerNombre()); 
console.log(rectangulo.obtenerColor()); 
console.log(rectangulo.calcularArea()); 
console.log(rectangulo.calcularPerimetro()); 

const circulo = new Circulo('Círculo', 'Azul', 4);
console.log(circulo.obtenerNombre()); 
console.log(circulo.obtenerColor()); 
console.log(circulo.calcularArea()); 
console.log(circulo.calcularPerimetro()); 

module.exports = { FiguraGeometrica, Rectangulo, Circulo };