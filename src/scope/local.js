/**
 * No podemos acceder a variables definidas con let o const dentro de funciones
 */
///////Ejemplo 1
const helloWorld = () => {
    const hello = 'hello world';
    console.log(hello);
};

helloWorld();
console.log(hello); //No puede acceder a la variable definida dentro de la funcion desde afuera de la funcion

/*
Ambito Lexico o lexical scope:
*/
//////Ejemplo 2 
var scope = 'im global';

const functionScope = () =>{
    const scope = 'i am just a local';
    const func = () => {
        return scope;
    }
    console.log(func());
}

functionScope();
console.log(scope);


////Ejemplo Local Scope
const fruits = () => { 
    var fruit = 'apple'; 
    console.log(fruit); 
};
fruits();