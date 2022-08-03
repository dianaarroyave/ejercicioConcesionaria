// ********* INICIO DEL EJERCICIO **********

//María presenta al equipo un nuevo proyecto para una concesionaria de automóviles, cuya principal línea de negocios es la compra y venta de automóviles. La concesionaria necesita construir una lista con todos los vehículos que tiene registrados. Por cada vehículo necesita conocer la siguiente información:

// Marca (Ford, Fiat, etc). (marca)
//  Modelo (Fiesta, Corolla, etc). (modelo)
//  Color (Azul, Rojo, etc). (color)
//  Año de fabricación. (año)
//  Cantidad de kilómetros recorridos. (km)
// Precio final. (precio)
//  Cantidad de cuotas. (cuotas)
// Patente. (patente)
//  Vendido: para indicar si el auto está o no vendido. (vendido)

// ************ PUNTO 1 ************** 

// En base a las definiciones técnicas tomadas con el equipo deberás declarar la variable autos. Esta debe contener los siguientes vehículos:

// El primer auto es un Ford Fiesta Azul, del 2019, con 200 kilómetros, cuyo precio es 150000, disponible en 12 cuotas, con la patente APL123 que no está vendido.
// El segundo auto es un Toyota Corolla Blanco, del 2019, 0 kilómetros, cuyo precio es 100000, disponible en 14 cuotas, con la patente JJK116 que no está vendido.
// Cada auto debe tener los siguientes atributos: marca, modelo, precio, km, color, cuotas, anio, patente, vendido.

let autos = [
    {
        marca : "Ford",
        modelo : "Fiesta",
        color : "Azul",
        anio : 2019,
        km : 200,
        precio : 150000,
        cuotas : 12,
        patente : "APL123",
        vendido : false
    },

    {
        marca : "Toyota",
        modelo : "Corolla",
        color : "Blanco",
        anio : 2019,
        km : 0,
        precio : 100000,
        cuotas : 14,
        patente : "JJK116",
        vendido : false
    }
]

module.exports = autos;