// repaso js 

// arrow funtion 

function funcionPrueba() {
    this.prop = 'propiedad'

    return 'hello'
}

const saludo = new funcionPrueba()

console.log(saludo);

// herencia en programacion 

//prototipos
const cheff = {
    tipo:'cosinca basica',
    cosinar : function (plato) {
        console.log('cocinando');
    }
}

const sacha = {
    nombre:'sacha',
    edad:31,
    profesion:'developer'
}

sacha.__proto__ = cheff;
Object.setPrototypeOf(sacha,cheff)