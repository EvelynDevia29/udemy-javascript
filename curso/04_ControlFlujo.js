/**
 * Contreol de flujo
 * 
 */

//Estructura if

var llueve = true;
if(llueve){
    console.log("Necesito una sombrilla");
}

const MAYORIA_DE_EDAD = 18;
var edadPersona = 18;

if (edadPersona >= MAYORIA_DE_EDAD) {
    console.log("Es mayor de edad");
    
} else {

    console.log("Es menor de edad");  
}


var semaforo = 'rojo';
if(semaforo === 'verde'){
    console.log('Arranca');
}else if(semaforo==='amarillo'){
    console.log('Listo?');
}else if (semaforo==='rojo'){
    console.log('Motores apagados');
}else{
    console.log('No es un color de semaforo');
}

// switch

switch(expression){
    case expression:
        ///codigo
        break;
    case expression:
        //codigo
        break;
    default:
        console.log('Este caso se cumple si ninguno de los anteriores cumple la condicion');
}

var producto = 'naranjas';
switch(producto){
    case 'papaya':
    case 'naranjas':
        console.log('Las papayas y las naranjas cuestan $1 cada libra');
        break;
    case 'mango':
        console.log('El mango cuesta $2 cada libra');
        break;
    default:
        console.log('El producto no se encuentra disponible');
}

