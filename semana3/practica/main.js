let numeros = [2,3,56,265,375,56,2,3,56]

function encontrarNumeroMayor(numeros) {
    let numeroTemporal = 0;

    numeros.forEach(element => {
        if (parseInt(element) > numeroTemporal) {
            numeroTemporal = element
        }
    });

    console.log(numeroTemporal);
}

function quitarDuplicados(numeros) {
    
    let duplicados = []

    numeros.forEach(element =>{
        if (!duplicados.includes(element)) {
            duplicados.push(element)
        }
    })
    return duplicados
}

console.log(quitarDuplicados(numeros))
encontrarNumeroMayor(numeros)
console.log(Math.max(...numeros));