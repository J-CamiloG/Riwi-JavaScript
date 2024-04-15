// 1. Calculadora básica:
// Crea una calculadora que permita al usuario ingresar dos números y realizar las operaciones
// básicas (suma, resta, multiplicación y división). Imprime el resultado de cada operación en la
// consola utilizando los métodos de impresión adecuados (info, error, warn, debug, table, log) según
// corresponda.


let numero = parseInt(prompt('inter the first number '));
let numero2 = parseInt(prompt('inter the second number '));

let operacion = prompt(`inter the mathematical operation
    [1] suma
    [2] resta
    [3] multiplicacion
    [4] division
    [5] Ninguna
`).toLowerCase();

if (operacion == 'suma' || operacion == "1") {
    let resultado = numero + numero2;
    console.info(`El resultado de la suma es ${resultado}`);
} else if (operacion == 'resta' || operacion == "2") {
    let resultado = numero - numero2;
    console.info(`El resultado de la resta es ${resultado}`);
} else if (operacion == 'multiplicacion' || operacion == "3") {
    let resultado = numero * numero2;
    console.info(`El resultado de la multiplicacion es ${resultado}`);
} else if (operacion == 'division' || operacion == "4") {
    let resultado = numero / numero2;
    console.info(`El resultado de la division es ${resultado}`);
} else {
    console.error('No se ha podido realizar la operacion');
}

