console.groupCollapsed("Ejercicio 1");
// Ejercicio 1
// Sumar dos números
let numeberOne = 5;
let numberTwo = 10;
let resultado = numberTwo + numeberOne;
console.log(resultado);
console.groupEnd();

console.groupCollapsed("Ejercicio 2");
// Ejercicio 2
// Restar dos números.
let numeberthree = 5;
let numberfour = 10;
let resultadoResta = numberfour + numeberthree;
console.log(resultadoResta);
console.groupEnd();

console.groupCollapsed("Ejercicio 3");
// Ejercicio 3
// Multiplicar dos números.
let resultadoMiltiplicacion = numeberOne * numberfour;
console.log(resultadoMiltiplicacion);
console.groupEnd();

console.groupCollapsed("Ejercicio 4");
// Ejercicio 4
// Dividir dos números.
let resultadoDivision = numeberOne / numberfour;
console.log(resultadoDivision);
console.groupEnd();

console.groupCollapsed("Ejercicio 5");
// Ejercicio 5
// Calcular el módulo (resto) de una división.
console.log(numeberOne%numberTwo);
console.groupEnd();

console.groupCollapsed("Ejercicio 6");
// Ejercicio 6
// Generar un número aleatorio entre 1 y 10.

let numeroRandon = Math.round(Math.random( ) * 10);
console.log(numeroRandon);
console.groupEnd();

console.groupCollapsed("Ejercicio 7");
// Ejercicio 7
// Elevar un número a la potencia de otro.
let numeroPotencia = Math.pow(numeberOne, numberfour);
console.log(numeroPotencia);
console.groupEnd();

console.groupCollapsed("Ejercicio 8");
// Ejercicio 8
// Calcular la raíz cuadrada de un número.
let raizCuadrada = Math.sqrt(numeberOne);
console.groupEnd();

console.groupCollapsed("Ejercicio 9");
// Ejercicio 9
// Convertir grados Celsius a Fahrenheit
let gradosCelsius = 20;
let gradosFahrenheit = (gradosCelsius * 9/5) + 32;
console.log(gradosFahrenheit);
console.groupEnd();

console.groupCollapsed("Ejercicio 10");
// Ejercicio 10
// Calcular el área de un círculo.
let radio = 5;
let areaCirculo = Math.PI * Math.pow(radio, 2);

console.log(areaCirculo);
console.groupEnd();

console.groupCollapsed("Ejercicio 11");
// Ejercicio 11
// .Calcular el perímetro de un cuadrado
let ladoDelCuadrado = 5 
let perimetroCuadrado = ladoDelCuadrado * 4;
console.log(perimetroCuadrado);
console.groupEnd();

console.groupCollapsed("Ejercicio 12");
// Ejercicio 12
// .Calcular el volumen de una esfera.
let radioEsfera = 5;
let volumenEsfera = (4/3) * Math.PI * Math.pow(radioEsfera, 3);
console.log(volumenEsfera);
console.groupEnd();

console.groupCollapsed("Ejercicio 13");
// Ejercicio 13
// .Calcular el área de un triángulo.
let base = 5;
let altura = 10;

let areaTriangulo = (base * altura) / 2;
console.log(areaTriangulo);
console.groupEnd();

console.groupCollapsed("Ejercicio 14");
// Ejercicio 14 
// Generar la tabla de multiplicar del número 5.
let numero = 5 ;
let tablaInicial = 0;
while (tablaInicial < 3) {
    let resultado = numero * tablaInicial;
    console.log(`${numero} x ${tablaInicial} = ${resultado}`);
    tablaInicial++;
}
console.groupEnd();

console.groupCollapsed("Ejercicio 15");
// Ejercicio 15
// .Encontrar el número mayor entre 3, 7 y 2
let arrayNumbers = [3, 7, 2,5,54,7,3,4,6,75,765,4,23,56,73,42,6];
console.log(Math.max(...arrayNumbers));
console.groupEnd();

console.groupCollapsed("Ejercicio 16");
// Ejercicio 16
console.log(Math.min(...arrayNumbers));
console.groupEnd();

