// let mesIngresado = prompt(
//     `Ingrese el mes en numero
//     [1] Enero
//     [2] febrero
//     [3] marzo
//     [4] abril
//     [5] Mayo 
//     [6] junio
//     [7] julio
//     [8] agosto
//     [9] sepriembre
//     [10] octubre
//     [11] noviembre
//     [12] diceimbre
//     `
// );

// if (mesIngresado == "1" || mesIngresado == "2" || mesIngresado == "3") {
//     console.log("estas en el primer semestre del año");
// } else if (mesIngresado == "4" || mesIngresado == "5" || mesIngresado == "6"){
    
//     console.log("estas en el segundo semestre del año");
// } else if (mesIngresado == "7" || mesIngresado == "8" || mesIngresado == "9"){
//     console.log("estas en el tercer semestre del año");
// } else if (mesIngresado == "10" || mesIngresado == "11" || mesIngresado == "12"){
//     console.log("estas en el cuarto semestre del año");
// } else {
//     console.log("no es un mes valido");
// }

// desarrolla un algoricmo que muestre un menu de un restaurante,  
// y luego represente al usuario esta opciones  1 solicitar almuerzo, 
//solicitar domucion, cancelar orden y finalizar el programa 

// let menu = prompt(
//     `Ingrese el mes en numero
//     [1] Solicitar almurezo
//     [2] Solicitar domicilio
//     [3] Finalizar compra 
//     `
// )

// switch (menu){
//     case "1":
//         console.log("Solicitaste un almuerzo");
//         break;
//     case "2":
//         console.log("Solicitaste un domicilio");
//         break;
//     case "3":
//         console.log("Finalizaste la compra");
//         break;
//     default:
//         console.log("No es una opcion valida");
//         break;
// }

// function tablasMultiplicar(num) {
//     let numero = num
//     for (let i = 0; i <= 10; i++) {
//         let resultado = numero * i;
//         console.log(`${num} X ${i} = ${resultado} `);
//     }
// }

// tablasMultiplicar(8)

function tablaMultiplicar(numero) {
    let multiplicador = 1;
    while (multiplicador <= 10) {
        let resultado = numero * multiplicador;
        console.log(`${numero} x ${multiplicador} = ${resultado}`);
        multiplicador++;
    }
}


tablaMultiplicar(5);
