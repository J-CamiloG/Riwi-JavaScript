// let array1 = ['camilo']

// let array2 

// array2 = array1.map(function (elemento) {
//     return elemento.toUpperCase()
// })
// console.log(array1);
// console.log(array2);

// //---------------------------------------------------------


// let array4 = ['carmen','buenas','hola'];

// let array5=[]

// array4.forEach(elemento => {
//     array5.push(elemento.toUpperCase())
// })
// console.log(array5);

// array4.reverse()

// array5.toReversed()
// console.log(array4);

// let alfabetoMilitar = [
//     "Alfa", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot",
//     "Golf", "Hotel", "India", "Juliett", "Kilo", "Lima",
//     "Mike", "November", "Oscar", "Papa", "Quebec", "Romeo",
//     "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray",
//     "Yankee", "Zulu"
// ];

// let reversado = alfabetoMilitar.reverse()

// console.log(reversado);

// const productosDeSupermercado = [
//     "Leche",
//     "Pan",
//     "Huevos",
//     "Arroz",
//     "Frijoles",
//     "Aceite de cocina",
//     "Sal",
//     "Azúcar",
//     "Harina",
//     "Carne de res",
//     "Pollo",
//     "Pescado",
//     "Frutas frescas (manzanas, plátanos, naranjas, etc.)",
//     "Verduras frescas (zanahorias, cebollas, tomates, etc.)",
//     "Agua embotellada",
//     "Refrescos",
//     "Cerveza",
//     "Vino",
//     "Jabón de baño",
//     "Shampoo",
//     "Papel higiénico",
//     "Detergente para ropa",
//     "Cepillo de dientes",
//     "Pasta dental",
//     "Cereal",
//     "Galletas",
//     "Café",
//     "Té",
//     "Yogur",
//     "Queso",
//     "Mantequilla",
//     "Snacks (patatas fritas, palomitas de maíz, etc.)",
//     "Helado",
//     "Salsa de tomate",
//     "Mayonesa",
//     "Mostaza",
//     "Ketchup",
//     "Condimentos (sal, pimienta, ajo en polvo, etc.)",
//     "Papel aluminio",
//     "Bolsas de plástico para almacenamiento",
//     "Pañuelos desechables",
//     "Pañales para bebé",
//     "Comida para mascotas (perros, gatos, etc.)",
//     "Cepillo para el cabello",
//     "Pasta de dientes",
//     "Jabón para lavar platos",
//     "Esponjas para lavar platos"
// ];

// let arrayAscendente = productosDeSupermercado.toSorted();
// let arrayAscendenteReverse = productosDeSupermercado.toSorted().reverse();
// console.log(productosDeSupermercado);
// console.log(arrayAscendente);
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// let numerosDobles = numeros.map(function (iterador) {
//     if (iterador % 2 === 0) {
//         return iterador;
//     }
// }).filter(function (elemento) {
//     return elemento !== undefined;
// });


// console.log(numeros);
// console.log(prueba);
// console.log(numerosDobles);


let nombres = ["Camilo", "ana", "shirly"];

let nombresVocales = nombres.filter(function (coder) {
    if (coder.startsWith("a") || coder.startsWith("e") || coder.startsWith("i") || coder.startsWith("o")) {
        return coder;
    }
});

console.log(nombresVocales);
