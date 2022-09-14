'use strict';
let num1;
let num2;
num1 = 9;
num2 = '9';

if(num1 < 0){

}else if (num1 >0){
    if ((num1 % 3 === 0) && (parseInt(num2)>0)) {
        console.log(" num1 es múltiplo de 3 y num 2 > 0 ");
    }else{
        if (num2 % 2 === 0)
        console.log("num1 es múltiplo de 2");
    }
}
//switch
let opcion;
opcion = prompt("Introduzca una opción 1-4");
switch (opcion){
    case '1':
        alert("selecciono la opción 1");
    case '2':
        alert("selecciono la opción 2")
    case '3':
        alert("selecciono la opción 3")
    case '4':
        alert("selecciono la opción 4")
    default:
        alert("selecciono una opción inválida")
        break;
}