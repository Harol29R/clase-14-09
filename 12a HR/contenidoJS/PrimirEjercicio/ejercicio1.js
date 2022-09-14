'use strict'; //directiva que indica que estamos trabajando en modo estricto
/*
//Dlecaración de variables o contenedores
var variable1 = 10; //Caracter global
let variable2 = 23; //De ámbito local
const contante1 = 3.13; //Declarar constantes
if (true){
    var variable1 = 100;
    let variable2 = 29;
    console.log(variable1);
    console.log(variable2);
}
console.log(variable1);
console.log(variable2);*/

//Realizar un programa que lea 2 número y los sume e imprimir resultado

let num1;
let num2;
num1 = prompt("Introduzca un número")
num2 = prompt("Introduzca un número")
let suma =0;
suma =parseFloat(num1) + parseFloat(num2);
console.log("El resultado de la suma es:"+suma);
alert("La suma es:"+suma)
