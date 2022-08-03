function auto(marca, modelo, precio, km, color, cuotas, anio, patente, vendido){
    this.marca=marca;
    this.modelo=modelo;
    this.precio=precio;
    this.km=km;
    this.color=color;
    this.cuotas=cuotas;
    this.anio=anio;
    this.patente=patente;
    this.vendido=vendido;
};

let autos = [];
let auto1 = new auto("Ford", "Fiesta", 150000, 200, "Azul", 12, 2019, "APL123", false);
let auto2 = new auto("Toyota", "Corolla", 100000, 0, "Blanco", 14, 2019, "JJK116", false);
autos.push(auto1, auto2);


module.exports = autos;


// Aqui tenemos la forma normal de crear un objeto conocida como object literal

const producto1 ={
    nombre:"Monitor de 24",
    disponible:true,
    valor:"300 Usd",
};

// Object constructor es una manera de crear objetos mas facilmente

function producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

// Como se puede ver en el ejemplo anterior vamos a usar una funcion para la creacion de objetos y para definir la funcion de los objetos dentro de esta funcion vamos a usar el metodo this. y tambien los : se sustituyen por =.

// Para llamar la funcion y crear el objeto usaremos el siguiente metodo.

const producto2 = new producto("Monitor 24 ", "500 Usd");

console.log(producto2);