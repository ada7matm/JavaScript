// let objeto = {
//     atributo: valor,
//     atributo2: valor2
// }
// key/value

let rankings = [{
    username: "ailen",
    puntos: 44
}, {
    username: "sabri",
    puntos: 34
}, {
    username: "pablo",
    puntos: 23
}]

for(let i = 0; i < rankings.length; i++) {
    console.log(rankings[i].username);
}

let texto = "Cual es la capital de Francia?";

let pregunta = {
    question: texto,
    answers: [
        "Buenos Aires",
        "Paris",
        "Barcelona",
        "Londres"
    ],
    category: "geografia",
    answer: "Paris",
    likes: 4 
}

let container = document.getElementById("container");

console.log(pregunta.answers[2])

container.innerHTML = `<h1>${pregunta.question}</h1>`

for(let i = 0; i < pregunta.answers.length; i++) {
    container.innerHTML += `<div class="button">${pregunta.answers[i]}</div>`
}

let persona = {
    pelo: "naranja",
    nombre: "mili",
    edad: 20,
    tieneLentes: true
}

let nombre = persona.nombre;
let edad = persona.edad;

// console.log(persona["nombre"]);
// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.pelo);

persona.pelo = "azul";
persona.altura = "1.50m";

delete persona.pelo; 

// console.log(persona);

// para acceder a una propiedad
// de un objeto usamos
// objeto.propiedad


// para cambiar una propiedad
// de un objeto usamos
// objeto.propiedad = valor