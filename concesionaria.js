// ******************* PUNTO 2 **************

// Ahora que tenemos creada nuestra lista de autos y definida la manera de representar nuestra concesionaria, necesitamos crearla. El objeto concesionaria va a conocer a todos los autos y va disponer de las funcionalidades de buscarlos y venderlos. Pero para no entrar en demasiado detalle, María propone trabajar en tres etapas y en cada una agregar valor. Respondé a las necesidades de cada etapa.

// *************** ETAPA 1************

// En esta primera etapa, necesitamos requerir tu módulo autos que se encuentra en la misma carpeta del archivo donde estás trabajando.

// Además, necesitarás crear un objeto literal llamado concesionaria que contendrá todas las funcionalidades que el cliente solicita.

// Por último, nuestro objeto literal debe tener un atributo llamado autos que contenga la lista de automóviles importada anteriormente.

const autos = require("./autos");
const compradores = require("./compradores");

const concesionaria = {
    autos : autos,
    compradores : compradores,

// *************** ETAPA 2 ********

// Ahora que la concesionaria tiene los autos, es posible crear la funcionalidad buscarAuto que reciba por parámetro la patente y devuelva el auto al cual le corresponde. En caso de no encontrar el mismo, deberá retornar null.

    buscarAuto : function (patente) {
        return autos.find(auto => {
            if(auto.patente === patente){
                return auto;
            }else{
                return null;
            }
        }); 
    },

// *************** ETAPA 3 ********

// Ahora, María les pide que agreguen la funcionalidad de venderAuto que recibe la patente y, en caso de encontrar al automóvil, le asigna el estado de vendido.

// ¿Cómo lo resuelven?

// Para resolver esta nueva funcionalidad, tendrás que utilizar la función buscarAuto.

    venderAuto: function(patente){
        const automovil = this.buscarAuto(patente);
            if(automovil){
                automovil.vendido = true;
        }
    },

// *************** FUNCIONALIDAD EXTRA *********

// La primera es poder contar, como concesionaria, con la habilidad de poder tener la lista de autos para la venta. A lo cual, María, cree que es una tarea sencilla que Juan y vos pueden encarar solos, usando la función autosParaLaVenta, aunque por las dudas ella les recuerda que no deberían de aparecer los autos que ya fueron vendidos.

// Para comenzar, tenés que agregar el código que escribiste en el ejercicio anterior. Tené en cuenta que estamos optimizando nuestro código, por lo cual, deberíamos utilizar el método filter.

    autosParaLaVenta: function(){ 
        return autos.filter(auto => !auto["vendido"])
    },

// *************** UNA NUEVA FUNCIONALIDAD EXTRA ************

// María, contenta con el trabajo que realizaron, les pide otra funcionalidad extra. Resulta que a la concesionaria le suelen preguntar muy seguido cuáles de los autos para la venta son 0 km. Tené en cuenta que María considera que un auto 0 km es aquel que tenga un kilometraje menor a 100. Vas a tener que desarrollar la funcionalidad autosNuevos.

// ¿Cómo podés resolver esto reutilizando la función autosParaLaVenta? 

    autosNuevos : function (){ 
        return this.autosParaLaVenta().filter(auto => auto.km < 100);
    },

// *************** MÁS FUNCIONALIDADES **********

// El cliente le pidió saber cuánto dinero generaron las ventas.

// María te pide que completes la función listaDeVentas que devuelve una lista que contiene el precio de venta de cada auto vendido. A esto, Juan, que está al lado tuyo, se le escapa la frase "mmm.....estoy seguro que alguna función de arrays nos va a servir, pero no me acuerdo".

    listaDeVentas: function () {
        let ventas = this.autos.filter(function (patente) {
            return patente.vendido === true
        });
        let lista = [];
        ventas.forEach(function (valor) {
            lista.push(valor.precio);
        })
        return lista;
    },

// *************** TOTAL DE VENTAS *************

// Terminada esta función, María te pide que resuelvas la funcionalidad de totalDeVentas, que justamente nos devuelva la sumatoria del valor de todas las ventas realizadas. Acá el único requerimiento técnico explícito es que utilices la función reduce,

    totalDeVentas : function(){
        return this.listaDeVentas().reduce(function(accu, auto){
            return accu + auto;
        }, 0)
    },

// *************** AGREGAR FUNCIONALIDADES ********

// Muy contento el equipo por cómo viene el desarrollo, por la tarde, María te comenta que se agrega una funcionalidad muy importante: la de verificar si una persona puede comprar o no un auto. Esta permite al sistema definir si una persona al consultar por un auto, puede comprarlo. Las personas solo sacan los autos en cuotas y tomando dos factores como condición de compra. Una es el costo total: si el total de un auto excede lo que la persona considera caro, no va a comprar el auto. Otra condición es su capacidad de pago en cuotas: si la capacidad de pago en cuotas supera al costo de la cuota, va a poder pagarlo. Si ambas condiciones se cumplen, se realiza la compra.

// Es por esto que María te pide que desarrolles la función puedeComprar que reciba por parámetro un auto y una persona y devuelva true si la misma puede comprar el auto.

// Una persona va a ser representada mediante un objeto literal de la siguiente forma:

// {
// nombre: “Juan”,
// capacidadDePagoEnCuotas: 20000,
// capacidadDePagoTotal: 100000
// }

    puedeComprar: function(auto,persona){
        return (auto.precio < persona.capacidadDePagoTotal)&&  ((auto.precio/auto.cuotas) < persona.capacidadDePagoEnCuotas)
    }, 

// Ahora, te comprometiste a realizarla. Así que manos a la obra. Hay que escribir la función autosQuePuedeComprar, que recibe una persona y devuelve la lista de autos que puede comprar.

// La función debe de realizar los siguientes pasos:

// 1) Obtener los autos para la venta

// 2) Por cada uno de los autos debe de probar si la persona puede comprarlo, ¿ya hay alguna funcionalidad que me permita hacer esto?.

// 3) Luego debemos retornar los que pueda comprar, ¿hay alguna manera de poder filtrar la lista de autos para la venta del punto 1 con el paso 2?

    autosQuePuedeComprar: function (persona){
    let array = this.autos.map(auto => this.puedeComprar(auto,persona)==true?auto:0)
        for (i=0;i<array.length;i++){
            if (array[i]==0){
                array.splice(i,1)
            }
        }
        return array
    }  
};

// *************** PROBANDO EL CÓDIGO *************

console.log("Vehículo APL123 antes de hacer la venta:");
console.log(concesionaria.buscarAuto("APL123"));
console.log("Se realiza la venta del vehículo");
concesionaria.venderAuto("APL123");
console.log("Vehículo APL123 después de hacer la venta:");
console.log(concesionaria.buscarAuto("APL123"));
console.log("******************* EJECUTANDOSE autosParaLaVenta **********************");
console.log(concesionaria.autosParaLaVenta());
console.log("******************* EJECUTANDOSE autosNuevos *******");
console.log(concesionaria.autosNuevos());
console.log("******************* EJECUTANDOSE listaDeVentas *******");
console.log(concesionaria.listaDeVentas());
console.log("******************* EJECUTANDOSE totalDeVentas ************");
console.log(concesionaria.totalDeVentas());
console.log("******************* EJECUTANDOSE puedeComprar ************");
console.log(concesionaria.puedeComprar());
console.log("******************* EJECUTANDOSE autosQuePuedeComprar ************");
console.log(concesionaria.autosQuePuedeComprar());

