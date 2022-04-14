/*
    Siempre tener como declarar las variables en los bloques de codigo como este closure
    NUNCA usar VAR  para los loops
*/
const anothefunction2 = () => {
    for ( let i = 0; i<3; i++){
        setTimeout(()=>{
            console.log(i);
        },1000);
    }
};
anothefunction2();