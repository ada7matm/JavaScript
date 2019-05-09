//BUCLE WHILE
/*
while(condicionEsTrue){
    ejecutarElCodigo
}
*/

//EJEMPLO

let password = "";
let tacos = 0;

while (password !== "adaitw" && tacos < 3) {
  password = prompt("Ingrese la password");
  tacos++;

  if (password !== "adaitw") {
    alert("Login incorrecto");
  }
}

if (password === "adaitw") {
  alert("Login correcto");
}
