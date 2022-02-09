/**Ejercicios Control de Flujos

1.Escribir un programa que según el día de la semana ingresado
proporcione el día en inglés.
El programa debe ser escrito dos veces, una con la declaración
if else y otra con la declaración switch
 * 
 */

//con if else

var dia = 'sabado';

if (dia ==='lunes') {
    console.log('Monday');
}
    else if(dia==='martes') {
    console.log('Tuesday');
}
    else if(dia==='miercoles'){
        console.log('Wednesday');
    }
    else if (dia==='jueves'){
        console.log('Thursday');
    }
    else if(dia==='viernes'){
        console.log('Friday');
    }else{
        console.log('El dia mencionado no se encuentra');
    }

// con switch
var dia = 'viernes';
switch(dia){
    case 'lunes':
        console.log('Monday');
        break;
    case 'martes':
        console.log('Tuesday');
        break;
    case 'miercoles':
        console.log('Wednesday');
        break;
    case 'jueves':
        console.log('Thursday');
        break;
    case 'viernes':
        console.log('Friday');
        break;

    default:
        console.log('El dia mencionado no se encuentra');

}


/**
 * Escribir un programa que según el total de la compra, se agregue un valor de envio.

Si la compra es menor o igual a los $10 se agregará un gasto de envió de $3

Si la compra es menor o igual a los $20 y mayor a los $10 se agregará
un gasto de envío de $5 

Si la compra es menor o igual a los $50 y mayor a los $20
se agregará un gasto de envío de $7 

Si la compra supera los $50 el gasto de envío será
gratuito.
El programa debe ser escrito dos veces, una con la declaración if else
y otra con la declaración switch
 *  */    

// con if else
var totalCompra;
var compra = 54;
var gastosEnvio =0;
if(compra <= 10){
    gastosEnvio = 3;
    totalCompra = compra + gastosEnvio;
    console.log('El total de su compra es: ' + totalCompra + '$');
}else if(compra <= 20 && compra > 10){
    gastosEnvio = 5;
    totalCompra = compra +gastosEnvio;
    console.log('El total de su compra es: ' + totalCompra + '$');
}else if(compra <= 50 && compra > 20){
    gastosEnvio = 7;
    totalCompra = compra + gastosEnvio;
    console.log('El total de su compra es: ' + totalCompra + '$');
}else if(compra > 50){
    gastosEnvio = 0;
    totalCompra = compra + gastosEnvio;
    console.log('El total de su compra es: ' + totalCompra + '$'+ ' ' + 'y el envio es Gratis!!');
}


// con switch
var totalCompra;
var compra = 20;
var gastosEnvio =0;

switch(true){
    case compra<= 10:
        gastosEnvio = 3;
        totalCompra = compra + gastosEnvio;
        console.log('El total de su compra es: ' + totalCompra + '$');
    break;

    case compra <= 20 && compra > 10:
        gastosEnvio = 5;
        totalCompra = compra + gastosEnvio;
        console.log('El total de su compra es: ' + totalCompra + '$');
        break;
    case compra <= 50 && compra > 20:
        gastosEnvio = 7;
        totalCompra = compra + gastosEnvio;
        console.log('El total de su compra es: ' + totalCompra + '$');
        break;
    case compra > 50:
        gastosEnvio = 0;
        totalCompra = compra + gastosEnvio;
        console.log('El total de su compra es: ' + totalCompra + '$'+ ' ' + 'y el envio es Gratis!!');
        break;
    default:
        console.log('Haga su compra');
}