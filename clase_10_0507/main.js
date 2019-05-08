// SWITCH

// let estacion = prompt("Ingrese una estacion");
////CON IF & IF ELSE
// if (estacion === "verano") {
//    alert("Del 21 de diciembre al 21 de marzo");
// } else if (estacion === "otoño" && year === 2019) {
//    alert("Del 21 de marzo al 21 de junio");
// } else if (estacion === "invierno") {
//    alert("Del 21 de junio al 21 de septiembre");
// } else if (estacion === "primavera") {
//    alert("Del 21 de septiembre al 21 de diciembre");
// } else {
//    alert("Eso no es una estacion");
// }

// //CON SWITCH
// switch(estacion) { /*estacion es la expresión/variable a comparar */
//    case "otoño": /*case va a ser el valor con el que queremos comparar nuestra variable */  
//       alert("Del 21 de marzo al 21 de junio"); /*acción que se ejecuta cuando la comparación es true*/
//       break; /*esta setencia finaliza la acción ejecutada. si la comparación es false, pasa al diguiente case.*/
//    case "winter":
//    case "invierno":                           
//       alert("Del 21 de junio al 21 de septiembre");
//       break;
//    case "spring":
//    case "primavera":
//       alert("Del 21 de septiembre al 21 de diciembre");
//       break;
//    case "summer":
//    case "verano":
//       alert("Del 21 de diciembre al 21 de marzo");
//       break;
//    default: /*si ninguna de las comparaciones es true, se ejecuta el bloque default, como else*/
//       alert("Eso no es una estacion");                  
// }
// alert("Fin del programa");

// BUCLES

let mensaje = `Los colores que ha ingresado son:`;

for(let i = 0; i < 6; i++) {
   let color = prompt("Ingrese un color");
   mensaje += `\n ${color}`;
   alert(mensaje);
}
alert("Gracias por agregar colores");