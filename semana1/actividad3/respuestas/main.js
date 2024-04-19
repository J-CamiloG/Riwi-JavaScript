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
console.log("El número redondeado es:", numeroRedondeado);

console.groupEnd();

console.groupCollapsed("Ejercicio 20");
// Ejercicio 20
let numeroElDoble = 9;
let doble = numero * 2;
console.log("El doble de 9 es:", doble);

console.groupEnd();

console.groupCollapsed("Ejercicio 21");
// Ejercicio 21
// Calcular el triple de 4.
console.log(4*3);
console.groupEnd();

console.groupCollapsed("Ejercicio 22");
// Ejercicio 22
// Calcular el cuadrado de 6
console.log(Math.sqrt(6));
console.groupEnd();

console.groupCollapsed("Ejercicio 23");
// Ejercicio 23
// Calcular el cubo de 3.
console.log(3**3);
console.groupEnd();

console.groupCollapsed("Ejercicio 24");
// Ejercicio 24
// Calcular la suma de los primeros 10 números naturales
let suma = 0;
for (let i = 1; i <= 10; i++) {
    suma += i;
}
console.log("La suma de los primeros 10 números naturales es:", suma);

console.groupEnd();

console.groupCollapsed("Ejercicio 25");
// Ejercicio 25
// Calcular la resta entre 50 y 25.
console.log(50-25);
console.groupEnd();

console.groupCollapsed("Ejercicio 26");
// Ejercicio 26
// Multiplicar 7 por 9.
console.log(7*9);
console.groupEnd();

console.groupCollapsed("Ejercicio 27");
// Ejercicio 27
// Dividir 144 por 12.
console.log(144/12);
console.groupEnd();

console.groupCollapsed("Ejercicio 28");
// Ejercicio 28
// Obtener el módulo de 17 dividido por 4.
console.log(17%4);
console.groupEnd();

console.groupCollapsed("Ejercicio 29");
// Ejercicio 29
// Generar un número aleatorio entre 20 y 30.
let numeroRnadonCreado = Math.round(Math.random()*100)
console.log(numeroRnadonCreado);
console.groupEnd();

console.groupCollapsed("Ejercicio 30");
// Ejercicio 30
// Elevar 2 a la potencia de 8.
console.log(2**8);
console.groupEnd();

console.groupCollapsed("Ejercicio 31");
// Ejercicio 31
// .Calcular la raíz cuadrada de 144.
console.log(Math.sqrt(144));
console.groupEnd();

console.groupCollapsed("Ejercicio 32");
// Ejercicio 32
// .Convertir 100 grados Celsius a Fahrenheit.
console.log((100 * 9/5) +32);
console.groupEnd();

console.groupCollapsed("Ejercicio 33");
// Ejercicio 33
// .Calcular el área de un rectángulo de base 5 y altura 10.
console.log(5*10);
console.groupEnd();

console.groupCollapsed("Ejercicio 34");
// Ejercicio 34
// Calcular el perímetro de un círculo con radio 6
const radioCirculo = 6;
const pi = Math.PI;
const perimetroCirculo = 2 * pi * radio;
console.log(perimetroCirculo);
console.groupEnd();

console.groupCollapsed("Ejercicio 35");
// Ejercicio 35
// Calcular el volumen de un cubo con lado 4
console.log(4*4*4);
console.groupEnd();

console.groupCollapsed("Ejercicio 36");
// Ejercicio 36
// Calcular el área de un rombo con diagonales de 8 y 10.
console.log((10*8) / 2);
console.groupEnd();

console.groupCollapsed("Ejercicio 37");
// Ejercicio 37
// Calcular el área de un trapecio con bases 6 y 10 y altura 4.
console.log(((6+10)*4) / 2 );
console.groupEnd();

console.groupCollapsed("Ejercicio 38");
// Ejercicio 38
// .Generar la tabla de multiplicar del número 8.
let numberTabla = 8 

for (let i = 0; i <= 5; i++) {
    console.log(` 8 x ${i} =`, 8*i);
}

console.groupEnd();

console.groupCollapsed("Ejercicio 39");
// Ejercicio 39
// Encontrar el número mayor entre 15, 20 y 25.
let nuemrosABuscar = ['15','20','25']
console.log(Math.max(nuemrosABuscar));
console.groupEnd();

