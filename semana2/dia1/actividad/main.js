// 1. if-else con uso de operadores de comparación, Operadores de asignación con
// Resta y asignación, y algún método de string:
// Enunciado del Problema: Crea un programa que tome dos números del usuario y
// utilice una estructura de control if-else para determinar si el primer número es
// mayor que el segundo. Si es así, resta el segundo número al primero y muestra el
// resultado en consola. Además, utiliza algún método de string para indicar si el
// resultado es un número positivo o negativo.

let numero = parseInt(prompt("Ingrese un numero"));
let numero2 = parseInt(prompt("Ingrese otro numero"));

let respuesta =
    numero >= numero2
        ? console.log(`${numero} es mayor a ${numero2}`)
        : numero === numero2
        ? console.log(`${numero} y ${numero2} son iguales`)
        : console.log(`${numero2} es mayor a ${numero}`);

// 2. switch case con uso de operadores de comparación, Método Math y
// Number.parseFloat(text):
// Enunciado del Problema: Desarrolla un programa que solicite al usuario
// seleccionar una operación matemática (suma, resta, multiplicación o división)
// mediante un menú. Utiliza un switch case para realizar la operación seleccionada
// en dos números ingresados por el usuario. Además, utiliza el método Math para
// redondear el resultado y conviértelo a un número decimal utilizando
// Number.parseFloat(text) antes de mostrarlo en consola.

let operacion = prompt(`que operacion desea realizar ? 
[1] suma
[2] resta
[3] multiplicacion
[4] division
`)

let number= parseInt(prompt("Ingresa el primer numero"))
let number2= parseInt(prompt("Ingresa el segundo numero"))
let resultado = 0;

switch (operacion) {
    case "1":
        resultado = number + number2;
        resultado = Math.round(resultado);
        resultado = Number.parseFloat(resultado);
        console.log(`el resultado de la suma es ${resultado}`);
        break;

    case "2":
        resultado = number - number2;
        resultado = Math.round(resultado);
        resultado = Number.parseFloat(resultado);
        console.log(`el resultado de la resta es ${resultado}`);
        break;

    case "3":
        resultado = number * number2;
        resultado = Math.round(resultado);
        resultado = Number.parseFloat(resultado);
        console.log(`el resultado de la multiplicaion es ${resultado}`);
        break;

    case "4":
        resultado = number / number2;
        resultado = Math.round(resultado);
        resultado = Number.parseFloat(resultado);
        console.log(`el resultado de la division  es ${resultado}`);
        break;
    
    default:
        break;
}

// 3. for con uso de operadores de comparación, Método Math y toString:
// Enunciado del Problema: Implementa un programa que solicite al usuario un
// número y utilice un bucle for para imprimir la tabla de multiplicar de ese número
// del 1 al 10. Además, utiliza el método Math para calcular cada producto y
// convierte el resultado a una cadena de texto utilizando toString antes de
// mostrarlo en consola.

function tablaMultiplicar(num) {
    for (let i = 0; i <= 10; i++) {
        let resultadoTabla = num * i;
        let resultadoString = resultadoTabla.toString(); 
        console.log(`${num} X ${i} = ${resultadoString}  y es tipo de dato :`, typeof(resultadoString));
    }
}
let pregutaNumeroTabla = parseInt(prompt("ingresa el numero del cual quieres la tabla"));
tablaMultiplicar(pregutaNumeroTabla);

// 4. if-else con uso de operadores lógicos y Método Math:
// Enunciado del Problema: Crea un programa que pida al usuario su edad y la
// cantidad de horas de sueño diarias. Utiliza una estructura de control if-else con
// operadores lógicos para determinar si la persona es mayor de edad (más de 18
// años) y si duerme lo suficiente (más de 7 horas). Utiliza el Método Math para
// redondear la cantidad de horas de sueño y muestra un mensaje en consola
// indicando si la persona tiene un buen equilibrio entre edad y descanso.

let cantidadHorasDormidas = Number(prompt("Ingresa la catidad de horas dormidas ? "))
let edadPersona = prompt("Ingresa tu edad ? ")

let horasConvertidas = Math.round(cantidadHorasDormidas)

if (edadPersona >= "18" && horasConvertidas >= 7 ) {
    console.log('Tienes un buen equilibrio de edad y sueno');
} else{
    console.log('no tiene bune eqilibrio');
}

