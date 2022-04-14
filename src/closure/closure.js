/*
    ->Ejemplo explicado en onenote closure y scope con javascript
*/
//Ejemplo 

const papa = (nuevoEngendro) => {
    var cantidadDeHijos = 0;
    
    const crearHijo = (nuevoEngendro) => {
        cantidadDeHijos += nuevoEngendro;
        console.log(`Cantidad de hijitos ${cantidadDeHijos}`)
    }
    return crearHijo;
}
papa(1);
papa(2);
papa(3);
/*
    El error se da porque no permitimos a cantidadDeHijos iniciaizarze en 0
    La funcion directamente se va a la subfuncion crearHijo, pero cantidad de hijo 
    no existe, entonces develve la funcion vacia.
    La forma CORRECTA de llamar este tipo de funcion con closure es:
*/

let traigamosHijosAlMundo = papa();  //Este parentesis indica que la funcion se esta ejecutando, por ende inicializando
                                        //TraigamosHijosAlMundo vale, lo que returna la funcion CreaHijo osea 0;

traigamosHijosAlMundo(1);
traigamosHijosAlMundo(2);
traigamosHijosAlMundo(3);