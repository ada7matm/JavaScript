// let stannis = 20000,
//     robb = 30000,
//     jofrey = 40000,
//     renly = 25000,
//     balon = 15000;

// let resultado = robb > jofrey, //mayor que
//     resultado2 = stannis < renly, //menor que
//     resultado3 = robb >= renly, //mayor o igual
//     resultado4 = robb <= renly, //menor o igual
//     resultado5 = balon === jofrey, //igual que
//     resultado6 = balon !== jofrey; //dinstinto que
// console.log(resultado2);

/*****************************************************/
/*
//CONDICIONALES

let password = prompt('Ingrese su contraseña');

if (password === 'mypassword'){ //condición 
    alert('Su contraseña es correcta') //acción
}//si esta condicón no se cumple pasa a la siguiente

//siguiente condición
if (password !== 'mypassword'){
    alert('Su contraseña es incorrecta');
} 
*/

/*****************************************************/
/*
//EJERCICIO 1

// * Crear un programa que pida por una Casa de Game Of Thrones y 
// muestre un mensaje con el nombre dependiendo de cuál sea:
// *Stark: "Se acerca el invierno"
// *Lannister: "Oye mi rugido"
// *Targaryen: "Fuego y Sangre"
// *Baratheon: "Nuestra es la furia"


let house = prompt('Ingrese su casa de Game of Thrones');
house = house.toLowerCase(); //método que convierte el string en minúsculas

if (house === "stark"){
    alert('Se acerca el invierno');
}

if (house === "lannister") {
    alert('Oye mi rugido');
}

if (house === "targaryen") {
    alert('Fuego y Sangre');
}

if (house === "baratheon") {
    alert('nuestra es la furia');
}
*/

//EJERCICIO 2

/* 
Crear un programa que sea un cajero de un cine, e ir ofreciendo combos y productos mediante prompts.
Si el usuario responde si, ir actualizando el valor total en una variable. También ir actualizando 
una variable con la lista de productos escogidos y su precio, y mostrarla al final junto al total de la compra:
Por ejemplo:
¿Quiere pochoclos?
Si
Valor total: $200
¿Quiere chocolate?
No
Valor total: $200
¿Quiere gaseosa?
Si
Valor total: $350
Usted ha comprado:
* Pochoclos: $200
* Gaseosa: $150
Total: $350
Contraer
*/

alert("Bienvenide al Candybar");

let popcorn = prompt("¿Desea agregar pochoclos a su pedido por $300?\n(Si/No)");
popcorn = popcorn.toLowerCase();

let soda = prompt("¿Desea agregar gaseosa a su pedido por $100?\n(Si/No)");
soda = soda.toLowerCase();

let candy = prompt("¿Desea agregar caramelos a su pedido por $70?\n(Si/No)");
candy = candy.toLowerCase();

let products = "Compra:";

let total = 0;

if (popcorn === "si") {
  total += 300;
  products += `\nPochoclos: $300`;
}

if (soda === "si") {
  total += 100;
  products += `\nGaseosa: $100`;
}

if (candy === "si") {
  total += 70;
  products += `\nCaramelos: $70`;
}

alert(products + "\nTotal:" + total);