console.groupCollapsed("Ejercicio 17");
// Ejercicio 17
// calcular promedio 
let sumaPromedio = arrayNumbers.reduce((total, numero)=> total + numero, 0);
let promedioTotal = Math.round(sumaPromedio / arrayNumbers.length)
console.log(promedioTotal);
console.groupEnd();

console.groupCollapsed("Ejercicio 18");
// Ejercicio 18
function factorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * factorial(numero - 1);
    }
}

let numeroFactorial = 5;
let factorialDeCinco = factorial(numeroFactorial);
console.log("El factorial de", numeroFactorial, "es", factorialDeCinco);

console.groupEnd();

console.groupCollapsed("Ejercicio 19");
// Ejercicio 19
let numeroParaRedondear = 3.6;
let numeroRedondeado = Math.round(numero);
console.log("El número redondeado es:", redondeado);

console.groupEnd();

console.groupCollapsed("Ejercicio 20");
// Ejercicio 20
let numeroElDoble = 9;
let doble = numero * 2;
console.log("El doble de 9 es:", doble);

console.groupEnd();

console.groupCollapsed("Ejercicio 21");
// Ejercicio 21
console.groupEnd();

console.groupCollapsed("Ejercicio 22");
// Ejercicio 22
console.groupEnd();

console.groupCollapsed("Ejercicio 23");
// Ejercicio 23
console.groupEnd();

console.groupCollapsed("Ejercicio 24");
// Ejercicio 24
console.groupEnd();

console.groupCollapsed("Ejercicio 25");
// Ejercicio 25
console.groupEnd();

console.groupCollapsed("Ejercicio 26");
// Ejercicio 26
console.groupEnd();

console.groupCollapsed("Ejercicio 27");
// Ejercicio 27
console.groupEnd();

console.groupCollapsed("Ejercicio 28");
// Ejercicio 28
console.groupEnd();

console.groupCollapsed("Ejercicio 29");
// Ejercicio 29
console.groupEnd();

console.groupCollapsed("Ejercicio 30");
// Ejercicio 30
console.groupEnd();

console.groupCollapsed("Ejercicio 31");
// Ejercicio 31
console.groupEnd();

console.groupCollapsed("Ejercicio 32");
// Ejercicio 32
console.groupEnd();

console.groupCollapsed("Ejercicio 33");
// Ejercicio 33
console.groupEnd();

console.groupCollapsed("Ejercicio 34");
// Ejercicio 34
console.groupEnd();

console.groupCollapsed("Ejercicio 35");
// Ejercicio 35
console.groupEnd();

console.groupCollapsed("Ejercicio 36");
// Ejercicio 36
console.groupEnd();

console.groupCollapsed("Ejercicio 37");
// Ejercicio 37
console.groupEnd();

console.groupCollapsed("Ejercicio 38");
// Ejercicio 38
console.groupEnd();

console.groupCollapsed("Ejercicio 39");
// Ejercicio 39
console.groupEnd();

console.groupCollapsed("Ejercicio 40");
// Ejercicio 40
console.groupEnd();

console.groupCollapsed("Ejercicio 41");
// Ejercicio 41
console.groupEnd();

console.groupCollapsed("Ejercicio 42");
// Ejercicio 42
console.groupEnd();

console.groupCollapsed("Ejercicio 43");
// Ejercicio 43
console.groupEnd();

console.groupCollapsed("Ejercicio 44");
// Ejercicio 44
console.groupEnd();

console.groupCollapsed("Ejercicio 45");
// Ejercicio 45
console.groupEnd();

console.groupCollapsed("Ejercicio 46");
// Ejercicio 46
console.groupEnd();

console.groupCollapsed("Ejercicio 47");
// Ejercicio 47
console.groupEnd();

console.groupCollapsed("Ejercicio 48");
// Ejercicio 48
console.groupEnd();

console.groupCollapsed("Ejercicio 49");
// Ejercicio 49
console.groupEnd();

console.groupCollapsed("Ejercicio 50");
// Ejercicio 50
console.groupEnd();

console.groupCollapsed("Ejercicio 51");
// Ejercicio 51
console.groupEnd();

console.groupCollapsed("Ejercicio 52");
// Ejercicio 52
console.groupEnd();

console.groupCollapsed("Ejercicio 53");
// Ejercicio 53
console.groupEnd();

