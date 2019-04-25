/* 
Hacer un programa que tome la orden de compra de un negocio.
* Debe tener guardado el nombre del negocio en una variable y mostrarlo
en un msj de bienvenida al principio.
* Debe preguntar por las cantidades de compra de 3 productos distintos.
* Debe mostrar el precio final de la compra.
* Debe preguntar en cuantas cuotas se quiere pagar y debe mostrar un mensaje
con la cantidad de cuotas a pagar y el valor de cada una de ellas.
*/

let marketName = "mandalefruta.com";
alert('Biendvenide a ' + marketName + ' 🙃');

let applePrice = 2,
    orangePrice = 3,
    cherryPrice = 4;

let appleQnt = prompt("Cantidad de manzanas:"),
    orangeQnt = prompt("Cantidad de naranjas:"),
    cherryQnt = prompt("Cantidad de cerezas:");

let total = (appleQnt * applePrice) + (orangeQnt * orangePrice) + (cherryQnt * cherryPrice);
let result = alert("El total a pagar es $" + total);

let instalments = prompt("¿En cuántas cuotas desea realizar su pago?"),
    instalmentsValue = total / instalments;


alert("Manzanas: $" + appleQnt * applePrice +
    "\nNaranjas: $" + orangeQnt * orangePrice +
    "\nCerezas: $" + cherryQnt * cherryPrice +
    "\nTotal a pagar: $" + total + " en " + instalments + " cuotas de $" + instalmentsValue +
    "\n💸💸💸💸💸💸💸");