'use strict';
/*//Función claseca en JS
function nombreFuncion(/**recibo de parámetros */
    /**Cuerpo de la función 
    return 0;
}*/

//Invocación de la función
//nombreFuncion();

function suma(num1=0, num2=0){
    return num1 + num2;
}

let result= 0;
result= suma(4,12);
//console.log(result);

//Función tipo flecha 
const resta = (num1=1, num2=1) => {
    return num1 - num2;
}

console.log(resta(12));
