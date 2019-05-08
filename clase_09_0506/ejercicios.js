/* * Hacer un programa que pida por el mes y el dia de nacimiento, y te devuelva
tu signo de zodiaco
*/

// let mes = prompt("Ingrese el mes");
// mes = mes.toLowerCase();
// let dia = prompt("Ingrese el dia de su nacimiento");

// if ((mes === "marzo" && dia >= 21 && dia <= 31) ||
//     (mes === "abril" && dia >= 1 && dia <= 20)) {

//         alert("Tu signo es Aries ♈");

// } else if ((mes === "abril" && dia >= 21 && dia <= 31) ||
//     (mes === "mayo" && dia >= 1 && dia <= 20)) {

//         alert("Tu signo es Tauro ♉");

// } else if ((mes === "mayo" && dia >= 21 && dia <= 31) ||
//     (mes === "junio" && dia >= 1 && dia <= 20)) {

//         alert("Tu signo es Geminis♊");

// } else if ((mes === "junio" && dia >= 21 && dia <= 31) ||
//     (mes === "julio" && dia >= 1 && dia <= 20)) {

//         alert("Tu signo es Cancer ♋");

// } else if ((mes === "julio" && dia >= 21 && dia <= 31) ||
//     (mes === "agosto" && dia >= 1 && dia <= 20)) {
        
//         alert("Tu signo es Leo ♌");

// } else if ((mes === "agosto" && dia >= 21 && dia <= 31) ||
//     (mes === "septiembre" && dia >= 1 && dia <= 20)) {
        
//         alert("Tu signo es Virgo ♍");

// } else if ((mes === "septiembre" && dia >= 21 && dia <= 31) ||
//     (mes === "octubre" && dia >= 1 && dia <= 20)) {
  
//         alert("Tu signo es Libra ♎");

// } else if ((mes === "octubre" && dia >= 21 && dia <= 31) ||
//     (mes === "noviembre" && dia >= 1 && dia <= 20)) {
  
//         alert("Tu signo es Escorpio ♏");

// } else if ((mes === "noviembre" && dia >= 21 && dia <= 31) ||
//     (mes === "diciembre" && dia >= 1 && dia <= 20)) {
  
//         alert("Tu signo es Sagitario ♐");

// } else if ((mes === "diciembre" && dia >= 21 && dia <= 31) ||
//     (mes === "enero" && dia >= 1 && dia <= 20)) {
  
//         alert("Tu signo es Capricornio ♑");

// } else if ((mes === "enero" && dia >= 21 && dia <= 31) ||
//     (mes === "febrero" && dia >= 1 && dia <= 20)) {
  
//         alert("Tu signo es Acuario ♒");

// } else if ((mes === "febrero" && dia >= 21 && dia <= 31) ||
//     (mes === "marzo" && dia >= 1 && dia <= 20)) {
  
//         alert("Tu signo es Piscis ♓");

// } else {
//     alert("La fecha ingresada no es válida")
// }


/*
* Hacer un sistema para una tienda de ropa. 
* El sistema debe anunciar inicialmente cuatro ofertas disponibles, algunas de las cuales 
deben depender del medio de pago y la tarjeta.
* El descuento es el mismo para todas las ofertas (p.ej.: 20%). 
* Luego, debe preguntar al usuario cuantas cantidades de distintos productos (tres o cuatro) 
desea llevar, con que medio de pago desea realizarlo, y si es y con tarjeta, 
qué tarjeta y en cuantas cuotas. 
* Luego, debe mostrar el resultado de la compra, y si aplica el descuento, indicarlo 
mostrando en cuánto le queda.
* Si paga con tarjeta, dependiendo de la tarjeta y de la cantidad de cuotas, hay que aplicar
un interés, p.ej ("Mastercard con más de 3 cuotas, 5% de interes").
    - Declarar los precios de los productos en variables
    - Mostrar un cartel de bienvenida con los descuentos disponibles, p.ej:
        * "Llevando 3 pantalones y pagando con MasterCard en 3 cuotas"
        * "Llevando 2 pantalones y una remera"
        * "Llevando 3 remeras y pagando en efectivo"
    - Preguntar con un prompt por las cantidades de cada uno de los productos 
    y guardarlos en variables
    - Preguntar por el método de pago, si es con tarjeta, preguntar qué tarjeta 
    y en cuantas cuotas desea realizarlo, y guardar estos datos en variables
    - Chequear todas las condiciones para ver si algún descuento aplica, si lo hace
    guardar el nuevo precio en un variable
    - Chequear si aplica interés, si aplica, calcularlo y guardar el valor final 
    en otra variable
    - Mostrar un resumen de la compra, la cantidad de productos y los subtotales ("3 pantalones: $450"),
    el total inicial, el total con el descuento si aplica, el total con el interes si aplica, y el valor de cada 
    cuota, p.ej:
        
            "Gracias por comprar en nuestra tienda. El resumen de su compra es:
                - 3 jeans: $2800
                - 2 remeras: $900
                - 1 campera: $1800
                
                - Total: $5500
                - Descuento 10%: $550
                - Total: $4950
                - Metodo de Pago: Visa
                - Cantidad de cuotas: 6
                - Interes: 5%
                - Total a pagar: 6 cuotas de $866.25"
*/
alert(`Bienvenidos a nuestra tienda online. Esta semana 20% de descuento en los siguientes productos y medios de pago:
Llevando 3 remeras pagando en efectivo.
Llevando 2 remeras, 1 pollera y 1 pantalón pagando con Visa en 6 cuotas.
Llevando 2 o más camperas pagando con MasterCard en 3 cuotas.
Llevando 2 o más pantalones pagando en efectivo.`)

