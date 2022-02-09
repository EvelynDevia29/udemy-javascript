/**
 * Operadores
 * 
 */

/**
 * Operadores de asignacion
 * 
 * 
 */
//operador de asignacion

var x = 2;
var y = true;

//Operador de asigancion de adicion (+=)

var x = 2;
var y = 1;
x += y; // x = x + Y
console.log(x);

//operador de asignacion resta (-=)

var x = 1;
var y = 2;
x -= y; //x = x-y
console.log(x);

//operador de asignacion de multiplicacion (*=)

var x = 10;
var y = 2;
x *= y;// x = x * y
console.log(x);

//operador de asignacion de division (/=)

var x = 1;
var y = 2;
x /= y; // x= x/y
console.log(x);

//operador de asignacion de residuo (%=)

var x = 1;
var y = 2;
x %= y; // x= x%y
console.log(x);

//operador de asignacion de exponenciacion (**=)

var x = 3;
var y = 2;
x **= y; // x= x**y
console.log(x);


/**
 * Operadores de comparacion (==)
 */

console.log(4==3);
console.log(3=='3');

//Operador no es igual (!=)
console.log(3!=3);

//Operador estrictamente igual (===), siempre en comparaciones se debe usar
console.log(3==='3');

//Operador de desigualdad estricta (!==)
console.log(3!==3);
console.log(3!='3');

//Operadores >, >= ,< ,<=
console.log(3 > 4); 
console.log(3>=3);
console.log(2<4);
console.log(2<=2);

/**
 * Operadores aritmeticos 
 * +, -, *, /, %, **
 *  
 */

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);
console.log(2 ** 2);

//Operadores de incremento (++)

var numero = 0;
//console.log(++numero);// hace el incremento inmediatamente
console.log(numero++); 
console.log(numero);

//OPerador de decremento (--)
var numero = 3;
//console.log(--numero)
console.log(numero--);
console.log(numero);

/**
 * Operadores Logicos
 * 
 * 
 */
//AND &&

console.log(true && false);

//OR ||
console.log(false|| false);

//NOT !
console.log(!false );

//Operador de cadena o concatenacion (+)

var nombre = "Monica Evelyn";
//var apellido = "Quevedo Devia";

var nombresCompletos = nombre + " " + apellido;
console.log(nombresCompletos);

//Operador condicional (condicion ? val 1, val 2)
console.log(2 > 3 ? "es mayor" : "es menor");

//operador de desestructuracion {  }

var persona ={
    nombre: 'Monica',
    apellido:'Quevedo'
}
var {nombre:Martita, apellido} = persona;
console.log(Martita);
console.log(apellido);
console.log(persona);

//operador de desestructuracion de arreglos

var arreglo =[1,2,3,4,5];

var [primeraPosicion, dos] = arreglo;
console.log(primeraPosicion);
console.log(dos);

/**
 * Operador de miembro o acceso de propiedad
 */
//Notacion punto
var persona ={
    nombre: 'Monica Evelyn',
    apellido:'Quevedo Devia'

}
console.log(persona.nombre);
console.log(persona.apellido);

//Notacion por corchetes

var persona ={
    nombre: 'Monica Evelyn',
    apellido:'Quevedo Devia'

}
console.log(persona['nombre']);
console.log(persona['apellido']);

//Notacion por corchetes en arreglos

var arreglo = [21,22,23,24,25,26,];
console.log(arreglo[0]);

//Operador de determinacion de tipo typeof, devuelve el tipo de dato que tenrmos
console.log(typeof 'Monica Evelyn' );
console.log(typeof 26);
console.log(typeof true);

