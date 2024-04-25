// 1. Crea un array llamado frutas que contenga al menos 5 nombres de frutas diferentes.
let frutas = ["banana", "madarina", "uva", "pera", "manzana"];
// 2. Utiliza un bucle for para recorrer el array frutas e imprimir cada elemento en la consola.
frutas.forEach(function(fruta){
    console.log(fruta);
});
// 3. Utiliza un foreach para recorrer el array frutas e imprimir cada fruta en mayúscula en la
// consola.
frutas.forEach(function(fruta){
    console.log(fruta.toUpperCase());
})
// 4. Crea un array llamado números que contenga los números del 1 al 10.
let numeros = [1,3,3,4,5,6,7,8,9,10];
// 5. Utiliza un bucle while para recorrer el array numeros e imprimir cada elemento en la
// consola.
let contador = 0;
while (contador < numeros.length) {
    console.log(numeros[contador]);
    contador++;
}
// 6. Agrega una nueva fruta al final del array frutas.
frutas.push('sandia')
frutas[frutas.length] = "papaya";
frutas = [...frutas, "arandano"];
frutas = frutas.concat("coroso");


// 7. Elimina el segundo elemento del array números.
delete frutas[1];
frutas.splice(2,3);
console.log(frutas);
const primerElemento = frutas.shift(); // elimina el primer elemento de un array y lo devulve
const ultimoElemento = frutas.pop();// elimina el ultimo elemento de un array y lo devulve

// 8. Invierte el orden de los elementos en el array frutas.
frutas.reverse()
console.log(frutas);
// 9. Ordena el array numeros en orden descendente.
numeros.sort(((a, b) => b - a))
console.log(numeros);
// 10. Crea una función llamada buscarFruta que tome como argumento una fruta y devuelva
// true si esa fruta está en el array frutas, y false en caso contrario.
function buscarFruta(fruta) {
    let busqueda = false
    frutas.forEach(function(elemento) {
        if (elemento === fruta) {
            busqueda = true
        }
    })
    return busqueda
}
console.log(buscarFruta('arandano'));
// 11. Imprime en la consola el primer elemento del array frutas.
console.log(frutas[0]);
// 12. Imprime en la consola el último elemento del array numeros.
console.log(frutas[-1]);
// 13. Utiliza el método forEach para imprimir cada fruta pero convertida a array.
frutas.forEach(function (i) {
    const NuevoArray = [i]
    console.log(NuevoArray);
})
// const array = Array(elemento); conviete un elemento en un array 

// 14. Utiliza un bucle for of para imprimir cada número del array numeros en la consola.
for (const iterator of numeros) {
    console.log(iterator);
}
// 15. Crea un nuevo array llamado duplicados que contenga el doble de cada número en el array
// numeros utilizando el método map.
let arrayDuplicados = []
numeros.forEach(function (numero) {
    let operacion = numero + numero;
    arrayDuplicados.push(operacion)
})

const otroMetodoArrayDuplicados = numeros.map(function (elemento,index) {
    return elemento+elemento;
})

// 16. Crea dos arrays llamados array1 y array2, cada uno con al menos 3 números.
let array1 = [1,2,3,67,4,3256]
let array2 = [4,5,6]
// 17. Calcula la suma de los elementos de array1 y array2 por separado y muestra los resultados
// en la consola.
const sumaArray1 = array1.reduce((acomulador,elemento)=> acomulador + elemento,0);
const sumaArray2 = array2.reduce((acomulador,elemento)=> acomulador + elemento,0);
// console.log(sumaArray1);
// console.log(sumaArray2);
// console.log(sumaArray1+sumaArray2);

// 18. Crea una función llamada buscarNumero que tome como argumentos un número y un
// array de números, y devuelva true si el número está en el array, y false en caso contrario.
function buscarNumero(numeros,num) {
    let busquedaResultado = false
    for (const iterator of numeros) {
        if (iterator === num) {
            busquedaResultado = true
        }
    }
    console.log(busquedaResultado);
}

buscarNumero(numeros,3);
// 19. Crea un array llamado edades que contenga al menos 5 números (edades).
let edades = [1,23,45,21,14]
// 20. Filtra el array edades para obtener un nuevo array llamado mayoresDeEdad que contenga
// solo las edades mayores o iguales a 18.
const mayoresDeEdad = edades.filter(function(elemento) {
    return elemento >= 18;
})

console.log(mayoresDeEdad);
// 21. Crea un array llamado precios que contenga al menos 3 números (precios de productos).
let precios = [2000,45000,6000,74,2,46]
// 22. Utiliza el método map para crear un nuevo array llamado preciosConIVA que contenga los
// precios con un 21% de IVA aplicado a cada uno.
const preciosConIVA = precios.map(function(elemento) {
    return elemento *1.19;
})
console.log(preciosConIVA);
// 23. Crea un array llamado duplicados que contenga algunos números duplicados.
let duplicados = [1,1,23,45,543,443,23,2,33,2]
// 24. Elimina los elementos duplicados del array duplicados y muestra el nuevo array sin
// duplicados en la consola.

const arraySinDuplicados = duplicados.filter((elemento, indice) => duplicados.indexOf(elemento) === indice);
console.log(arraySinDuplicados);
// const arraySinDuplicados = [...new Set(duplicados)];  una forma 

// 25. Crea dos arrays llamados array1 y array2, cada uno con al menos 3 nombres.
let nuevoArray1 = ['juan','deigo','carolina']
let nuevoArray2 = ['judaz','pedro','pablo']
// 26. Concatena los dos arrays en uno nuevo llamado concatenado y muestra el resultado en la
// consola.
let contatenado = nuevoArray1[1] +" "+ nuevoArray2[2];
console.log(contatenado);
// 27. Crea un array llamado colores que contenga al menos 5 colores diferentes.
let colores = ['amarillo', 'azul', 'rojo','verde','naranjado']
// 28. Cuenta cuántos elementos tiene el array colores y muestra el resultado en la consola.
for (let index = 0; index < colores.length; index++) {
    console.log(index);
}