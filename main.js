/*SECUENCIAS DE ESCAPE

CODE    |  RESULT
----------------
\'        Comilla Simple
\"         Comilla Doble
\\         Barra Invertida
\n         Línea Nueva
\r         Retorno de Carro
\t         Tabulacion
\b         Retroceso
\f         Salto de Página
...
*/

//----------------------------------------------

//LAS CADENAS DE CARACTERES SON INMUTABLES

/*var myString = "Jello world";

console.log(myString);

myString[0] = "H"; //Error*/

//----------------------------------------------

//ARRYS MULTIDIMENSIONALES

/*var listaEstudiantes = [["nora, 97"], ["gino", 78]];

console.log(listaEstudiantes);*/

//MODIFICAR UN ARRAY

/*var miArreglo = [10, 20, 30];

miArreglo[1] = [1, 2, 3];

console.log(miArreglo);*/

//----------------------------------------------

//ACCEDER A UN ARRAY MULTIDIMENSIONAL

/*
arreglo :       [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
indices :            0          1          2
indices internos:[0  1  2]  [0  1  2]  [0  1  2]
 */

/*var miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(miArreglo[1][2]);*/

//----------------------------------------------

//.push() | METODO

/*Se añade al final del array */

/*var estaciones = ["invierno", "otoño", "primavera"];

estaciones.push("verano");*/

//----------------------------------------------

//.pop() | METODO

//Remueve el ultimo elemento de un arreglo

/*var estaciones = ["invierno", "otoño", "primavera", "verano"];

estaciones.pop();

console.log(estaciones);*/

//Tambien puede retornoar el elemento que removio

/*var est;

est = estaciones.pop();

console.log(est);*/

//----------------------------------------------

//.shift | METODO

//Remueve el primer elemento del array

/*var estaciones = ["invierno", "otoño", "primavera", "verano"];

estaciones.shift();

console.log(estaciones);*/


//----------------------------------------------

//.unshift | METODO

//Agrega un elemento al inicio del array

/*var estaciones = ["invierno", "otoño", "primavera"];

estaciones.unshift("verano");

console.log(estaciones);*/

//----------------------------------------------

//FUNCIONES

/*function sumar(a, b) {
    var suma = a + b;
    console.log(suma);
}

sumar(5 , 6);*/

//----------------------------------------------

//FUNCIONES QUE RETORNAN VALORES

/*function sumar(a, b){
    return a +b;
}

console.log(sumar(5,3));*/

//----------------------------------------------

//Undefined

/*Las funciones retornan un valor incluso si no tienen el return solo que seria undefined*/

/*function sumar(a, b){
    console.log(a + b);
}

console.log(sumar(5,8));*/

//----------------------------------------------

//ASIGNAR UN VALOR A UNA VARIABLE

/*function sumar(a, b){
    return a + b;
}

var result = sumar(5,3);

console.log(result);*/

//----------------------------------------------

// QUEUE | PERMANECE EN LINEA

/* Es una estructura de datos abstracta en la cual los elementos se mantienen en
orden. Los nuevos elementos se pueden añadir al final de la cola y los elementos
previos se retiran del principio de la cola.

Define una funcion proximaEnLaFila que tome un arreglo(arreglo) y un numero
(elemento) como argumentos. Agrega al final del arreglo y luego elimina el primer
elemento del arreglo. La funcion proximoEnLaFila debe retornar el elemento que fue
removido.
*/

/*var arreglo = ["benito", "cami", "chane", "nani", "ram", "peco"];
var elemento = "juani";

function proximaEnLaFila(arreglo, elemento) {
    arreglo.push(elemento);
    return arreglo.shift();
}

console.log("Antes" + JSON.stringify(arreglo));

var result = proximaEnLaFila(arreglo, elemento);

console.log(result);

console.log("despues" + JSON.stringify(arreglo));*/

//----------------------------------------------

//SENTENCIAS SWITCH : MULTIPLES CASOS

/*function clasificarVolumen(valor) {
    var volumen;
    switch (valor) {
        case 1:
            volumen = "bajo";
            break;
        case 2:
        case 3:
            volumen = "intermedio";
            break;
        case 4:
        case 5:
        case 6:
            volumen = "alto";
            break;
    }
    return volumen;
}

console.log(clasificarVolumen(3));*/

//----------------------------------------------

//RETORNAR VALORES BOOLEANOS

/*function esMenorQue(a, b){
    return a < b;
}

console.log(esMenorQue(6, 3));*/

//----------------------------------------------

//PATRON DE RETORNO ANTICIPADO

/*function miFuncion(){
    console.log("hola");
    return "mundo";
    console.log("adios"); //Unreachable code detected | Codigo inalcanzable
}

console.log(miFuncion());

function calcularRaizCuadrada(num){
    if(num < 0){
        return undefined;
    }
    return Math.sqrt(num);
}

console.log(calcularRaizCuadrada(4));*/

//----------------------------------------------

