/*
    las variables con var , permiten sobreescribirlas , esto es una mala practica, por esta razon es mejor usar let y const
    ya que no permiten sobreescribir o reasignar ,MALA PRACTICA
*/
///////// Ejemplo 1
var hello = 'Hello';
let world = 'Hello world';
const helloWolrd = 'Hello World';
const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWolrd);
}

anotherFunction();

///////// Ejemplo 2
/*  Despues de ejecutar la funcion creamos una variable denttro de esta y ya se puede usar
en el exterior como variable global, ES MALA PRACTICA
*/
const functionglobal = () =>{
    globalVar = 'im global';
}
functionglobal();
console.log(globalVar);

///////Ejemplo 2
const anotherExample = () =>{
     var localVar = globalVar = 'im gloobal';
}

anotherExample();
console.log(globalVar);