console.groupCollapsed("Ejercicio 40");
// Ejercicio 40
// .Encontrar el número menor entre 50, 75 y 100
let nuemrosABuscarMenor = ['15','20','25']
console.log(Math.min(nuemrosABuscarMenor));

console.groupEnd();

console.groupCollapsed("Ejercicio 41");
// Ejercicio 41
//.Calcular el promedio de 7, 9 y 12
console.log((7+9+12)/3);
console.groupEnd();

console.groupCollapsed("Ejercicio 42");
// Ejercicio 42
// Calcular la factorial de 7.
console.log(7*6*5*4*3*2*1);

console.groupEnd();

console.groupCollapsed("Ejercicio 43");
// Ejercicio 43
// Redondear el número 7.9.
console.log(Math.round(7.9));
console.groupEnd();

console.groupCollapsed("Ejercicio 44");
// Ejercicio 44
// Calcular el doble de 15.
console.log(15*2);
console.groupEnd();

console.groupCollapsed("Ejercicio 45");
// Ejercicio 45
// Calcular el triple de 6.
console.log(6*3);
console.groupEnd();

console.groupCollapsed("Ejercicio 46");
// Ejercicio 46
// Calcular el cuadrado de 8.
console.log(4*4);
console.groupEnd();

console.groupCollapsed("Ejercicio 47");
// Ejercicio 47
// .Calcular el cubo de 4.
console.log(4**3);
console.groupEnd();

console.groupCollapsed("Ejercicio 48");
// Ejercicio 48
// Calcular la suma de los primeros 15 números naturales.
let numeroInicial = 1;
let sumaNueva = 0;

for (let i = 1; i <= 15; i++) {
    sumaNueva += i;
}

console.groupEnd();

console.groupCollapsed("Ejercicio 49");
// Ejercicio 49
// Calcular la resta entre 100 y 55.
console.log(100-55);
console.log(sumaNueva);
console.groupEnd();

console.groupCollapsed("Ejercicio 50");
// Ejercicio 50
// Multiplicar 6 por 8.
console.log(6*8);
console.groupEnd();

console.groupCollapsed("Ejercicio 51");
// Ejercicio 51
// Dividir 225 por 15.
console.log(255/15);
console.groupEnd();

console.groupCollapsed("Ejercicio 52");
// Ejercicio 52
//Obtener el módulo de 20 dividido por 7.
console.log(29%7);
console.groupEnd();

console.groupCollapsed("Ejercicio 53");
// Ejercicio 53
// Generar un número aleatorio entre 40 y 50.
let numeroNuevoRamdom = Math.floor(Math.random() * (50 - 40 + 1)) + 40;
console.log(numeroNuevoRamdom);
console.groupEnd();

console.groupCollapsed("Ejercicio 54");
// Ejercicio 54
// .Elevar 3 a la potencia de 4
console.log(3**4);
console.groupEnd();

console.groupCollapsed("Ejercicio 55");
// Ejercicio 55
// Calcular la raíz cuadrada de 169.
console.log(Math.sqrt(169));
console.groupEnd();

console.groupCollapsed("Ejercicio 56");
// Ejercicio 56
// Convertir 80 grados Celsius a Fahrenheit.
console.log((80 * 9/5) + 32);
console.groupEnd();

console.groupCollapsed("Ejercicio 57");
// Ejercicio 57
const baseRectangulo = 8;
const alturaRectangulo = 12;
const areaRectangulo = baseRectangulo * alturaRectangulo;
console.log("El área del rectángulo es:", areaRectangulo);

console.groupEnd();

console.groupCollapsed("Ejercicio 58");
// Ejercicio 58
const radioCirculoNuevo = 8;
const perimetroCirculoNuevo = 2 * Math.PI * radioCirculo;
console.log("El perímetro del círculo es:", perimetroCirculoNuevo);

console.groupEnd();

console.groupCollapsed("Ejercicio 59");
// Ejercicio 59
const ladoCubo = 5;
const volumenCubo = Math.pow(ladoCubo, 3);
console.log("El volumen del cubo es:", volumenCubo);

console.groupEnd();

console.groupCollapsed("Ejercicio 60");
// Ejercicio 60
const diagonalMayorRombo = 16;
const diagonalMenorRombo = 12;
const areaRombo = (diagonalMayorRombo * diagonalMenorRombo) / 2;
console.log("El área del rombo es:", areaRombo);

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