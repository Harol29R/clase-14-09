'use strict';
// Seleccionar por id
const parrafo1 = document.getElementById('parrafo1');

//console.log(parrafo1,);
// Selección por name 
let nameParrafo = document.getElementsByName('parrafo2');
//console.log(nameParrafo);

//Seleccipon por clase
let elemento = document.getElementsByClassName("parrafo");
//console.log(elemento);
// Query selector por id
const parraUno = document.querySelector('#parrafo1');
const elemetEtiqueta = document.querySelector('h1');
const elementClass = document.querySelector('.ejemplo');
//console.log(elementClass);

// Seleccionando todos los elementos p 
const todosP = document.querySelectorAll('p');
//console.log(todosP)
/*
function print(){
    const valor = document.getElementById("edad").ariaValueMax;
    alert("La edad es"+ valor);
}*/

const print = () =>{
    const valor = document.getElementById("edad").value;
    alert("La edad es:" + valor);
}