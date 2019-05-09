/*
EJERCICIO 1
* Hacer un programa para llevar la cuenta
del puntaje de un partido de tenis.
El programa debe pedir inicialmente por 
los nombres de las dos jugadoras, y luego
ir pidiendo los nombres de quien va ganando
cada set, y mostrando el puntaje actualizado.
Si alguna de las dos llega a 3 puntos, el programa
debe terminar y anunciar la ganadora. p. ej.

    * Ingrese el nombre de Jugadora 1:
        - Serena Williams
    * Ingrese el nombre de Jugadora 2:
        - Maria Sharapova
    * Quien gano el set?
        - Serena Williams

        - Puntaje:
            Serena Williams: 1
            Maria Sharapova: 0
    * Quien gano el set?
        ...
    * Partido Finalizado.
        Ganadora: Serena Williams
        Puntaje final:
            Serena Williams: 3
            Maria Sharapova: 1
*/

// let player1 = prompt("Ingrese el nombre de la jugadora 1."),
//     player2 = prompt("Ingrese el nombre de la jugadora 2.");

// let score1 = 0,
//     score2 = 0;

// while(score1 !== 3 && socore2 !== 3){
//     winner = prompt("¿Quién gano el set?")
//     if (winner === player1){
//         score1++
//     }else if(winner === player2){
//         socore2++
//     }
//     alert (`Puntaje parcial:

//     ${player1}: ${score1}
//     ${player2}: ${socore2}`);
// }
// if (score1 === 3){
//     alert (`La ganadora es:" ${player1}

//     Puntaje final:
//     ${player1} : ${score1} puntos.
//     ${player2} : ${socore2} puntos.`);
// }else {
//     alert (`La ganadora es:" ${player2}

//     Puntaje final:
//     ${player2} : ${socore2} puntos.
//     ${player1} : ${score1} puntos.`);
// }

/*
EJERCICIO 2
- Hacer un programa que nos ayude a organizar
el equipaje para nuestro viaje. Debe preguntar
cuantas valijas queremos armar, y por cada
valija, irnos preguntando cuantos items 
queremos agregar e ir pidiendonos ingresarlos
uno por uno. Debe ir mostrando el contenido
actualizado de las valijas cada vez que agregamos 
algo. p. ej.:

    - Cuantas valijas desea preparar? 3
    - Cuantos items desea agregar a la
    valija 1? 2
        Ingrese item para la valija 1: Medias
        Ingrese item para la valija 1: Remeras
    - Cuantos items desea agregar a la
    valija 2? 3
        ....
    - Cuantos items desea agregar a la
    valija 3? 1
        ....

    - Valija 1:
        * Medias
        * Remeras
    - Valija 2:
        * Libros
        * Camperas
        ...

* Pedir por la cantidad de valijas
y guardarlo en una variable
* Armar un bucle con la cantidad de valijas
* Por cada vuelta del bucle de cantidad de valijas,
pedir cuantos elementos queremos agregar y
armar un bucle interno con esas cantidad
* Dentro del bucle interno, pedir por el item
y concatenar el item agregado a la lista
*/

let suitcaseQtt = prompt(`Cuantas valijas desea preparar?`);
let list = "";

for (let i = 1; i <= suitcaseQtt; i++) {
  let itemsQtt = prompt(`Cuantos elementos desea llevar la valija ${i}?`);
  list += `\n Valija ${i}:`;
  for (let j = 0; j < itemsQtt; j++) {
    let items = prompt(`Que items desea agregar?`);
    list += `\n* ${items}`;
    alert(list);
  }
}
