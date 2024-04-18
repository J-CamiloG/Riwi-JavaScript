console.groupCollapsed("Ejercicio 1");
// Ejercicio 1
// Declara dos variables, num1 y num2, asignándoles valores numéricos 
// diferentes y muestra en consola el resultado de sumarlos.
let num1 = 10;
let num2 = 20;
console.log(num1 + num2);
console.groupEnd();

console.groupCollapsed("Ejercicio 2");
// Ejercicio 2
// Define dos variables de tipo string, simpleString1 y simpleString2, con valores
//  "Hola" y "Mundo" respectivamente. Muestra en consola la longitud total de ambas cadenas.
let simpleString1 = "Hola";
let simpleString2 = "Mundo";

console.log(`la longitud del texto uno es de ${simpleString1.length}`);
console.log(`la longitud del texto doa es de ${simpleString2.length}`);
console.groupEnd();

console.groupCollapsed("Ejercicio 3");
// Ejercicio 3
// Crea dos variables de tipo string usando la función
// String(): stringUsingString1 con el valor "JavaScript"
//  y stringUsingString2 con el valor "Ejercicios".

let stringUsingString1 = String('hola');
let stringUsingString2 = String('mundo');

console.log(simpleString1, simpleString2);

console.groupEnd();

console.groupCollapsed("Ejercicio 4");
// Ejercicio 4 
// Utiliza el operador new para crear dos variables de tipo string:
// stringUsingNewString1 con el valor "Concatenar" y stringUsingNewString2
// con el valor "Strings".

let stringUsingNewString1 = new String('hola');
let stringUsingNewString2 = new String('mundo');

console.log(simpleString1, simpleString2);
console.groupEnd();

console.groupCollapsed("Ejercicio 5");
// Ejercicio 5
// Calcula e imprime en consola la posición del substring "la" en la variable simpleString1.
console.log(simpleString1.indexOf("la"));

console.groupEnd();

console.groupCollapsed("Ejercicio 6");
// Ejercicio 6
// Comprueba si la variable simpleString2 contiene el substring "ndo" e imprime el resultado en consola.

let resultadoBusqueda = simpleString2.includes("ndo");

if (resultadoBusqueda == true) {
    console.log('la palabra si esta');
} else{
    console.log('la palabra no esta');
}
console.groupEnd();

console.groupCollapsed("Ejercicio 7");
// Ejercicio 7
// Concatena las variables simpleString1 y simpleString2 utilizando el método concat() y muestra el resultado en consola.

let resultadoConcatenacion = simpleString1.concat( simpleString2);
console.log(resultadoConcatenacion);

console.groupEnd();

console.groupCollapsed("Ejercicio 8");
// Ejercicio 8
// Concatena las variables simpleString1 y simpleString2 utilizando el operador + y muestra el resultado en consola.

console.log(simpleString1 + "" + simpleString2);
console.groupEnd();

console.groupCollapsed("Ejercicio 9");
// Ejercicio 9
// Utiliza template strings para concatenar las variables simpleString1 y simpleString2 e imprime el resultado en consola.

console.log(`${simpleString1} ${simpleString2}`);
console.groupEnd();

console.groupCollapsed("Ejercicio 10");
// Ejercicio 10
// Declara una variable stringWithSpaces1 con el valor " TrimStart" y otra variable stringWithSpaces2
//  con el valor "TrimEnd ". Elimina los espacios en blanco al principio y al final de
//   ambas cadenas e imprime el resultado en consola.

let stringWithSpaces1 = " TrimStart";
let stringWithSpaces2 = "TrimEnd ";

console.log(stringWithSpaces1.trimStart(), stringWithSpaces2.trimEnd());
console.groupEnd();

console.groupCollapsed("Ejercicio 11");
// Ejercicio 11
// Reemplaza la letra 'o' por la letra 'i' en la variable simpleString1 e imprime el resultado en consola.

let stringCambiado = simpleString1.replace("o", "i");
console.log(stringCambiado);

console.groupEnd();

console.groupCollapsed("Ejercicio 12");
// Ejercicio 12
// Utiliza el método slice() para obtener los primeros tres caracteres de la variable simpleString2 e imprime el resultado en consola.

console.log(simpleString2.slice(0, 3));
console.groupEnd();

console.groupCollapsed("Ejercicio 13");
// Ejercicio 13 
// Utiliza el método substring() para obtener una subcadena de la variable simpleString2 que comience en el índice 2 e imprime el resultado en consola.

console.log(simpleString2.substring( 2 ));
console.groupEnd();

console.groupCollapsed("Ejercicio 14");
// Ejercicio 14
// Repite la variable simpleString1 dos veces utilizando el método repeat() e imprime el resultado en consola.

