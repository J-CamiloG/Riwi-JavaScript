// Creamos un arreglo de objetos
const frutas = [
    {
        nombre: "manzana", 
        color: "rojo", 
        temporada: true
    },
    {
        nombre: "pera", 
        color: "verde", 
        temporada: true
    },
    {
        nombre: "naranja", 
        color: "naranja", 
        temporada: true
    },
    {
        nombre: "sandia", 
        color: "amarillo", 
        temporada: false
    },
    {
        nombre: "melon", 
        color: "verde", 
        temporada: false
    },
    {
        nombre: "uva", 
        color: "rojo", 
        temporada: false
    },
    {
        nombre: "kiwi", 
        color: "verde", 
        temporada: true
    },
    {
        nombre: "papaya", 
        color: "amarillo", 
        temporada: false
    }
];
//------------------------------------------
// // Imprimimos elementos del arreglo y sus posiciones
// frutas.forEach((element, key) => {
//     console.log(`Elemento en la posición ${key}:`);
//     console.log(element); // Imprimimos el objeto completo

//     // Iteramos sobre las claves del objeto
//     for (const propiedad in element) {
//         console.log(`Clave: ${propiedad}, Valor: ${element[propiedad]}`);
//     }
// });

//------------------------------------------
// listaNumeros = []
// listaPares = []

// for (let i = 1; i <= 100; i++) {
//     listaNumeros.push(i)
//     if (( i%2 ) === 0 ) {
//         listaPares.push(i)
//     }
// }

//------------------------------------------
frutasVerdes = []

frutas.forEach(i => {
    console.log(i["nombre"].toUpperCase());

    if (i["color"] === "verde") {
        frutasVerdes.push(i)
    }
});

console.log(frutasVerdes);
