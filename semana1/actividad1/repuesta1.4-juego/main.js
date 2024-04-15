// 4. Juego de adivinanzas:
// Crea un juego de adivinanzas donde el usuario deba intentar adivinar un número secreto generado
// aleatoriamente. Proporciona pistas al usuario indicando si su suposición es mayor, menor o igual al
// número secreto. Utiliza los métodos log, warn y error para imprimir mensajes informativos al
// usuario durante el juego.

let number = Math.floor(Math.random() * 100);
console.warn('Bienvenido al juego');

let adivinado = false;

while (!adivinado) {
    let respuesta = prompt('Ingresa tu respuesta para adivinar el número');
    let preguntaPista = prompt('¿Deseas una pista? (si o no)');

    if (preguntaPista === 'si') {

        let tipoAyuda = prompt(`Que tipo de ayuda deseas ?
            [1] numero mayor  igual o menor a 50 
            [2] el numero es par o impar
            [3] el nuemro es multiplo de 10
            [4] el numero esta entre 25 y 75
        `)

        if (tipoAyuda === '1') {
            if (number >= 50) {
            alert('El número es mayor o igual a 50');
            } else {
                alert('El número es menor a 50');
            }
        } else if (tipoAyuda === '2'){
            if (number % 2 === 0) {
                alert('El número es par');
            } else {
                alert('El número es impar');
            }
        } else if(tipoAyuda === '3'){
            if (number % 10 === 0) {
                alert('El número es múltiplo de 10');
            }else{
                alert('El número no es múltiplo de 10');
            }
        } else if (tipoAyuda === '4'){
            if (number > 25 && number < 75) {
                alert('El número está entre 25 y 75');
            }
        } else {
            alert('no diste opcion correcta')
        }
        
    }
    
    if (parseInt(respuesta) === number) {
        console.log(`¡Ganaste! El número era ${number}`);
        adivinado = true; 
    } else {
        console.log('Incorrecto, sigue intentando');
    }
}
