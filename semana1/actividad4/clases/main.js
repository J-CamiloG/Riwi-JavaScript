let variables1= 156;
let variables2= "156";
let variables3= "hola";
let variables4= true;

console.log("variable 1:", typeof(variables1));
console.log("variable 2:", typeof(variables2));
console.log("variable 3:", typeof(variables3));
console.log("variable 4:", typeof(variables4));


let number1 = 20;
let number2= 44;

let suma = number1 + number2;
let resta = number1 - number2;
let multiplicacion = number1 * number2;
let division = number1 / number2;
let modulo = number1 % number2;

console.log("suma:", suma);
console.log("resta:", resta);
console.log("multiplicacion:", multiplicacion);
console.log("division:", division);
console.log("modulo:", modulo);

//operadores de incremento y decremento 

let numero = 10;
numero++
numero--
numero+=30

//operadores logicos
function factorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * factorial(numero - 1);
    }
}

let numeroFactorial = 7;
let factorialDeCinco = factorial(numeroFactorial);
console.log("El factorial de", numeroFactorial, "es", factorialDeCinco);

