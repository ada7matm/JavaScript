/*
EJERCICIO 1
Hacer un programa que muestre información de reserva turística. Inicialmente, debe mostrar los siguientes valores:
    * Destino turístico
    * Cantidad de días de hospedaje
    * Cantidad de personas que viajan
    * Total del viaje: que se calcula a partir de un costo inicial por día por persona en el destino, multiplicado por la cantidad de días y personas
A continuación, debe preguntar si se desea modificar algún valor, dando las opciones:
    * destino
    * días
    * personas
    * ninguno
Y en caso de que sea alguno de los 3 primeros, mostrar un cartel que permita ingresar un nuevo valor. 
Luego se muestra un mensaje con los valores y el precio final actualizado.
Para el caso del destino, dar 3 opciones posibles, si se elige una que no existe, informarlo con un mensaje.      
Cada destino debe tener un precio por dia por persona distinto.  
*/

// alert ("Bienvenido a Full Trip! A continuación le ofreceremos los distinos destinos turísticos que están en promoción. Aprovéchelos!");
// alert ("Oferta 1: Londres u$150 por persona \n"+ "Oferta 2: París u$130 por persona \n" + "Oferta 3: Barcelona u$100 por persona \n");
// let oferta = prompt ("Qué oferta le gustó más?: 1, 2 ó 3? ");
// let destino = "";
// let precio = 0;
// if (oferta === "1") {
//     destino = "Londres";
//     precio = 150;
// } else if (oferta === "2") {
//     destino = "París";
//     precio = 130;
// } else if (oferta === "3") {
//     destino = "Barcelona";
//     precio = 100;
// } else (oferta > 3) {
//     alert ("Ese destino no está en oferta.");
// }
// let dias = prompt ("Cuántos días desea hospedarse?");
// let pasajeros = prompt ("Cuántas persona viajan?");
// let pasaje = 1000;
// alert ("Desea modificar algún valor?: \n" + "*Destino, cantidad de días, ó pasajeros?");
// total = (precio*dias*pasajeros)+pasaje;
// alert(total);


/*
EJERCICIO 2
Hacer un programa informativo sobre algun tema, por ejemplo animales, ciudades, planetas, comidas, etc
que pida al usuario ingresar algun valor para obtener informacion, por ejemplo
"Bienvenida a la wiki sobre animales"
"Ingrese algun animal para obtener mas informacion sobre este"
Y dependiendo de la opcion que elija  (4 o 5 opciones), mostrar un cartel con informacion elegida
*/

let animal = prompt("Bienvenidos a la enciclopedia de animales. \n" + " sobre que animal le gsutaria recibir información: \n" + "Patos \n" + "Gatos \n" + "Elefantes");
if (animal === elefantes) {
    alert ("Son de la familia de mamiferos, pesan mas de 6000 kg y miden mas de 2,5 mtrs, tienen un promedio de vida de 48 años.");
} else if (animal === gatos) {
    alert ("Es un animal domestico, se comunica por el maullido y el ronroneo.");
} else if (animal === patos) {
    alert ("Pertenece a la familia de las aves, los hay domesticos o de granja y salvajes");
} else {
    alert ("disculpe no contamos con informacion sobre ese animal");
}