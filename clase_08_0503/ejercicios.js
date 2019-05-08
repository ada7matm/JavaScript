/*
EJERCICIO 1
Hacer un programa que juzgue los gustos. 
Debe pedir al usuario que ingrese su preferido de algo 
(helados, comida, música, animales, películas de Disney, etc) 
y en base a eso decirle que tan buen gusto tiene
*/

// let gusto = prompt(`Elegí alguna de tooodas estas opciones y te recomendamos dónde comer este finde:
//                     pasta, vino, volcán de chocolate, asado, fernet, flan con dulce de leche, empandas, cerveza, helado`); 

// let resultadoGourmet = gusto === "pasta" ||
//                        gusto === "vino" ||
//                        gusto === "volcán de chocolate";

// let resultadoRustico = gusto === "asado" ||
//                        gusto  === "fernet" ||
//                        gusto  === "flan con dulce de leche";

// let resultadoArgentino = gusto === "empanadas"||
//                          gusto === "cerveza"||  
//                          gusto === "helado";                     

// if (resultadoGourmet){
//     alert("Tenés un gusto sofisticado. Te recomendamos visitar: Campo Di Fiori, Sarkis, Niño Gordo");
// } else if (resultadoRustico){
//     alert("Tenés un gusto rústico pero clásico: Te recomendamos visitar: La Hormiga, La Esquina del Antigourmet o juntarte con amigos y prender el fuego!");
// } else if (resultadoArgentino){
//     alert("A vos cualquier pizzería te viene bien: Guerrín, El Imperio, o a amasa y hacer una pizzas a la parri!");
// } else {
//     alert("Le pifiaste a algo, volvé a intentarlo!");
// }


/*
EJERCICIO 2
Hacer un programa que te pida adivinar los ingredientes de un trago (3 o 4). 
Nos tiene que pedir ingresar los ingredientes de a uno, y no debe importar el orden en que se ingresan.
*/

alert("ingrese los ingredientes del mojito");

let ingrediente1 = prompt("ingrese una ingrediente")
ingrediente1 = ingrediente1.toLocaleLowerCase();
let ingrediente2 = prompt("ingrese un ingrediente")
ingrediente2 = ingrediente2.toLocaleLowerCase();
let ingrediente3 = prompt("ingrese un ingrediente")
ingrediente3 = ingrediente3.toLocaleLowerCase();

let respuesta1 = ingrediente1 === "menta" ||
                 ingrediente1 === "ron blanco" ||
                 ingrediente1 === "lima";

let respuesta2 = ingrediente2 === "menta" ||
                 ingrediente2 === "ron blanco" ||
                 ingrediente2 === "lima";

let respuesta3 = ingrediente3 === "menta" ||
                 ingrediente3 === "ron blanco" ||
                 ingrediente3 === "lima";

if (respuesta1 && 
    respuesta2 && 
    respuesta3 &&
    ingrediente1 !== ingrediente2 && 
    ingrediente2 !== ingrediente1 &&
    ingrediente3 !== (ingrediente1 && ingrediente2)) {
 alert ("Felicitaciones! Es un ebrio informado");
} else {
   alert("Es un ebrio desinformado");
}