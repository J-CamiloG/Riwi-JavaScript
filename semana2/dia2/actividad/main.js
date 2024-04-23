// 1. Crea un objeto llamado persona con propiedades como 
// nombre, edad y ciudad.

const persona = {
    nombre: "John",
    edad: 25,
    ciudad: "Madrid"
}
// 2. Agrega una propiedad adicional al objeto persona que 
// represente su ocupación. 
persona.ocupacion = 'estudiante'
// 3. Accede a una propiedad del objeto persona y muestra su valor 
// en la consola. 
console.log(persona);
// 4. Crea otro objeto llamado libro con propiedades como título, 
// autor y año de publicación.
const libro = {
    titulo: '100 anos de soledad',
    autor: 'John Garcia Marquez',
    año: 1967
}
// 5. Combina las propiedades de los objetos persona y libro en un 
// nuevo objeto llamado informacion.
const informacion = {...persona, ...libro}
// 6. Cambia el valor de una propiedad en el objeto persona.
persona.nombre = 'Juan'
// 7. Elimina una propiedad del objeto libro. 
delete libro.año
// 8. Crea un objeto llamado coche con propiedades como modelo, 
// marca y año. 
const coche = {
    año:'2024',
    marca:'Audi'
}
// 9. Muestra todas las propiedades del objeto coche en la consola. 
for (key in coche){
    console.log(key, coche[key]);
}
// 10. Agrega un método al objeto coche que imprima un mensaje 
// en la consola. 
coche.mensaje = function () {
    console.log('Buenas');
}
// 11. Crea un objeto llamado circulo con propiedades como radio y 
// color. 
const circulo = {
    radio:'32',
    color: 'red'
}
// 12. Calcula el área del círculo utilizando la fórmula A = πr² y 
// muestra el resultado.
let areaCirculo =( Math.PI * (circulo.radio * circulo.radio))
console.log(areaCirculo);
// 13. Crea un objeto llamado rectangulo con propiedades como 
// ancho y alto. 
const rectangulo = {
    ancho:'20',
    alto:'10'
}
// 14. Calcula el perímetro del rectángulo utilizando la fórmula P = 2 
// * (ancho + alto) y muestra el resultado. 
let resultadoPerimetro = Math.PI * (rectangulo.ancho * rectangulo.alto)
console.log(resultadoPerimetro);
// 15. Combina las propiedades de los objetos circulo y rectangulo 
// en un nuevo objeto llamado formas.
const formas = {
    ...circulo,
    ...rectangulo
}
console.log(formas);
// 16. Crea un objeto llamado computadora con propiedades como 
// marca, modelo y precio. 
const computadora = {
    marca:'hp',
    modelo:'5d',
    precio: 7500
}
// 17. Muestra el precio de la computadora en la consola. 
console.log('el precio de la compuradota es', computadora.precio);
// 18. Agrega una propiedad al objeto computadora que indique si 
// tiene o no una tarjeta gráfica. 
computadora.tajetaGrafica = true;
// 19. Crea un objeto llamado mascota con propiedades como 
// nombre, especie y edad. 
const mascota = {
    nombre: 'perez',
    edad : '44',
    especie:'labrador'
}
// 20. Muestra en la consola la especie de la mascota en 
// mayúsculas. 
console.log(mascota.especie.toUpperCase());
// 21. Crea un objeto llamado fruta con propiedades como nombre y 
// color. 
const frutas = {
    nombre:'apple',
    color:'red'
}
// 22. Agrega un método al objeto fruta que imprima un mensaje 
// indicando si la fruta está madura.
frutas.madura = true;
frutas.mensajeMadura = function () {
    let mensaje = console.log( this.madura ? 'la fruta esta madura' : 'la furta no esta madura'); 
    return mensaje
}
frutas.mensajeMadura();
// 23. Crea un objeto llamado estudiante con propiedades como 
// nombre, edad y calificaciones. 
const estudiantes = {
    nombre:'juan camilo',
    edad:'33',
    calificaciones: [2,3.5,2.5,5]
}
// 24. Muestra en la consola el promedio de las calificaciones del 
// estudiante. 
let resultadoCalificaciones = 0
estudiantes.calificaciones.forEach(element =>{
    resultadoCalificaciones += element;
})
console.log(resultadoCalificaciones * estudiantes.calificaciones.length);
// 25. Agrega una propiedad al objeto estudiante que indique si ha 
// aprobado o no. 
estudiantes.aprobado = true;
// 26. Crea un objeto llamado bolsa con propiedades como tamaño y 
// color. 
const bolsaVariedades = {
    tamano: '2xl',
    color : 'red'
}
// 27. Muestra en la consola un mensaje que indique la capacidad 
// de la bolsa (tamaño).
console.log(bolsaVariedades.tamano);
// 28. Agrega un método al objeto bolsa que cambie su color.
bolsaVariedades.color = 'blue'
// 29. Crea un objeto llamado telefono con propiedades como 
// marca, modelo y sistema operativo. 
const telefono = {
    marca:'iphone',
    modelo:'2023',
    sitemaOperativo:'Ios16'
}
// 30. Muestra en la consola un mensaje indicando el sistema 
// operativo del teléfono. 
console.log(`el sistema operativo es ${telefono.sitemaOperativo}`);
// 31. Agrega una propiedad al objeto telefono que represente la 
// cantidad de memoria RAM. 
telefono.memoriaRam = '36'
// 32. Crea un objeto llamado animal con propiedades como tipo y 
// sonido. 
const animal = {
    tipo:'leon',
    sonido:'Raggggggggggt'
}
// 33. Muestra en la consola un mensaje que indique el sonido del 
// animal. 
console.log(animal.sonido);
// 34. Agrega un método al objeto animal que imprima un mensaje 
// indicando su tipo y sonido. 
animal.mensaje = function () {
    console.log(`soy ${this.tipo} y mi sonido es ${this.sonido}`);
}
animal.mensaje();
// 35. Crea un objeto llamado vuelo con propiedades como 
// aerolínea, número de vuelo y hora de salida. 
const vuelo = {
    aerolinea:'avianca',
    numeroVuelo:'1723494',
    horaSalida:'12:00am'
}

// 36. Muestra en la consola un mensaje que indique la aerolínea y 
// el número de vuelo.

console.log(`aerolinea: ${vuelo.aerolinea} Hora: ${vuelo.horaSalida}`);
// 37. Agrega una propiedad al objeto vuelo que represente el 
// destino del vuelo. 
vuelo.destino = 'Miami'
// 38. Crea un objeto llamado jugador con propiedades como 
// nombre, equipo y posición. 
const jugador = {
    nombre:'juan',
    equipo :'Real Madrid',
    posisicon : 'central'
}
// 39. Muestra en la consola un mensaje que indique el nombre y el 
// equipo del jugador. 
console.log(`nombre: ${jugador.nombre} equopi : ${jugador.equipo}`);
// 40. Agrega un método al objeto jugador que imprima un mensaje 
// indicando su posición en el equipo. 
jugador.mansaje = function () {
    console.log(`la posicion es : ${this.posisicon}`);
}
jugador.mansaje()