'use strict';
let notaIngresada;
notaIngresada=3.0;
let mensaje;
mensaje = "";
switch(true){
    case notaIngresada >=0 && notaIngresada <=2.9:
        //Template String
        mensaje = `Insuficiente la nota: ${notaIngresada}`;
    case notaIngresada >=3 && notaIngresada <=3.5:
        //Template String
        mensaje = `Regular la nota: ${notaIngresada}`;
    case notaIngresada >=3.6 && notaIngresada <=4:
        //Template String
        mensaje = `Bien la nota: ${notaIngresada}`;
    case notaIngresada >=4.1 && notaIngresada <=4.5:
        //Template String
        mensaje = `Muy bien la nota: ${notaIngresada}`;
    case notaIngresada >=4.6 && notaIngresada <=5:
        //Template String
        mensaje = `Excelente la nota: ${notaIngresada}`;
    default:
        mensaje = `La calificación no puede ser procesada:${notaIngresada}`;
        break;
}
console.log(mensaje);