let shirts = parseInt(prompt('¿Cuántas remeras desea llevar?'));
let skirts = parseInt(prompt('¿Cuántas polleras desea llevar?'));
let trousers = parseInt(prompt('¿Cuántos pantalones desea llevar?'));
let jackets = parseInt(prompt('¿Cuántas camperas desea llevar?'));

let shirtValue = 500;
let skirtValue = 700;
let trousersValue = 1100;
let jacketValue = 1500;

let shirtsTotal = shirtValue * shirts;
let skirtsTotal = skirtValue * skirts;
let trousersTotal = trousersValue * trousers;
let jacketsTotal = jacketValue * jackets;
let clothesTotal = jacketsTotal + trousersTotal + skirtsTotal + shirtsTotal;
let discount = 0;
let interest = 0;

let payment = prompt('¿Desea pagar en efectivo o tarjeta?');
    payment = payment.toLowerCase();

if (payment === 'tarjeta') {
    let card = prompt(`Elija una de las siguientes tarjetas:
    * Visa
    * MasterCard`);
        card = card.toLowerCase();
    let cuotas = parseInt(prompt('Seleccione la cantidad de cuotas: 3, 6 o 12.'));
    if ((card === 'visa' && shirts === 2 && skirts === 1 && trousers === 1 && cuotas === 6)||
        (card === 'mastercard' && jackets >=2 && cuotas === 3)){
    discount = 20 * clothesTotal / 100
    } 
    if (card === 'visa') {
        if (cuotas === 3) {
            interest = 5 * clothesTotal / 100
        } else if (cuotas === 6) {
            interest = 12 * clothesTotal / 100
        } else if (cuotas === 12) {
            interest = 17 * clothesTotal / 100
        } else {
            alert('Ese no es un número válido de cuotas.')
        }
    } else if (card === 'mastercard') {
        if (cuotas === 3) {
            interest = 8 * clothesTotal / 100
        } else if (cuotas === 6) {
            interest = 16 * clothesTotal / 100
        } else if (cuotas === 12) {
            interest = 22 * clothesTotal / 100
        } else {
            alert('Ese no es un número válido de cuotas.')
        }
    } else {
        alert('Esa no es una tarjeta válida.')
    }
    alert(`Gracias por elegirnos. Su compra:
    * ${shirts} remeras = $${shirtsTotal}
    * ${skirts} polleras = $${skirtsTotal}
    * ${trousers} pantalones = $${trousersTotal}
    * ${jackets} camperas = $${jacketsTotal}
    * Total = $${clothesTotal}
    * Tarjeta = ${card}
    * Cuotas = ${cuotas}
    * Descuento = $${discount}
    * Interés = $${interest}
    * Total actualizado = $${clothesTotal - discount + interest}
    * Valor de cada cuota = $${(clothesTotal - discount + interest) / cuotas}`)
} else if (payment === 'efectivo') {
    if (trousers >= 2 ||
        shirts === 3) {
    discount = 20 * clothesTotal / 100
    }
    alert(`Gracias por elegirnos. Su compra:
    * ${shirts} remeras = $${shirtsTotal}
    * ${skirts} polleras = $${skirtsTotal}
    * ${trousers} pantalones = $${trousersTotal}
    * ${jackets} camperas = $${jacketsTotal}
    * Total = $${clothesTotal}
    * Descuento = $${discount}
    * Total actualizado = $${clothesTotal - discount}`)
}