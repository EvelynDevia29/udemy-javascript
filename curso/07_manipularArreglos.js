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

//filter

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