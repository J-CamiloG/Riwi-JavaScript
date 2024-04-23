// const coder = {
//     id:'c001',
//     name: 'javier',
//     lastName: 'combita',
//     email: 'jcshsuf@gmail.com',
//     clan: 'linux',
//     city: 'medellin',
//     country: 'colombia',
//     phone: '4738829384',
//     birtDate : new Date(1990, 1, 1),
//     getFullName: function(){
//         return `${this.name} ${this.lastName}`;
//     },
//     getSaludar: function () {
//         console.log(`hola ${this.getFullName} como estas ?`);
//     }
// }

// coder.contactName='juan gutierrez';




// Object.defineProperty(coder,'teamLeader',{
//     value: 'juan',
//     writable: true, // permite que la propiedad sea actualizada
//     configurable: true,// permite que la propiedad sea visible
//     enumerable: true // permite que la propiedad sea eliminada
// })

// delete coder.teamLeader;


// const objetoA = {
//     a: "alpha",
//     b: "bravo",
//     c: "chalie"
// }
// const objetoB = {
//     d: "delta",
//     e: "echo",
//     f: "foxtrot"
// }
// console.info(objetoA)
// console.info(objetoB)


// Object.assign(objetoA,objetoB);

// console.info(objetoA)



// const objetod = {
//     a: "alpha",
//     b: "bravo",
//     c: "chalie"
// }
// const objetof = {
//     d: "delta",
//     e: "echo",
//     f: "foxtrot"
// }

// const resultadoObjeto = {...objetof, ...objetod}


// const person = {
//     nameCoder: "javier",
//     lastNameCoder: "combita",
//     birthDateCoder: new Date("1998-04-23 14:00:00"),
//     identificationNumberCoder: "109624738486",
//     location: {
//         countryCoder: "colombia",
//         state: "antioquia",
//         city: "medellin",
//         address: "cl 14 # 58-43",
//     },
//     emailCoder: "jcomte@outlook.com"
// }



//froma manual 

// const name = person.nameCoder;
// const email = person.emailCoder;
// const identificationNumberCoder = person.identificationNumberCoder
// console.log(name,email,identificationNumberCoder);

// forma dinamica 
// const {
//     nameCoder: name,
//     emailCoder: email,
//     identificationNumberCoder: documentId,
// } = person

// console.log(name, email, documentId)


const mascota = {
    nombre: "Max",
    edad: 5,
    peso: 10,
    raza: "Labrador",
    especie: "Perro",
    propietario: {
        nombre: "Juan",
        apellido: "Pérez",
        documento: "12345678"
    }
};

//nombre edad cachorro
const {
    nombre,
    edad,
} = mascota

//otro debe los datos del propietario
const nombrePropietario = mascota.propietario.nombre;
const documentoPropietario = mascota.propietario.documento;

console.log(`
el nombre de las mascota es: ${nombre} 
la edad es de : ${edad}`);
console.log(`
el nombre del propietario es: ${nombrePropietario} 
el documento es: ${documentoPropietario}`);




// Desestructuración para acceder a los valores del propietario
// const mascota = {
//     nombre: "Max",
//     edad: 5,
//     peso: 10,
//     raza: "Labrador",
//     especie: "Perro",
//     propietario: {
//         nombre: "Juan",
//         apellido: "Pérez",
//         documento: "12345678"
//     }
// };

// // Desestructuración para acceder a los valores del propietario
// const {
//     nombre,
//     edad,
//     peso,
//     raza,
//     especie,
//     propietario: { nombre: nombrePropietario, apellido: apellidoPropietario, documento: documentoPropietario }
// } = mascota;

// console.log("Nombre del propietario:", nombrePropietario);
// console.log("Apellido del propietario:", apellidoPropietario);
// console.log("Documento del propietario:", documentoPropietario);
// console.log(nombre);
