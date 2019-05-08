/*
EJERCICIO 1
Hacer un programa que sea un mini editor de texto. El programa debe
inicialmente pedir para ingresar un texto, luego debe preguntar qué es lo que queremos hacer. Opciones:
    * "duplicar": duplicar el texto
    * "agregar": agregar texto
    * "mayusculas": poner todo el texto a mayusculas
    * "minusculas": poner todo el texto en minusculas
    * "contar": mostrar cuantos caracteres tiene el texto

Al final debe mostrar el texto modificado
*/

// let text = prompt("ingrese un texto")
// let options = prompt(`¿Qué acción desea realizar?
// * duplicar el texto (1)
// * agregar texto (2)
// * pasar el texto a mayúsculas (3)
// * pasar el texto a minúsculas (4)
// * contar la cantidad de caracteres (5)`)

// switch(options){
//     case "1":
//         alert(text + text);
//         break;

//     case "2":
//         let moreText = prompt(`${text}`)
//         alert(text + moreText);
//         break

//     case "3":
//         alert(text.toUpperCase());
//         break;

//     case "4":
//         alert(text.toLowerCase());
//         break;

//     case"5":
//         alert(`${text} tiene ${text.length} caracteres.`);
//         break;

//     default:
//         alert("La opción ingresada no es válida.")
// }

/*
EJERCICIO 2
* Hacer un programa para una heladeria
que pregunte cuantos kilos vamos a llevar
y dependiendo de la cantidad que llevemos
nos va a tener que pedir distintas cantidades de sabores,
pidiendonos un sabor a la vez y mostrando los sabores que 
vayamos eligiendo

    - 1/4 kg: 2 sabores
    - 1/2 kg: 3 sabores
    - 3/4 kg: 4 sabores
    - 1 kg: 5 sabores

Restriccion: usar un solo bucle for
*/

let kilograms = prompt(`cantidad de helado:
* 1/4 kg
* 1/2 kg
* 3/4 kg
* 1 kg`);

let flavorsQtt; 

switch(kilograms){
    case "1/4":
        flavorsQtt = 2;
        break;
    case "1/2":
        flavorsQtt = 3;
        break;
    case "3/4":
        flavorsQtt = 4;
        break;
    case "1":
        flavorsQtt = 5;
        break;
    default:
        alert("La opción ingresada no es válida");
}
alert(`Podes elegir ${flavorsQtt} sabores`)


let orderDetail = (`Detalle de la compra:
${kilograms} kg.
Sabores:`)

for(let i = 0; i < flavorsQtt; i++){
    let flavors = prompt("¿Qué sabores desea agregar a su pedido?")
    orderDetail += `\n - ${flavors}`
}
alert(orderDetail)