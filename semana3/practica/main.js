let numeros = [2,3,56,265,375,56,2,3,56]

// encontrar el numero mayor 
function encontrarNumeroMayor(numeros) {
    let numeroTemporal = 0;

    numeros.forEach(element => {
        if (parseInt(element) > numeroTemporal) {
            numeroTemporal = element
        }
    });

    console.log(numeroTemporal);
}


//quitar duplicados creando lista
function quitarDuplicados(numeros) {
    
    let duplicados = []

    numeros.forEach(element =>{
        if (!duplicados.includes(element)) {
            duplicados.push(element)
        }
    })
    return duplicados
}

// crear duplicados no creando lista, modificando la que exisate

function  quitarDuplicadosSinOtroArray (numeros) {
    let indice = 0 
    while (indice < numeros.length) {
        const elemento = numeros[indice]
        const indiceDuplicado = numeros.indexOf(elemento, indice + 1)

        if (indiceDuplicado !== -1) {
            numeros.splice(indiceDuplicado, 1)
        } else {
            indice++
        }
    } 
}

quitarDuplicadosSinOtroArray(numeros)
console.log(numeros);
console.log(quitarDuplicados(numeros))
encontrarNumeroMayor(numeros)
console.log(Math.max(...numeros));