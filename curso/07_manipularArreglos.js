/**
 * 
 * Manipulacion de arreglos
 * 
 */

//For each
var letras = ['a', 'b', 'c', 'd', 'e'];
console.log(letras.length);//devuielve la cantidad de elemntos que tiene un arreglo

/*for(let i = 0; i <letras.length; i++){
    const element = letras[i];
    console.log(element);
}*/

letras.forEach((elemento) => console.log(elemento));

// push -shift- pop
// mutabilidad, quiere decir que va a cambiar algo en el arreglo


var letras = ['a', 'b', 'c', 'd', 'e'];
letras.push('f');
console.log(letras);

var primerElemento = letras.shift();
//console.log(primerElemento);
console.log(letras);

var ultimoElemento = letras.pop();
console.log(ultimoElemento);

//map  -- no modifica el origen es inmutable

var estudiantes =['Dayana','Monica','Carlos','Freddy'];
var asistencia = estudiantes.map((nombre) => {
    return {
        nombre: nombre,
        asistencia: false

    }
});
console.log(estudiantes);
console.log(asistencia);
console.log(estudiantes);

var estudiantes =['Dayana','Monica','Carlos','Freddy'];
var asistencia = estudiantes.map((nombre) => `${nombre}.`);
console.log(estudiantes);
console.log(asistencia);
console.log(estudiantes);

//filter: retorna un array con los elementos que coincidan
//con la busqueda

var estudiantes = [
    { nombre: 'Monica', edad:39, matriculado: true},
    { nombre: 'Juan', edad:41, matriculado: false},
    { nombre: 'Carlos', edad:26, matriculado: true},
    { nombre: 'Milena', edad:19, matriculado: false},
    { nombre: 'Sara', edad:34, matriculado: true},
];

var filtrado = estudiantes.filter((estudiante) => estudiante.matriculado && estudiante.edad >= 21);
console.log(estudiantes);
console.log(filtrado);

//some every : verifica si al menos unos de tdos los elementos cumple
//con una condicion especifica, si cumple retona ture y false si no
//y every retorna valor logico si todos los elmentos del arreglo cumplen con
//la condicion que le especifiquemos

//SOME
//let numeros =[1,2,3,4,5,6,7,8,9,10];
let numeros =[1,3,5,7,9];

let resultado = numeros.some((numero)=>numero % 2 === 0);
console.log(resultado);


//EVERY
let numeros =[2,4,6,8,10,1];
var resultado = numeros.every((numero)=>numero % 2 === 0);
console.log(resultado);


//find * findIndex

//FIND, buscar un unico elemento, retorna el primer elemento que cumpla
//con la busqueda

var clientes = [
    {id: 1, nombre:'Monica'},
    {id: 2, nombre:'Maria'},
    {id: 3, nombre:'Valeria'},
    {id: 4, nombre:'Miguel'},
    {id: 5, nombre:'Nacho'},
];

var cliente = clientes.find((cliente)=>cliente.id === 1);
var filtrado = clientes.filter((cliente)=>cliente.id === 1);
console.log(clientes);
console.log(cliente);
console.log(filtrado);

//FINDINDEX: retorna la posicion del elemento dentro del array y nos
//devuelve un unico valor
var clientes = [
    {id: 1, nombre:'Monica'},
    {id: 2, nombre:'Maria'},
    {id: 3, nombre:'Valeria'},
    {id: 4, nombre:'Miguel'},
    {id: 5, nombre:'Nacho'},
];
var posicion = clientes.findIndex((cliente) => cliente.id ===2);
console.log(posicion);
console.log(clientes[posicion]);