console.groupCollapsed("Ejercicio 54");
// Ejercicio 54
console.groupEnd();

console.groupCollapsed("Ejercicio 55");
// Ejercicio 55
console.groupEnd();

console.groupCollapsed("Ejercicio 56");
// Ejercicio 56
console.groupEnd();

console.groupCollapsed("Ejercicio 57");
// Ejercicio 57
console.groupEnd();

console.groupCollapsed("Ejercicio 58");
// Ejercicio 58
console.groupEnd();

console.groupCollapsed("Ejercicio 59");
// Ejercicio 59
console.groupEnd();

console.groupCollapsed("Ejercicio 60");
// Ejercicio 60
console.groupEnd();

console.groupCollapsed("Ejercicio 61");
// Ejercicio 61
console.groupEnd();

console.groupCollapsed("Ejercicio 62");
// Ejercicio 62
console.groupEnd();

console.groupCollapsed("Ejercicio 63");
// Ejercicio 63
console.groupEnd();

console.groupCollapsed("Ejercicio 64");
// Ejercicio 64
console.groupEnd();

console.groupCollapsed("Ejercicio 65");
// Ejercicio 65
console.groupEnd();

console.groupCollapsed("Ejercicio 66");
// Ejercicio 66
console.groupEnd();

console.groupCollapsed("Ejercicio 67");
// Ejercicio 67
console.groupEnd();

console.groupCollapsed("Ejercicio 68");
// Ejercicio 68
console.groupEnd();

console.groupCollapsed("Ejercicio 69");
// Ejercicio 69
console.groupEnd();

console.groupCollapsed("Ejercicio 70");
// Ejercicio 70
console.groupEnd();

console.groupCollapsed("Ejercicio 71");
// Ejercicio 71
console.groupEnd();

console.groupCollapsed("Ejercicio 72");
// Ejercicio 72
console.groupEnd();

console.groupCollapsed("Ejercicio 73");
// Ejercicio 73
console.groupEnd();

console.groupCollapsed("Ejercicio 74");
// Ejercicio 74
console.groupEnd();

console.groupCollapsed("Ejercicio 75");
// Ejercicio 75
console.groupEnd();

console.groupCollapsed("Ejercicio 76");
// Ejercicio 76
console.groupEnd();

console.groupCollapsed("Ejercicio 77");
// Ejercicio 77
console.groupEnd();

console.groupCollapsed("Ejercicio 78");
// Ejercicio 78
console.groupEnd();

console.groupCollapsed("Ejercicio 79");
// Ejercicio 79
console.groupEnd();

console.groupCollapsed("Ejercicio 80");
// Ejercicio 80
console.groupEnd();

console.groupCollapsed("Ejercicio 81");
// Ejercicio 81
console.groupEnd();

console.groupCollapsed("Ejercicio 82");
// Ejercicio 82
console.groupEnd();

console.groupCollapsed("Ejercicio 83");
// Ejercicio 83
console.groupEnd();

console.groupCollapsed("Ejercicio 84");
// Ejercicio 84
console.groupEnd();

console.groupCollapsed("Ejercicio 85");
// Ejercicio 85
console.groupEnd();

console.groupCollapsed("Ejercicio 86");
// Ejercicio 86
console.groupEnd();

console.groupCollapsed("Ejercicio 87");
// Ejercicio 87
console.groupEnd();

console.groupCollapsed("Ejercicio 88");
// Ejercicio 88
console.groupEnd();

console.groupCollapsed("Ejercicio 89");
// Ejercicio 89
console.groupEnd();

console.groupCollapsed("Ejercicio 90");
// Ejercicio 90
console.groupEnd();

console.groupCollapsed("Ejercicio 91");
// Ejercicio 91
console.groupEnd();

console.groupCollapsed("Ejercicio 92");
// Ejercicio 92
console.groupEnd();

console.groupCollapsed("Ejercicio 93");
// Ejercicio 93
console.groupEnd();

console.groupCollapsed("Ejercicio 94");
// Ejercicio 94
console.groupEnd();

console.groupCollapsed("Ejercicio 95");
// Ejercicio 95
console.groupEnd();

console.groupCollapsed("Ejercicio 96");
// Ejercicio 96
console.groupEnd();