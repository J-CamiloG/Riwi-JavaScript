console.groupCollapsed("Ejercicio 1");
// 1. Verifica si un número es positivo.
let numeroPositivo = 10;
if (numeroPositivo > 0) {
    console.log("El número", numeroPositivo, "es positivo.");
} else {
    console.log("El número", numeroPositivo, "no es positivo.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 2");
// 2. Verifica si un número es negativo.
let numeroNegativo = -5;
if (numeroNegativo < 0) {
    console.log("El número", numeroNegativo, "es negativo.");
} else {
    console.log("El número", numeroNegativo, "no es negativo.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 3");
// 3. Comprueba si un número es par.
let numeroPar = 10;
if (numeroPar % 2 === 0) {
    console.log("El número", numeroPar, "es par.");
} else {
    console.log("El número", numeroPar, "no es par.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 4");
// 4. Comprueba si un número es impar.
let numeroImpar = 7;
if (numeroImpar % 2 !== 0) {
    console.log("El número", numeroImpar, "es impar.");
} else {
    console.log("El número", numeroImpar, "no es impar.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 5");
// 5. Determina si un número es múltiplo de 5.
let numeroMultiplo5 = 25;
if (numeroMultiplo5 % 5 === 0) {
    console.log("El número", numeroMultiplo5, "es múltiplo de 5.");
} else {
    console.log("El número", numeroMultiplo5, "no es múltiplo de 5.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 6");
// 6. Verifica si un número es divisible entre 3.
let numeroDivisible3 = 9;
if (numeroDivisible3 % 3 === 0) {
    console.log("El número", numeroDivisible3, "es divisible entre 3.");
} else {
    console.log("El número", numeroDivisible3, "no es divisible entre 3.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 7");
// 7. Determina si un número es mayor que 100.
let numeroMayor100 = 120;
if (numeroMayor100 > 100) {
    console.log("El número", numeroMayor100, "es mayor que 100.");
} else {
    console.log("El número", numeroMayor100, "no es mayor que 100.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 8");
// 8. Verifica si un número es menor que -50.
let numeroMenorMenos50 = -60;
if (numeroMenorMenos50 < -50) {
    console.log("El número", numeroMenorMenos50, "es menor que -50.");
} else {
    console.log("El número", numeroMenorMenos50, "no es menor que -50.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 9");
// 9. Comprueba si un número está en el rango de 20 a 50.
let numeroRango = 30;
if (numeroRango >= 20 && numeroRango <= 50) {
    console.log("El número", numeroRango, "está en el rango de 20 a 50.");
} else {
    console.log("El número", numeroRango, "no está en el rango de 20 a 50.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 10");
// 10. Determina si un número es igual a 0.
let numeroIgualCero = 0;
if (numeroIgualCero === 0) {
    console.log("El número es igual a 0.");
} else {
    console.log("El número no es igual a 0.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 11");
// 11. Verifica si un número es mayor que -10 y menor que 10.
let numeroMayorMenos10 = 5;
if (numeroMayorMenos10 > -10 && numeroMayorMenos10 < 10) {
    console.log("El número", numeroMayorMenos10, "es mayor que -10 y menor que 10.");
} else {
    console.log("El número", numeroMayorMenos10, "no cumple la condición.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 12");
// 12. Determina si un número es un año bisiesto.
let anio = 2024;
if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
    console.log("El año", anio, "es bisiesto.");
} else {
    console.log("El año", anio, "no es bisiesto.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 13");
// 13. Verifica si una persona es mayor de edad (mayor o igual a 18 años).
let edadPersona = 20;
if (edadPersona >= 18) {
    console.log("La persona es mayor de edad.");
} else {
    console.log("La persona es menor de edad.");
}
console.groupEnd();


console.groupCollapsed("Ejercicio 15");
// 15. Verifica si un número es un cuadrado perfecto.
let num15 = 16;
if (Math.sqrt(num15) % 1 === 0) {
    console.log(num15, "es un cuadrado perfecto.");
} else {
    console.log(num15, "no es un cuadrado perfecto.");
}
console.groupEnd();


console.groupCollapsed("Ejercicio 17");
// 17. Verifica si un número es una potencia de 2.
let numPotencia = 64;
if ((numPotencia & (numPotencia - 1)) === 0 && numPotencia !== 0) {
    console.log(numPotencia, "es una potencia de 2.");
} else {
    console.log(numPotencia, "no es una potencia de 2.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 18");
// 18. Determina si un número es un palíndromo.
let numPalindromo = 12321;
let strNumPalindromo = numPalindromo.toString();
if (strNumPalindromo === strNumPalindromo.split("").reverse().join("")) {
    console.log(numPalindromo, "es un palíndromo.");
} else {
    console.log(numPalindromo, "no es un palíndromo.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 19");
// 19. Verifica si una cadena de texto contiene la palabra "JavaScript".
let textoJavaScript = "Aprender JavaScript es divertido.";
if (textoJavaScript.includes("JavaScript")) {
    console.log("La cadena de texto contiene la palabra 'JavaScript'.");
} else {
    console.log("La cadena de texto no contiene la palabra 'JavaScript'.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 20");
// 20. Determina si una cadena tiene más de 10 caracteres.
let textoLargo = "¡Hola Mundo!";
if (textoLargo.length > 10) {
    console.log("La cadena de texto tiene más de 10 caracteres.");
} else {
    console.log("La cadena de texto no tiene más de 10 caracteres.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 21");
// 21. Verifica si una cadena de texto está en minúsculas.
let textoMinusculas = "esto es una prueba";
if (textoMinusculas === textoMinusculas.toLowerCase()) {
    console.log("La cadena de texto está en minúsculas.");
} else {
    console.log("La cadena de texto no está en minúsculas.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 22");
// 22. Determina si una cadena de texto contiene al menos un número.
let textoConNumero = "La contraseña es 12345";
if (/\d/.test(textoConNumero)) {
    console.log("La cadena de texto contiene al menos un número.");
} else {
    console.log("La cadena de texto no contiene ningún número.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 23");
// 23. Verifica si una cadena de texto termina con un punto (.).
let textoConPunto = "Esta es una oración.";
if (textoConPunto.endsWith(".")) {
    console.log("La cadena de texto termina con un punto.");
} else {
    console.log("La cadena de texto no termina con un punto.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 24");
// 24. Determina si una cadena de texto es un pangrama (contiene todas las letras del alfabeto).
function esPangrama(texto) {
    const alfabeto = "abcdefghijklmnopqrstuvwxyz";
    for (let letra of alfabeto) {
        if (texto.toLowerCase().indexOf(letra) === -1) {
            return false;
        }
    }
    return true;
}

let textoPangrama = "El veloz murciélago hindú comía feliz cardillo y kiwi.";
if (esPangrama(textoPangrama)) {
    console.log("La cadena de texto es un pangrama.");
} else {
    console.log("La cadena de texto no es un pangrama.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 25");
// 25. Verifica si un día de la semana es laborable (de lunes a viernes).
let diaLaborable = "sábado";
if (diaLaborable === "lunes" || diaLaborable === "martes" || diaLaborable === "miércoles" || diaLaborable === "jueves" || diaLaborable === "viernes") {
    console.log("El", diaLaborable, "es un día laborable.");
} else {
    console.log("El", diaLaborable, "no es un día laborable.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 26");
// 26. Determina si un día es fin de semana (sábado o domingo).
let diaFinDeSemana = "domingo";
if (diaFinDeSemana === "sábado" || diaFinDeSemana === "domingo") {
    console.log("El", diaFinDeSemana, "es un día de fin de semana.");
} else {
    console.log("El", diaFinDeSemana, "no es un día de fin de semana.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 27");
// 27. Verifica si un número representa un mes válido (del 1 al 12).
let mesValido = 7;
if (mesValido >= 1 && mesValido <= 12) {
    console.log(mesValido, "es un mes válido.");
} else {
    console.log(mesValido, "no es un mes válido.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 28");
// 28. Determina si una hora está en el rango de 9 AM a 6 PM.
let horaEnRango = 14;
if (horaEnRango >= 9 && horaEnRango <= 18) {
    console.log("La hora", horaEnRango, "está en el rango de 9 AM a 6 PM.");
} else {
    console.log("La hora", horaEnRango, "no está en el rango de 9 AM a 6 PM.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 29");
// 29. Verifica si una persona es mayor de 65 años o menor de 18 años.
let edadPersona2 = 25;
if (edadPersona2 < 18 || edadPersona2 > 65) {
    console.log("La persona tiene menos de 18 años o más de 65 años.");
} else {
    console.log("La persona tiene entre 18 y 65 años.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 30");
// 30. Determina si un triángulo es equilátero (tres lados iguales).
let ladoA = 5;
let ladoB = 5;
let ladoC = 5;
if (ladoA === ladoB && ladoB === ladoC) {
    console.log("El triángulo es equilátero.");
} else {
    console.log("El triángulo no es equilátero.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 31");
// 31. Verifica si un triángulo es isósceles (dos lados iguales).
let ladoX = 3;
let ladoY = 3;
let ladoZ = 4;
if (ladoX === ladoY || ladoX === ladoZ || ladoY === ladoZ) {
    console.log("El triángulo es isósceles.");
} else {
    console.log("El triángulo no es isósceles.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 32");
// 32. Determina si un triángulo es escaleno (todos los lados diferentes).
let ladoP = 3;
let ladoQ = 4;
let ladoR = 5;
if (ladoP !== ladoQ && ladoQ !== ladoR && ladoP !== ladoR) {
    console.log("El triángulo es escaleno.");
} else {
    console.log("El triángulo no es escaleno.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 33");
// 33. Verifica si un número es mayor que el doble de otro número.
let numMayor = 7;
let numMenor = 5;
if (numMayor > numMenor * 2) {
    console.log(numMayor, "es mayor que el doble de", numMenor);
} else {
    console.log(numMayor, "no es mayor que el doble de", numMenor);
}
console.groupEnd();

console.groupCollapsed("Ejercicio 34");
// 34. Determina si la suma de dos números es mayor que 100.
let numSuma1 = 60;
let numSuma2 = 50;
if (numSuma1 + numSuma2 > 100) {
    console.log("La suma de", numSuma1, "y", numSuma2, "es mayor que 100.");
} else {
    console.log("La suma de", numSuma1, "y", numSuma2, "no es mayor que 100.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 35");
// 35. Verifica si la resta de dos números es menor que 50.
let numResta1 = 100;
let numResta2 = 30;
if (numResta1 - numResta2 < 50) {
    console.log("La resta de", numResta1, "y", numResta2, "es menor que 50.");
} else {
    console.log("La resta de", numResta1, "y", numResta2, "no es menor que 50.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 36");
// 36. Determina si un número es el doble del otro número.
let numDoble1 = 8;
let numDoble2 = 4;
if (numDoble1 === numDoble2 * 2 || numDoble2 === numDoble1 * 2) {
    console.log("Uno de los números es el doble del otro.");
} else {
    console.log("Los números no son el doble uno del otro.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 37");
// 37. Verifica si el doble de un número es igual al triple de otro número.
let numComparacion1 = 6;
let numComparacion2 = 4;
if (numComparacion1 * 2 === numComparacion2 * 3 || numComparacion2 * 2 === numComparacion1 * 3) {
    console.log("El doble de uno de los números es igual al triple del otro.");
} else {
    console.log("El doble de uno de los números no es igual al triple del otro.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 38");
// 38. Determina si la suma de dos números es igual a 50.
let numSumaIgual1 = 20;
let numSumaIgual2 = 30;
if (numSumaIgual1 + numSumaIgual2 === 50) {
    console.log("La suma de", numSumaIgual1, "y", numSumaIgual2, "es igual a 50.");
} else {
    console.log("La suma de", numSumaIgual1, "y", numSumaIgual2, "no es igual a 50.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 39");
// 39. Verifica si el producto de dos números es mayor que 500.
let numProducto1 = 25;
let numProducto2 = 30;
if (numProducto1 * numProducto2 > 500) {
    console.log("El producto de", numProducto1, "y", numProducto2, "es mayor que 500.");
} else {
    console.log("El producto de", numProducto1, "y", numProducto2, "no es mayor que 500.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 40");
// 40. Determina si la división de dos números es menor que 10.
let numDivision1 = 90;
let numDivision2 = 3;
if (numDivision1 / numDivision2 < 10) {
    console.log("La división de", numDivision1, "y", numDivision2, "es menor que 10.");
} else {
    console.log("La división de", numDivision1, "y", numDivision2, "no es menor que 10.");
}
console.groupEnd();
