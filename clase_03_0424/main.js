/**
 * EJERCICIO 1
 * 
 */


// let walking = 10,
//     bicycle = 5,
//     motorcycle = 2,
//     bus = 4,
//     train = 3;

// let distance = prompt('Por favor ingrese la distancia de su recorrido');

// let message = `Caminando tardarás ${distance / walking} horas.
// En bicicleta tardarás ${distance / bicycle} hroas.
// En moto tardarás ${distance / motorcycle} horas.
// En colectivo tardarás ${distance / bus} horas.
// En tren tardarás ${distance / train} horas.`;

// alert(message);

/*
* EJERCICIO 2
* Crear un programa que pida al usuario cuanto dinero le queda, y vaya preguntandole cuanto tiene que pagar por cada 
servicio, preguntando por el nombre del servicio y el monto a pagar, uno a la vez.Cada vez que pide para ingresar 
un nuevo servicio, debe mostrar cuantos servicios quedan por ingresar, utilizando una variable, y mostrar cuanto 
dinero queda disponible. Al final debe mostrar una lista con los servicios a pagar y el monto de cada uno de ellos, 
además del dinero que va a quedar luego de pagar los servicios.Por ejemplo:
*/

let dinero = prompt('Ingrese su dinero disponible');
let servicios = 4;

alert(`Su saldo es de $${dinero}.
Servicios a pagar: ${servicios}`);

let edenor = prompt('Edenor. \nPor favor ingrese el monto a pagar');
dinero = dinero - edenor;
servicios = servicios - 1;
alert(`Su saldo es de $${dinero}.
Servicios a pagar: ${servicios}`)

let aysa = prompt('Aysa. \nPor favor ingrese el monto a pagar');
dinero = dinero - aysa;
servicios = servicios - 1;
alert(`Su saldo es de $${dinero}.
Servicios a pagar: ${servicios}`)

let metrogas = prompt('Metrogas. \nPor favor ingrese el monto a pagar');
dinero = dinero - metrogas;
servicios = servicios - 1;
alert(`Su saldo es de $${dinero}.
Servicios a pagar: ${servicios}`)