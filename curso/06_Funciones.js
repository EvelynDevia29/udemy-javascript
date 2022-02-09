/**
 * 
 * Funciones
 */

// declarativa

///function nombreDeLaFuncion(){
    //cuerpo de nuestra funcion

//}

function saludar(){
    console.log('Hola mundo soy Monica Evelyn');
}
saludar();

function saludar(nombre,edad){
    console.log(`Hola soy ${nombre}` +` y tengo: ${edad} `+ `años`);

}
saludar('Monica Evelyn',39);

function saludar(nombre){
    return `Hola soy ${nombre}`
}

var saludo = saludar('Monica Evelyn');
console.log(saludo);
console.log(saludar('Monica Evelyn Quevedo'));

//Expresion o funciones anonimas
var sumar = function(a,b){
    return a + b;
}
console.log(sumar(5,8));

//arrow function
var resta = (a,b) => {
    if(typeof a == 'number' && typeof b == 'number'){
        return a - b;
    }else{
        return 'Solo puede restar numeros';
    }
    
}
console.log(resta(10,'2'));

var multiplicar =(a,b)=>a * b;//funcion flecha
console.log(multiplicar(2,2));

