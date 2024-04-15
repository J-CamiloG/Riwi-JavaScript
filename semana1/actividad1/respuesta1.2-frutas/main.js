// 2. Clasificación de frutas:
// Crea una variable que almacene un arreglo de frutas. Recorre el arreglo e imprime en la consola
// cada fruta utilizando el método log. Luego, clasifica las frutas en dos categorías (cítricas y no
// cítricas) y crea dos nuevos arreglos para almacenarlas. Imprime ambos arreglos en la consola
// utilizando el método table.

const fruits = ['manzana', 'naranja', 'plátano', 'uva', 'sandía', 'pera', 'kiwi', 'melón', 'fresa', 'piña'];
let fruitSitric = [];
let notFruitSitric = [];

fruits.forEach(fruit => {
    console.log(fruit);

    if ( fruit == 'naranja' || fruit == 'kiwi'){
        fruitSitric.push(fruit);
    } else {
        notFruitSitric.push(fruit);
    }
});

console.table(fruitSitric);
console.table(notFruitSitric);