// 5. switch case con uso de operadores lógicos, substring y slice:
// Enunciado del Problema: Desarrolla un programa que solicite al usuario un día de
// la semana (por ejemplo, "lunes"). Utiliza un switch case con operadores lógicos
// para determinar si el día ingresado es un día laboral (de lunes a viernes) o un fin
// de semana (sábado o domingo). Luego, utiliza los métodos substring y slice de
// string para mostrar un mensaje en consola indicando si es un día hábil o de
// descanso.

let diaDeLaSemana = prompt("Ingresa el día de la semana");

switch (diaDeLaSemana.toLowerCase()) {
    case 'lunes':
    case 'martes':
    case 'miércoles':
    case 'miercoles':
    case 'jueves':   
    case 'viernes':
        console.log("Es un día laboral");
        break;

    case 'sábado':
    case 'sabado': 
    case 'domingo':
        console.log("Es un día de descanso");
        break;

    default:
        console.log("No es un día válido");
        break;
}

// 6. for con uso de operadores lógicos y Método Math:
// Elaborado: RIWI 16 de noviembre de 2023
// Enunciado del Problema: Implementa un programa que solicite al usuario ingresar
// un número. Utiliza un bucle for para encontrar la suma de todos los números
// impares hasta el número ingresado. Además, utiliza operadores lógicos para
// identificar números impares y el Método Math para realizar cálculos. Muestra el
// resultado en consola.

let numeroParaSumar = parseInt(prompt("ingresa el numero"));
let sumaIMpar = 0;

for (let i = 0; i <= numeroParaSumar; i++) {
    if ((i%2) != 0 ) {
        sumaIMpar += i;
    }
}
console.log("La suma de los numeros impares es: " + sumaIMpar);

// 7. if-else con uso de operadores de asignación, Método Math y
// Number.parseInt:
// Enunciado del Problema: Crea un programa que solicite al usuario ingresar un
// número decimal. Utiliza una estructura if-else con operadores de asignación para
// redondear el número hacia abajo utilizando el método Math.floor() y luego
// convierte el resultado a un número entero utilizando Number.parseInt. Muestra
// el número original y el número redondeado en consola.


let numeroDecimal = parseFloat(prompt("Ingrese un número decimal:"));
let numeroRedondeado = Math.floor(numeroDecimal);
let numeroEntero = Number.parseInt(numeroRedondeado);

console.log("Número original:", numeroDecimal);
console.log("Número redondeado:", numeroEntero);



// 8. switch case con uso de operadores de asignación, replacing y
// Number.parseInt:
// Enunciado del Problema: Desarrolla un programa que pida al usuario una frase y
// utilice un switch case para realizar diferentes operaciones en la frase.
// Dependiendo de la opción seleccionada (por ejemplo, 1 para convertir a
// mayúsculas, 2 para reemplazar espacios con guiones, etc.), realiza la operación
// correspondiente y muestra el resultado en consola. Utiliza Number.parseInt para
// manejar las opciones ingresadas por el usuario.
// let cadenaDeTexto = prompt('Ingresa una cadena de texto');

let preguntaTexto = parseInt(prompt(`Ingresa el número de la operación que deseas hacer:
[1] Convertir a mayúsculas
[2] Convertir a minúsculas
[3] Reemplazar espacios con guiones
`));

let nuevoTexto;

switch (preguntaTexto) {
    case 1:
        nuevoTexto = cadenaDeTexto.toUpperCase();
        console.log(nuevoTexto);
        break;
    case 2:
        nuevoTexto = cadenaDeTexto.toLowerCase();
        console.log(nuevoTexto);
        break;
    case 3:
        nuevoTexto = cadenaDeTexto.split(" ").join("-");
        console.log(nuevoTexto);
        break;
    default:
        console.log("Operación no válida");
        break;
}

// 9. for loop con uso de operadores de asignación ToUpperCase - ToLowerCase:
// Enunciado del Problema: Implementa un programa que solicite al usuario ingresar
// una palabra. Utiliza un bucle for para alternar entre caracteres en mayúsculas y
// minúsculas en la palabra. Utiliza operadores de asignación como toUpperCase() y
// toLowerCase() para cambiar el caso de cada caracter en cada iteración del bucle.
// Muestra el resultado en consola.

let palabraLoop = prompt('Ingresa una palabra');
let nuevaPalabra = '';

for (let index = 0; index < palabraLoop.length; index++) {
    if (index % 2 === 0) {
        nuevaPalabra += palabraLoop[index].toUpperCase();
    } else {
        nuevaPalabra += palabraLoop[index].toLowerCase();
    }
}

console.log("Palabra alternada:", nuevaPalabra);
