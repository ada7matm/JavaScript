// arreglos o arrays

let decadas = [1900, 1910, 1920, 1930, 1940];
let animales = ["gato", "perro", "vaca", "tortuga"];
let rankings = ["Pablo", "Sabri", "Meli", "Marian"];

// Para acceder a un elemento
// array[indice]

console.log(rankings);
console.log(rankings[2]);

// Para cambiar el valor de un elemento
// array[indice] = nuevoValor

// iterar / traverse

console.log(rankings);
console.log(rankings.length);

for(let i = 0; i < rankings.length; i++) {
    console.log(i);
    console.log(`i: ${i}, rankings[${i}]: ${rankings[i]}`)
}