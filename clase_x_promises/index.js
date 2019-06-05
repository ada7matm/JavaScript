const obtenerRankings = function() {
    return new Promise(
        function(cumplir, rechazar) {
            setTimeout(function(){
                cumplir("Termino!");
            }, 4000)
        }
    );
}

// DENLE BOLA DESDE ACA

// then es lo que se ejecuta cuando la promesa se cumple
// y el parametro de then contiene el 

// linea de codigo
// otra linea de codigo

const url = 'https://preguntadas.herokuapp.com';

const data = {
    username: 'pablo',
    password: 'pabloh123'
}

const parametros = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify(data) 
}

fetch(`${url}/v1/users/login`, parametros)
.then(function(resultado){
    return resultado.json();
})
.then(function(resultado){
    console.log(resultado);
})
.catch(function(error){

})