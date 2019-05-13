/*
* Hacer un programa para llevar la lista 
de tareas que tenemos que hacer. 

    - El programa debe pedir el nombre de una 
    lista, y luego ir pidiendo tareas 
    para agregar a dicha lista.
    - Se puede agregar indefinidas listas e 
    indefinidas tareas a cada lista.
    - Cuando se escribe la palabra "terminar"
    a la hora de ingresar una tarea, debe dejar
    de agregar tareas a la lista y preguntar 
    por la siguiente lista
    - Si se pone "terminar" a la hora de 
    agregar una lista, debe terminar el programa
    y mostrar la lista final.

    Ejemplo:

        - "Supermercado"
            - "Comprar gaseosa"
            - "Comprar snacks"
            (terminar)
        - "Impuesto"
            - "Pagar luz"
            - "Pagar gas"
            (terminar)
        - "Ada"
            - "Estudiar bucles"
            (terminar)
        (terminar)    
*/

let list = prompt("Ingrese el nombre de la lista"),
    task,
    taskList = `${list}: \nTareas:`;

while(list !== "terminar"){
    task = prompt("Ingrese una tarea");
    
    if(task !== "terminar"){
        taskList += `\n* ${task}`
    }else{
        list = prompt("Ingrese el nombre de la nueva lista")
        taskList += `\n${list}: \nTareas:`
    }
}

if(list === "terminar"){
   alert(taskList);
}