'use strict';
// es muy comun definirlos con const
let miArreglo = [2,4,2,5,45,true,'78',"hola mundo"];
let miarreglo2 = new Array(1,2,3,4);
miArreglo.push(56,78,true);
//miArreglo = [2,4,2,5,45,true,'78',"hola mundo"];
for(let i=0;i<miArreglo.length;i++){
    //console.log(miArreglo[i]);
}
//Variaciones del for

for(let j of miarreglo2){
    //console.log(j);
}
for(let j in miarreglo2){
    //console.log(miarreglo2[j]);
}
miarreglo2.forEach((e)=>{
    //console.log(e)
});

miarreglo2.forEach(function(e){
    console.log(e);
})