console.log(simpleString1.repeat(2));
console.groupEnd();

console.groupCollapsed("Ejercicio 15");
// Ejercicio 15
// Divide la cadena "Esto es una oración de ejemplo" en un array de palabras y muestra el resultado en consola.
let cadenaADividir = "Esto es una oración de ejemplo"
let array = cadenaADividir.split(" ");
console.log(array);
console.groupEnd();

console.groupCollapsed("Ejercicio 16");
// Ejercicio 16
// Convierte la variable simpleString2 a mayúsculas utilizando el método toUpperCase() e imprime el resultado en consola.
console.log(simpleString2.toUpperCase());
console.groupEnd();

console.groupCollapsed("Ejercicio 17");
// Ejercicio 17
// Convierte la variable simpleString1 a minúsculas utilizando el método toLowerCase() e imprime el resultado en consola.
console.log(simpleString1.toLowerCase());
console.groupEnd();

console.groupCollapsed("Ejercicio 18");
// Ejercicio 18
// Declara una variable booleana y asígnale un valor booleano. Muestra en consola su tipo de dato utilizando el operador typeof().

let booleano = true;
console.log(booleano);
console.groupEnd();

console.groupCollapsed("Ejercicio 19");
// Ejercicio 19
// Declara una variable arreglo y asígnale un array con al menos tres elementos. Muestra en consola la longitud del array.

let arreglo = [ "hola","mundo","como","estan"]
console.log(arreglo.length);
console.groupEnd();

console.groupCollapsed("Ejercicio 20");
// Ejercicio 20
// Declara una variable objeto y asígnale un objeto con al menos tres propiedades. Muestra en consola una de las propiedades del objeto.
let objeto = {
    nombre: "John",
    apellido: "Buren",
    edad: 20
}

let key = Object.keys(objeto)

key.forEach(e => {
    console.log( e, objeto[e]);
});

console.groupEnd();

console.groupCollapsed("Ejercicio 21");
// Ejercicio 21
// Declara una variable nulo y asígnale el valor null. Muestra en consola su tipo de dato utilizando el operador typeof().

let nulo = null
console.log(typeof(nulo));
console.groupEnd();

console.groupCollapsed("Ejercicio 22");
// Ejercicio 22
// Declara una variable indefinido y no le asignes ningún valor. Muestra en consola su tipo de dato utilizando el operador typeof().

let indefinida = undefined
console.log(typeof(indefinida));
console.groupEnd();

console.groupCollapsed("Ejercicio 23");
// Ejercicio 23
// Declara una variable decimal y asígnale un número decimal. Muestra en consola su tipo de dato utilizando el operador typeof().

let decimal = 10.23;
console.log(typeof(decimal));
console.groupEnd();

console.groupCollapsed("Ejercicio 24");
// Ejercicio 24
// Declara una variable negativo y asígnale un número negativo. Muestra en consola su tipo de dato utilizando el operador typeof().

let negativo = -10;
console.log(typeof(negativo));
console.groupEnd();

console.groupCollapsed("Ejercicio 25");
// Ejercicio 25
// Utiliza el método indexOf() para encontrar la posición del carácter 'a' en la cadena "Casa" e imprime el resultado en consola

let cadenaCasa = "casa"
console.log(cadenaCasa.indexOf('a'));

function contarLetra(str, letra) {
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letra) {
            contador++;
        }
    }
    return contador;
}

let letraBuscar = "a";
let vecesRepetida = contarLetra(cadenaCasa, letraBuscar);

console.log(`La letra "${letraBuscar}" se repite ${vecesRepetida} veces en el texto.`);
console.groupEnd();

console.groupCollapsed("Ejercicio 26");
// Ejercicio 26
// Comprueba si la cadena "Javascript" incluye el substring "Script" utilizando el método includes() e imprime el resultado en consola.

let cadenaScript = "JavaScript"
console.log(cadenaScript.includes('Script'));
console.groupEnd();

console.groupCollapsed("Ejercicio 27");
// Ejercicio 27
// Concatena las cadenas "Hola" y "Mundo" utilizando el método concat() y muestra el resultado en consola.

console.log(simpleString1.concat(" ",simpleString2));
console.groupEnd();

console.groupCollapsed("Ejercicio 28");
// Ejercicio 28
// Concatena las cadenas "Hola" y "Mundo" utilizando el operador + y muestra el resultado en consola.
let textoConcatenadoDeManeraDiferente = simpleString1 + " " + simpleString2;
console.log(textoConcatenadoDeManeraDiferente);
console.groupEnd();

