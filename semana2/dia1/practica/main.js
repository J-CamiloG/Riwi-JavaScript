// Carrito de Compras
// Crea un programa que simule un carrito de compras. El programa debe permitir
//al usuario realizar las siguientes operaciones:

// Agregar un producto al carrito.

// Eliminar un producto del carrito.

// Mostrar el contenido actual del carrito.

// Calcular el precio total de los productos en el carrito.

let productos = [
    { nombre: "Camiseta", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
    { nombre: "Sombrero", precio: 15 },
    { nombre: "Bufanda", precio: 10 },
    { nombre: "Gorra", precio: 12 },
    { nombre: "Calcetines", precio: 8 },
    { nombre: "Guantes", precio: 18 },
    { nombre: "Chaqueta", precio: 60 }
];

let inicioPrograma = true;
let carritoCompras = [];
let precioFinal = 0;
let porcentajeIva = 0.19;

function mostrarMenu() {
    let opcion = parseInt(prompt(`¿Qué deseas hacer?

    [1] Agregar un producto al carrito.
    [2] Eliminar un producto del carrito.
    [3] Mostrar el contenido actual del carrito.
    [4] Pagar
    `));
    return opcion;
}

function mostrarProductos(list) {
    let condition = true;

    do {
        console.log("Lista de productos:");
        list.forEach(producto => {
            console.log(`${producto.nombre}: $${producto.precio}`);
        });
    
        let preguntaProducto = prompt('¿Qué producto deseas agregar?');
        let encontrado = false;
    
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].nombre === preguntaProducto) {
                carritoCompras.push(productos[i]);
                encontrado = true;
                break;
            }
        }
    
        if (encontrado) {
            console.log(`¡${preguntaProducto} agregado al carrito!`);
        } else {
            console.log("¡Producto no encontrado!");
        }
        let preguntaContinuar = prompt("¿Desea agregar otro producto? (si/no)");
        if (preguntaContinuar === "no") {
            condition = false;
        }
    } while (condition);
}

function eliminarProductos(preguntaEliminar, carritoCompras) {
    for (let i = 0; i < carritoCompras.length; i++) {
        console.log(carritoCompras[i].nombre);
        if (carritoCompras[i].nombre === preguntaEliminar) {
            carritoCompras.splice(i, 1);
            break;
        }
    }
}

while (inicioPrograma) {
    let opcion = mostrarMenu();

    if (opcion === 1) {
        mostrarProductos(productos);
    } 
    else if (opcion === 2) {
        let preguntaEliminar = prompt("¿Qué producto deseas eliminar?");
        eliminarProductos(preguntaEliminar, carritoCompras);
    }
    else if (opcion === 3) {
        console.log("Lista de productos:");
        carritoCompras.forEach(producto => {
            console.log(`${producto.nombre}: $${producto.precio}`);
        });
    }
    else if (opcion === 4) {
        if (carritoCompras.length === 0) {
            console.log('No hay productos en el carrito');
        } else {
            let precioFinal = 0;
            carritoCompras.forEach(producto => {
                precioFinal += producto.precio;
            });
            console.log(`El precio final con IVA es de $${(precioFinal * (1 + porcentajeIva)).toFixed(2)}`);
        }
    } 
    else {
        console.log('La opción no es válida');
    }

    // Actualizar la variable de control del bucle
    inicioPrograma = confirm("¿Deseas continuar con el programa?");
}
