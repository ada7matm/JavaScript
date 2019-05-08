/*
EJERCICIO 1
Crear un programa que pida usuario y contraseña y muestre los mensajes correspondientes si alguno de esos datos
son incorrectos, y de un bienvenida si ambos lo son.
Para eso vamos a guardar en dos variables el usuario y la contraseña,
    Pedimos el usuario
Si el usuario es incorrecto mostramos un mensaje
Si el usuario es correcto pedimos la contraseña
Si la contraseña es incorrecta mostramos un mensaje
Si la contraseña es correcta avisamos que el login fue exitoso
*/

// let user = 'ada',
//     password = 'ada2019';

// let userInput = prompt('Por favor ingrese su usario');

// if(userInput === user){
//     let passwordInput = prompt('Por favor ingrese su contraseña');

//     if(passwordInput !== password){
//         alert('Contraseña incorrecta')
//     }else{
//         alert('Bienvenide, '+ user)
//     }
// }else{
//     alert('Usuario incorrecto')
// }

/*
EJERCICIO 2
Hacer un programa de preguntas y respuestas (3 preguntas). Debe ir mostrando las
preguntas de a una, si una pregunta es correcta, debe mostrar la siguiente,
si es incorrecta, debe terminar el juego.
*/

// let question = prompt('¿Cuál es la ciudad más poblada del mundo?')
// question = question.toLowerCase();

// if(question === 'tokio'){
//     alert('Respuesta correcta.')
//     question = prompt('¿De qué país son originarios los juegos olímpicos?');
//     question = question.toLowerCase();

//     if(question === 'grecia'){
//         alert('Respuesta correcta.')
//         question = prompt('¿Quién escribió La Odisea?');
//         question = question.toLowerCase();

//         if(question === 'homero'){
//             alert('Respuesta correcta.\n¡Ganaste!')
//         } else {
//             alert('Respuesta incorrecta. Perdiste.')
//         }
//     } else {
//         alert('Respuesta incorrecta. Perdiste.')
//     }
// }else{
//     alert('Respuesta incorrecta. Perdiste.')
// }

/*
EJERCICIO 3
Hacer un programa que pida cuantos kilometros se desea recorrer, y dependiendo de la distancia sugiera en que medio
de transporte es mas conveniente para recorrerlo:
   * a pie
   * en bici
   * en auto
   * en colectivo
   * en avion
*/

let distance = prompt('¿Cuántos kilómetros desea recorrer?');

if (distance >= 1500) {
    alert('Se sugiere hacer el recorrido en avión');
} else if (distance >= 20) {
    alert('Se sugiere hacer el recorrido en auto');
} else if (distance >= 10) {
    alert('Se sugiere hacer el recorrido en bondi');
} else if (distance >= 2) {
    alert('Se sugiere hacer el recorrido en bicicleta');
} else{
    alert('Se sugiere hacer el recorrido a pie');
}