console.groupCollapsed("Ejercicio 29");
// Ejercicio 29
// Utiliza template strings para concatenar las cadenas "Hola" y "Mundo" e imprime el resultado en consola.

console.log(`${simpleString1} ${ simpleString2}`);
console.groupEnd();

console.groupCollapsed("Ejercicio 30");
// Ejercicio 30 
// Declara una variable cadenaConEspacios con el valor " Ejemplo con espacios ". Utiliza el método trimStart() y trimEnd() para eliminar 
// los espacios en blanco al principio y al final, respectivamente, e imprime el resultado en consola.
let cadenaConEspacios = " ejemplo con espacios ";
console.log(cadenaConEspacios.trim());
console.groupEnd();

console.groupCollapsed("Ejercicio 31");
// Ejercicio 31
// Reemplaza la palabra "azul" por "rojo" en la cadena "El cielo es azul" utilizando el método replace() e imprime el resultado en consola.

let color = "azul"
color.replace("azul", "rojo");
console.log(color);

console.groupEnd();

console.groupCollapsed("Ejercicio 32");
// Ejercicio 32
// Utiliza el método slice() para obtener los últimos cuatro caracteres de la cadena "Programación" e imprime el resultado en consola.

let cadena = "Programación";
let fragmentoCadena = cadena.slice(-4);
console.log(fragmentoCadena);
console.groupEnd();

console.groupCollapsed("Ejercicio 33");
// Ejercicio 33
// Utiliza el método substring() para obtener una subcadena de la cadena "JavaScript" que comience en el índice 2 e imprime el resultado en consola.
let cadena2 = "JavaScript";
let fragmentoCadena2 = cadena2.substring(2);
console.log(fragmentoCadena2);
console.groupEnd();

console.groupCollapsed("Ejercicio 34");
// Ejercicio 34
// Repite la cadena "Hola" tres veces utilizando el método repeat() e imprime el resultado en consola.
let cadenaHolaa = "hola";
console.log(cadenaHolaa.repeat(3));
console.groupEnd();

console.groupCollapsed("Ejercicio 35");
// Ejercicio 35
// Divide la cadena "Esto es una oración de ejemplo" en un array de palabras y muestra el resultado en consola.
let dividirCadena = "Esto es una oración de ejemplo"
let arraayCadena = dividirCadena.split(" ");
console.log(arraayCadena)
console.groupEnd();

console.groupCollapsed("Ejercicio 36 y 37");
// Ejercicio 36
// Convierte la cadena "Javascript" a mayúsculas utilizando el método toUpperCase() e imprime el resultado en consola.
// Convierte la cadena "EJEMPLO" a minúsculas utilizando el método toLowerCase() e imprime el resultado en consola.

let convertirTexto1 = "JavasCript";
let convertirTexto2 = "JavasCript";

console.log(convertirTexto1.toUpperCase(), convertirTexto2.toLowerCase());
console.groupEnd();

console.groupCollapsed("Ejercicio 38");
// Ejercicio 38
// Declara una variable numero y asígnale un número. Muestra en consola su tipo de dato utilizando el operador typeof().

let numberOne = 46335;
console.log(typeof(numberOne));
console.groupEnd();

console.groupCollapsed("Ejercicio 39");
// Ejercicio 39
// Declara una variable booleana y asígnale un valor booleano. Muestra en consola su tipo de dato utilizando el operador typeof().
let boleana2 = false;

console.log(typeof(boleana2));
console.groupEnd();

console.groupCollapsed("Ejercicio 40");
// Ejercicio 40
// Declara una variable arreglo y asígnale un array con al menos tres elementos. Muestra en consola la longitud del array.
let arregloArray  = ['juan', 'camilo', 'campillo']
console.log(arregloArray.length);
console.groupEnd();

console.groupCollapsed("Ejercicio 41");
// Ejercicio 41
// .Declara una variable nulo y asígnale el valor null. Muestra en consola su tipo de dato utilizando el operador typeof().
let camiloVariable = null; 
console.log(typeof(camiloVariable));
console.groupEnd();

console.groupCollapsed("Ejercicio 42");
// Ejercicio 42
// ⦁	Declara una variable indefinido y no le asignes ningún valor. Muestra en consola su tipo de dato utilizando el operador typeof().
let camiloVariableUnde = undefined; 
console.log(typeof(camiloVariableUnde));
console.groupEnd();

console.groupCollapsed("Ejercicio 43");
// Ejercicio 43
// ⦁	Declara una variable decimal y asígnale un número decimal. Muestra en consola su tipo de dato utilizando el operador typeof().
let variableDecimal = 422318.23049;
console.log(typeof(variableDecimal));
console.groupEnd();
