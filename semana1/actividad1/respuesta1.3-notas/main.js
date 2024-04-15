// 3- 
// Calcular el promedio de notas:
// Crea un programa que permita al usuario ingresar las notas de un estudiante en cinco asignaturas.
// Almacena las notas en un arreglo. Calcula el promedio de las notas y determina si el estudiante
// aprobó o reprobó el curso (aprobando con un promedio mayor o igual a 3.0). Imprime en la
// consola el promedio, la clasificación final (aprobado o reprobado) y todas las notas utilizando los
// métodos de impresión adecuados.

let notas = [];
let continuar = true;

while (continuar) {
    
    let nota = parseInt(prompt('Ingresa tus notas'));
    notas.push(nota);

    let pregunta = prompt('¿Quieres ingresar otra nota? (si o no)');

    if (pregunta !== 'si') {
        continuar = false;
    }
}

function calcularPromedio (elemento){
    let suma = elemento.reduce((acomulador, currnetValue) => {
        return acomulador + currnetValue;
    }, 0);

    let resultado = suma / elemento.length;
    return resultado;
}

let promedio = calcularPromedio(notas)

if (promedio >= 3) {
    console.log(`tu primedio es ${promedio}  y aprobaste`);
} else {
    console.error(`tu primedio es ${promedio} y no aprobaste`);
}


