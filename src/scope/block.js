/*
   Como ejemplo, Un if es una estructura de bloque
*/
    //Ejemplo 1
const fruits = () => {
    if(true) {
        var fruits1 = 'apple';      //Con var seria una varibale global pero solo dentro de la funcion
        let fruits2 = 'banana';     //Let indica que esta variable solo esta disponible dentro del bloque if
        const fruits3 = 'kiwi';     //Const tambien funciona solo dento del bloque
    }
    console.log(fruits1);
    console.log(fruits2);
    console.log(fruits3);
}

fruits();
/* console.log(fruits1);  No podemos acceder a las varibale internar aunque esten declaradas con var ya que se genera la variable global dentro de la funcion
console.log(fruits2);
console.log(fruits3); */

//Ejemplo 2: 
let x = 1;
{
    let x = 2;
    console.log(x);
}
console.log(x);

//Ejemplo 3 :  
var x = 1;
{
    var x = 2;
    console.log(x);
}
console.log(x);

//Ejmeplo 3: El console.log dentro del setTimeout es llevado al navegador y luego al callback queue, el for
            //sigue recorriendo hasta uqe el call stack termina y luego si le da paso al setTimeout, lo cuiroso es que
            // El setTimeout se ejecuta 3 veces con el ultimo valor de i, esto tiene que ver con el manejo del callstack
            // todo esto se soluciona asignando la variable i con let

const anothefunction = () => {
    for ( var i = 0; i<3; i++){
        setTimeout(()=>{
            console.log(i);
        },1000);
    }
};

anothefunction();

//Ejemplo 4 : Mismo ejercicio anterio pero asignando i con let, Es como si esperara a setTimeout a cada vuelta del for
            // Es muy util para funciones asyncronas dentro de for, no olvidar declarar con let
const anothefunction2 = () => {
    for ( let i = 0; i<3; i++){
        setTimeout(()=>{
            console.log(i);
        },1000);
    }
};
anothefunction2();