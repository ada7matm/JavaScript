# Desafíos bucles
<br>

## Piedra papel o tijera

- Hacer un juego de piedra papel o tijera.

* El programa debe preguntar inicialmente cuántas partidas se desean jugar
* Por cada partida, se debe jugar al primero que llega a 3 puntos
* En cada turno, nos debe preguntar qué queremos elegir ("piedra", "papel" o "tijera"),
y luego generar una jugada aleatoria para la computadora. Comparar las jugadas y sumar un punto a quien corresponda.
* Para generar una jugada aleatoria, vamos a generar un número aleatorio entre 0 y 3. Si el número es 0, la jugada será piedra; si es 1, será tijera, y si es 2 será papel. Para generar un número aleatorio entre 0 y 3, hacemos:

```javascript
let numero = Math.floor(Math.Random() * 3);
```

* Al finalizar debe mostrar cuantas partidas se ganaron y cuántas se perdieron
<br>

## Generador de Hoja De Personajes de Dungeon & Dragons

- Hacer un programa que permita distribuir los puntos de los atributos en la creación de un personaje de Dungeons & Dragons. Hay 6 atributos en los que distribuir los puntos:
    * FUERZA
    * DESTREZA
    * CONSTITUCION
    * INTELIGENCIA
    * SABIDURIA
    * CARISMA
- Todos los atributos empiezan con 8 puntos, y este es el mínimo valor que pueden 
tener. El valor máximo es 15
- Hay 27 puntos disponible para distribuir entre los 6 atributos    
- Incrementar de 13 a 14 puntos un atributo cuesta 2 puntos, hacerlo de 14 a 15
también cuesta 2 puntos
- El programa debe mostrar los valores de los atributos y preguntar qué atributo se desea modificar, y luego preguntar a cuánto se desea cambiar el valor. Si tiene puntos disponibles para hacerlo, debe actualizar el valor del atributo y la cantidad de puntos disponibles. Si no, debe decir que no quedan puntos disponibles para hacerlo
- Cuando en vez de un atributo se pone la palabra "reiniciar", todos los atributos deben volver a 8 y los puntos disponibles a 27
- Cuando no quedan puntos disponibles, se deben mostrar los valores actuales y preguntar si se está conforme. Si la respuesta es sí, el programa debe terminar, si la respuesta es no, debe volver a preguntar por qué atributo se desea modificar. 
- Ejemplo:
    - Bienvenido a su generador de personaje. 
    - (LISTA DE ATRIBUTOS CON PUNTOS) Qué atributo desea modificar?
    - INTELIGENCIA
    - A cuántos puntos desea modicarlo? 
    - 13
    - Le quedan 22 puntos disponibles
    - (LISTA DE ATRIBUTOS CON PUNTOS) Qué atributo desea modificar?
    - INTELIGENCIA
    - A cuántos puntos desea modicarlo? 
    - 15
    - Le quedan 18 puntos disponibles
    - (LISTA DE ATRIBUTOS CON PUNTOS) Qué atributo desea modificar?
    - INTELIGENCIA
    - A cuántos puntos desea modicarlo? 
    - 12
    - Le quedan 23 puntos disponibles

<br>

## Ruleta

- Hacer un simulador de una ruleta. 

* El programa debe inicialmente preguntar cuánto dinero se desea apostar. 
* Debe preguntar luego si desea apostar, o si desea retirarse.
* Si desea apostar, debe preguntar a qué se desea apostar, y cuanto se desea apostar
* Una vez que se elije la opción y la apuesta, se genera un número aleatorio entre
1 y 36, se lo anuncia con un mensaje y se evalúa la apuesta
* Si se ha ganado, debe mostrar un mensaje con la cantidad que se ha obtenido,
y el total del dinero restante
* Si se ha perdido, debe mostrar un mensaje con la cantidad que se ha perdido (lo que se apostó), y el total del dinero restante
* Si no queda más dinero, el programa debe terminar
* De lo contrario, debe preguntar nuevamente si se desea apostar o retirarse
* Si se retira, debe mostrar un mensaje con el total del dinero obtenido
<br>

Para generar un número aleatorio entre 1 y 36, hacemos:

```javascript
let numero = Math.floor(1 + Math.Random() * 37);
```

<br>
Las opciones disponibles a apostar son:

* **par**: duplica el dinero apostado si el número es par
* **impar**: duplica el dinero apostado si el número es impar
* **falta**: duplica el dinero apostado si el número es menor o igual a 18
* **pasa**: duplica el dinero apostado si el número es mayor a 18
* **primera docena**: triplica el dinero apostado si el número está incluido en la primera docena (del 1 al 12)
* **segunda docena**: triplica el dinero apostado si el número está incluido en la segunda docena (del 13 al 24)
* **tercera docena**: triplica el dinero apostado si el número está incluido en la tercera docena (del 25 al 36)

<br>

## Juego RPG

- Vamos a hacer un mini juego RPG. En el, seremos una aventurera recorriendo unas cavernas y enfrentándonos a monstruos

* Tenemos tres variables principales: HP (hit points, o vida), MAX HP (cantidad máxima de vida) y cantidad de pociones
* El juego corre en dos bucles, uno de exploración y otro de combate. Dentro del bucle de exploración, cuando nos encontramos con un monstruo, entramos en el bucle de combate
* En el bucle de exploración, cada vuelta debe darnos tres opciones: "explorar", "descansar" o "salir"
    1. Si elegimos "salir", el juego debe finalizar
    2. Si elegimos "descansar", debemos curarnos un poco de vida. No podemos descansar dos veces seguidas, para poder descansar nuevamente tenemos que explorar al menos una vez
    3. Si elegimos "explorar", debemos generar un número aleatorio. Dependiendo del valor de ese número, pueden pasar tres cosas:
        1. Encontrar una habitación vacía
        2. Encontrar un poción, y sumarla a la cantidad que tenemos.
        3. Encontrar un monstruo, e ingresar en el bucle de combate.
* El bucle de combate se termina cuando nuestra vida es menor o igual a 0, cuando la vida del monstruo es menor o igual a 0, o cuando logramos huir, lo que pase primero. Si morimos, el juego también debe finalizar. Cuando estamos dentro del bucle de combate, tenemos tres opciones posibles por cada vuelta:
    1. "atacar", lo que reduce la vida del monstruo
    2. "tomar poción", lo que reduce una poción si tenemos alguna y nos cura algo de vida
    3. "huir", que debe generar un número aleatorio, y dependiendo del resultado, la huida puede o no ser exitosa.
Si atacamos o intentamos huir y fallamos, el monstruo debe atacarnos y reducir nuestra cantidad de vida.

- Observaciones:

* A cada acción del juego, debe avisarnos con un cartel lo que está pasando. Por ejemplo, "Te has quedado sin pociones", "Has encontrado una habitación vacía", "Has descansado y curado 5 HP", "El monstruo te ataca", etc.
* Puedes jugar con los números (más o menos vida, más o menos ataque, etc) y las probabilidades de que algo ocurra (encontrarte pociones, mosntruos, poder escapar, etc)
* Para hacer las probabilidades de que algo ocurra, por ejemplo, huir, podemos generar
un número aleatorio del 0 al 10, si el número es menor o igual a 7, la huida es exitosa, lo que nos da una probabilidad de huida de 70%
* Puedes hacer que las curaciones y los ataques sean números aleatorios


```javascript
// Para obtener un número aleatorio
let numero = Math.floor(numeroMinimo + Math.Random() * (numeroMaximo + 1));

// Numero aleatorio entre 10 y 15
Math.floor(10 + Math.Random() * 16)
```