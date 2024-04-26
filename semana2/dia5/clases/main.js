function enviarNotificacion (name) {
    console.log(`Hola coder  ${name}`);
} 
function paraDespedir(name) {
    console.log(`estas despedido ${name}`);
}

const saludar = (name) => {console.log(`Hola coder ${name}`);}
// let numero = num>5? console.log(`num es mayor a 5 `) : console.log(`num es menor a 5`);

// 
enviarNotificacion("John");
// paraDespedir("John");
paraDespedir('mateo')

function  sumar(num,num2) {
    let respuesta = num + num2
    return respuesta
}
sumar(10,20);


function getDate() {
    // Crear un nuevo objeto de fecha
    let fechaActual = new Date();
    
    // Obtener los componentes de la fecha
    let dia = fechaActual.getDate();
    let mes = fechaActual.getMonth() + 1; // Los meses comienzan desde 0
    let año = fechaActual.getFullYear();
    
    // Formatear la fecha como "DD/MM/AAAA"
    let fechaFormateada = dia + '/' + mes + '/' + año;
    
    // Devolver la fecha formateada
    return fechaFormateada;
}

function imprimirHoraActualizada() {
    // Crear un nuevo objeto de fecha para obtener la hora actual
    var fechaActual = new Date();

    // Obtener los componentes de la hora
    var horas = fechaActual.getHours();
    var minutos = fechaActual.getMinutes();
    var segundos = fechaActual.getSeconds();

    // Formatear la hora
    var horaFormateada = horas + ':' + minutos;

    // Imprimir la hora actualizada en la consola
    console.log(horaFormateada);
}

// Imprimir la hora actualizada cada minuto (60,000 milisegundos = 1 minuto)
setInterval(imprimirHoraActualizada, 60000);
