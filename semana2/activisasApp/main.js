//creamos el array que contiene nuestra base de datos
const dataBase = {
    moly: {
        nombre: 'moly',
        raza: 'criolla',
        especie: 'gata',
        edad: '13',
        peso: '1kg',
        estado: 'estable',
        datosPropietario: {
            nombre: 'juan camilo',
            documento: '1040782903',
            telefono: '324638188',
            correo: 'jc63818787@gmail.com'
            }
    },
    pelusa: {
        nombre: 'pelusa',
        raza: 'labrador',
        especie: 'perro',
        edad: '5',
        peso: '8kg',
        estado: 'saludable',
        datosPropietario: {
            nombre: 'Laura Pérez',
            documento: '123456789',
            telefono: '321987654',
            correo: 'laura@example.com'
        }
    },
    firulais: {
        nombre: 'firulais',
        raza: 'schnauzer',
        especie: 'perro',
        edad: '7',
        peso: '6kg',
        estado: 'vacunado',
        datosPropietario: {
        nombre: 'Pedro Gómez',
        documento: '987654321',
        telefono: '301234567',
        correo: 'pedro@example.com'
        }
    },
    luna: {
        nombre: 'luna',
        raza: 'siames',
        especie: 'gato',
        edad: '2',
        peso: '3kg',
        estado: 'embarazada',
        datosPropietario: {
        nombre: 'María García',
        documento: '456789012',
        telefono: '315678901',
        correo: 'maria@example.com'
        }
    },
    rex: {
        nombre: 'rex',
        raza: 'pastor alemán',
        especie: 'perro',
        edad: '4',
        peso: '10kg',
        estado: 'castrado',
        datosPropietario: {
        nombre: 'Carlos Martínez',
        documento: '567890123',
        telefono: '333444555',
        correo: 'carlos@example.com'
        }
    },
    simba: {
        nombre: 'simba',
        raza: 'persa',
        especie: 'gato',
        edad: '3',
        peso: '4kg',
        estado: 'juguetón',
        datosPropietario: {
        nombre: 'Ana Ramírez',
        documento: '678901234',
        telefono: '222333444',
        correo: 'ana@example.com'
        }
    },
    toby: {
        nombre: 'toby',
        raza: 'golden retriever',
        especie: 'perro',
        edad: '6',
        peso: '7kg',
        estado: 'obediente',
        datosPropietario: {
        nombre: 'Patricia López',
        documento: '789012345',
        telefono: '444555666',
        correo: 'patricia@example.com'
        }
    },
    nala: {
        nombre: 'nala',
        raza: 'siames',
        especie: 'gato',
        edad: '1',
        peso: '2kg',
        estado: 'juguetona',
        datosPropietario: {
        nombre: 'David González',
        documento: '890123456',
        telefono: '555666777',
        correo: 'david@example.com'
        }
    },
    rocky: {
        nombre: 'rocky',
        raza: 'bulldog',
        especie: 'perro',
        edad: '8',
        peso: '9kg',
        estado: 'tranquilo',
        datosPropietario: {
        nombre: 'Laura Gómez',
        documento: '901234567',
        telefono: '666777888',
        correo: 'laura@example.com'
        }
    },
    miau: {
        nombre: 'miau',
        raza: 'criollo',
        especie: 'gato',
        edad: '4',
        peso: '3.5kg',
        estado: 'dormilón',
        datosPropietario: {
        nombre: 'juan camilo',
        documento: '012345678',
        telefono: '777888999',
        correo: 'sandra@example.com'
        }
    }
}
//filtrar mascostas de un mismo dueno
function filtrarMascotas(dataBase) {
    let nombrePersona = prompt('que dueno quieres filtrar ? ');
    for (const key in dataBase) {
        if (dataBase[key]['datosPropietario'].nombre === nombrePersona) {
            console.log(`${dataBase[key]['datosPropietario'].nombre}--> mascota : ${key}`);
        }
    }
}
//menu de app
function mostrarMenu() {
    let menu = prompt(`
    --------Bienvenido--------
    Que deseas hacer ? 
    --------
    [1] Ver todos las mascotas 
    [2] ver lista de todos los duenos
    [3] Busqeuda Filtrada 
    [4] Actualizar informcaion paciente
    [5] Eliminar paciente
    [6] Buscar mascota por nombre
    [7] Buscar mascota por nombre
    [8] Salir
    ---------
    `);
    return menu
}
//leer propietario
function mostrarListaPersona(dataBase) {
    for (const key in dataBase) {
        console.log('----------------------------');
        console.log(`----> Mascota : ${key} <----`);
        const dataPerona =  dataBase[key]['datosPropietario']
        for (const i in dataPerona) {
            if (i == 'nombre') {
                console.log(` Propietario : ${dataPerona[i]}`);
                break
            }
        }
        
    }    
}
//leer mascotas
function mostrarMascota(dataBase) {
    //recorremos y mostramos las mascotas registradas
    for (const key in dataBase) {
        console.log(`Nombre : ${key}`);
    }
}
//buscar mascota por el nombre
function  buscarMascota(dataBase) {
    //nombre de la mascota a buscar
    let nombreBuscar = prompt('Nombre de la mascota a bsucar')
    for (const key in dataBase) {
        //verificamos si el nombre esta en l abase de datos 
        if (key === nombreBuscar) {
            console.log(`hay considencias ${key}`);
            break
        } else{
            console.log(`sin considencias -->`);
        }
    }
}
//actualizar
function modificarInformacionMascota (dataBase){
    mostrarMascota(dataBase)
    let preguntaMascota = prompt(`Que mascota deseas modificar ? `)
    const editable = dataBase[preguntaMascota]
    console.log(editable); 
    let preguntaCambiar = prompt('Que quieres cambiar ?')
    let nuevoValor = prompt('ingresa el nuevo valor!')
    dataBase[preguntaMascota][preguntaCambiar]= nuevoValor
    console.log(editable); 
}
//eliminar
function eliminarMascota(dataBase) {
    mostrarMascota(dataBase)
    console.log("que usuario vas a eliminar ? ");
    let nombreMascotaEliminar = prompt('ingresa nombre de la mascota')
    let confirmacion = confirm(`estas seguro de eliminar a ${nombreMascotaEliminar}`);

    if (confirmacion) {
        delete dataBase[nombreMascotaEliminar];
        mostrarMascota(dataBase)
    }else{
        console.log("No se borro");
    }
}
// funcion calcular edad
function calcularEdad(fechaNacimientoString) {
    let fechaActual = new Date();
    const fechaNacimiento = new Date(fechaNacimientoString);
    let diferenciaAnios = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    
    if (fechaActual.getMonth() < fechaNacimiento.getMonth() || (fechaActual.getMonth() === fechaNacimiento.getMonth() && fechaActual.getDate() < fechaNacimiento.getDate())) {
        diferenciaAnios--;
    }

    return diferenciaAnios;
    console.log(calcularEdad("1998-08-16"))
}
// funcion ingresar nuevo paciente 
function registrarPaciente(dataBase) {
    let nombrePaciente = prompt('ingresa el nombre del paciente');
    let razaPaciente = prompt('ingresa  la raza');
    let especiePaciente = prompt('ingresa  la raza');
    let edadPaciente = prompt('ingresa fecha nacimiento  AAAA-MM-DD');
    let pesoPaciente = prompt('ingresa  el peso');
    let estadoPaciente = prompt('ingresa el estado del paciente');
    let nombrePropietario = prompt('ingresa nombre propietario');
    let documentoPropietario = prompt('ingresa nombre propietario');
    let telefonoPropietario = prompt('ingresa nombre propietario');
    let correoPropietario = prompt('ingresa nombre propietario');

    let nombre = nombrePaciente;

    dataBase[nombre]= {
        nombre: nombrePaciente,
        raza: razaPaciente,
        especie: especiePaciente,
        edad: calcularEdad(edadPaciente),
        peso: pesoPaciente,
        estado: estadoPaciente,
        datosPropietario: {
            nombre: nombrePropietario,
            documento: documentoPropietario,
            telefono: telefonoPropietario,
            correo: correoPropietario
        }
    }
}


function app() {
    let iniciado = true
    do {
        let resapuestaMenu = mostrarMenu()

        if (resapuestaMenu === '1') {
            mostrarMascota(dataBase)
        } else if(resapuestaMenu === '2' ){
            mostrarListaPersona(dataBase)
        } else if(resapuestaMenu === '3' ){
            filtrarMascotas(dataBase)
        } else if(resapuestaMenu === '4' ){
            modificarInformacionMascota(dataBase)
        } else if(resapuestaMenu === '5' ){
            eliminarMascota(dataBase)
        } else if(resapuestaMenu === '6' ){
            buscarMascota(dataBase)
        } else if(resapuestaMenu === '7'){
            registrarPaciente(dataBase)
        } else {
            console.log('Programa Cerrado');
            iniciado = false
        }
    console.log(dataBase);
    } while (iniciado);
}

//iniciamos la aplicacion 
app()