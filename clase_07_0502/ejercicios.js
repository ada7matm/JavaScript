/*
EJERCICIO 1
Hacer un programa que permita cambiar la contraseña de usuario. 
Para eso tiene que responder las tres preguntas de seguridad.
Si las tres preguntas son respondidas correctamente, tiene que pedir 
por la nueva contraseña y luego mostrar un mensaje que fue cambiada.
En caso de que al menos alguna pregunta fue respondida incorrectamente 
debe mostrar un mensaje advirtiendolo.
*/

// alert("¡Vamos a cambiar tu contraseña si respondes bien estas 3 preguntas!");

// let pregunta1 = prompt ("Ingrese mes actual");
// let pregunta2 = prompt ("Ingrese año actual");
// let pregunta3 = prompt ("Ingrese el pais donde reside ")

// let respuestaCorrecta1 = pregunta1 === "mayo";
// let respuestaCorrecta2 = pregunta2 === "2019";
// let respuestaCorrecta3 = pregunta3 === "argentina";
// let resultado = respuestaCorrecta1 && respuestaCorrecta2 && respuestaCorrecta3;

// if (resultado){
// prompt ("Ingrese su nueva contraseña")
// alert ("Su contraeña se cambio exitosamente")
// }
// else {
// alert ("Usted respondio mal alguna de las preguntas ")
// }

/*
EJERCICIO 2
Hacer un programa que pida por el mes y 
devuelva la cantidad de dias que tiene usando el operador OR (||) 
*/

let mes = prompt ("Ingrese el mes");

let resultado1 = mes === "enero" || 
                mes === "marzo" ||
                mes === "mayo" ||
                mes === "julio" ||
                mes === "agosto" ||
                mes === "octubre" ||
                mes === "diciembre";

let resultado2 = mes === "abril" || 
                 mes === "junio" ||
                 mes === "septiembre" ||
                 mes === "noviembre";

let resultado3 = mes === "febrero";

if (resultado1) {
    alert ("Este mes tiene 31 dias");
}
else if (resultado2) {
    alert ("Este mes tiene 30 dias");
}
else if (resultado3) {
    alert ("Este mes tiene 28 dias");
}
else{
    alert("Ese mes no existe")};