'use strict'
let num1;
let num2;
let suma = 0;

num1 = parseFloat(prompt("Introduzca un número"))
num2 = parseFloat(prompt("Introduzca un número"))
if (num1 >=0 && num2>=0){
    suma = num1 + num2;
    console.log(suma);
    alert("la suma es:" + suma);
}
else{
    alert("Algun número no es positivo, ingreselo nuevamente");
}