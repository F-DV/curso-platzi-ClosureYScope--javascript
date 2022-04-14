/*  
    Como buena practica y recomendacion es dejar de usar var ya que nos permite hacer muchos errores.
    let No deja REDECLARAR pero si REASIGNAR como cualquier variable
*/
const fruits = () => {
    var fruit = 'apple';
};

fruits();
//console.log(fruit);

const anotherFunction = () => {
    var x = 1;
    var x = 2;
    let y = 1;    
    y = 2;        //Let permite reasignar
//    let y = 3 ;    //let no permite Redeclarar

    console.log(x);
    console.log(y);
}

anotherFunction();