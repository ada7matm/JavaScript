/*
EJERCICIO 1
Hacer un programa para guardar canciones en una playlist
Nos debe pedir inicialmente cuantas canciones queremos agregar
y luego nos debe ir pidiendo para agregar canciones de a una
mostrandonos la cantidad de canciones que nos quedan por agregar y mostrandonos
la playlist a medida que la vamos actualizando
*/

// let nombre = prompt("Ingrese un nombre para la playlist: ");
// let canciones = parseInt(prompt("Cuantas canciones desea agregar?"));
// let cancion = undefined;
// let mensaje  = (`Gracias por utilizar SpotifyPremium. Aqui va tu playlist ${nombre}: `);

// if(canciones !== 0){
//     for(let i = canciones; i > 0; i--){
//         alert(`Te quedan ${i} canciones para elegir`)
//         cancion = prompt("Ingrese la cancion");
//         mensaje += `\n •${cancion}`;
//     }
// }
// alert(mensaje);

/*
EJERCICIO 2
Hacer un cronometro para controlar las vueltas de una
deportista. Tiene que preguntar cuantas vueltas va a dar
e ir preguntando el tiempo en segundos de cada vuelta.
Al final, tiene que mostrar la lista con los tiempos de
cada vuelta y el promedio del tiempo de las vueltas.

   Cantidad de vueltas: 3
       vuelta 1: 133
       vuelta 2: 145
       vuelta 3: 166
       promedio: 144.45
*/

// let vueltas = parseInt(prompt (`Ingrese el numero de vueltas que desea contabilizar`));

// let mensaje = `El detalle de sus vueltas es el siguiente:`
// let tiempoTotal = 0

// for(let i = 0 ; i < vueltas ; i++){
//     let tiempo = parseInt(prompt(`Ingrese el tiempo en segundos que tardo en la vuelta`));   
//     mensaje += `\n -vuelta n° ${i+1} ${tiempo}`;
//     tiempoTotal = tiempoTotal + tiempo
// } 
// let promedio = tiempoTotal / vueltas
// alert (`${mensaje} 
// El promedio de sus vueltas es ${promedio}`);

/*
EJERCICIO 3
* Hacer un juego que nos pida adivinar 
un numero entre 0 y tanto, y avisarnos
si el numero que ingresamos es menor o mayor
al que tenemos que adivinar, o decirnos 
si adivinamos. El juego debe preguntarnos
todas las veces necesarias hasta que 
adivinemos.

    -Ingrese un numero: 5
    -El numero a adivinar es mas grande que 5
    -Ingrese un numero: 14
    -El numero a adivinar es mas chico que 14
    -Ingrese un numero: 11
    -Felicitaciones, adivinaste!
*/

let misteryNumber = 7;
let userNumber = parseInt(prompt("Ingrese un número"));

while(userNumber !== misteryNumber){
    if(userNumber < misteryNumber){
        userNumber = parseInt(prompt(`El número misterioso es mayor a ${userNumber}`));
    }else if(userNumber > misteryNumber){
        userNumber = parseInt(prompt(`El número misterioso es menor a ${userNumber}`));       
    }
}

if(userNumber === misteryNumber){
    alert(`Felicitaciones, adivinaste!
    El número misterioso es ${misteryNumber}.`)
}