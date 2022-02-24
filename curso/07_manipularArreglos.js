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

var estudiantes = ['Dayana', 'Monica', 'Carlos', 'Freddy'];
var asistencia = estudiantes.map((nombre) => {
    return {
        nombre: nombre,
        asistencia: false

    }
});
console.log(estudiantes);
console.log(asistencia);
console.log(estudiantes);

var estudiantes = ['Dayana', 'Monica', 'Carlos', 'Freddy'];
var asistencia = estudiantes.map((nombre) => `${nombre}.`);
console.log(estudiantes);
console.log(asistencia);
console.log(estudiantes);

//filter: retorna un array con los elementos que coincidan
//con la busqueda

var estudiantes = [
    { nombre: 'Monica', edad: 39, matriculado: true },
    { nombre: 'Juan', edad: 41, matriculado: false },
    { nombre: 'Carlos', edad: 26, matriculado: true },
    { nombre: 'Milena', edad: 19, matriculado: false },
    { nombre: 'Sara', edad: 34, matriculado: true },
];

var filtrado = estudiantes.filter((estudiante) => estudiante.matriculado && estudiante.edad >= 21);
console.log(estudiantes);
console.log(filtrado);

//some every : verifica si al menos unos de tdos los elementos cumple
//con una condicion especifica, si cumple retorna true y false si no
//y every retorna valor logico si todos los elmentos del arreglo cumplen con
//la condicion que le especifiquemos

//SOME
//let numeros =[1,2,3,4,5,6,7,8,9,10];
let numeros = [1, 3, 5, 7, 9];

let resultado = numeros.some((numero) => numero % 2 === 0);
console.log(resultado);


//EVERY
let numeros = [2, 4, 6, 8, 10, 1];
var resultado = numeros.every((numero) => numero % 2 === 0);
console.log(resultado);


//find * findIndex

//FIND, buscar un unico elemento, retorna el primer elemento que cumpla
//con la busqueda

var clientes = [
    { id: 1, nombre: 'Monica' },
    { id: 2, nombre: 'Maria' },
    { id: 3, nombre: 'Valeria' },
    { id: 4, nombre: 'Miguel' },
    { id: 5, nombre: 'Nacho' },
];

var cliente = clientes.find((cliente) => cliente.id === 1);
var filtrado = clientes.filter((cliente) => cliente.id === 1);
console.log(clientes);
console.log(cliente);
console.log(filtrado);

//FINDINDEX: retorna la posicion del elemento dentro del array y nos
//devuelve un unico valor
var clientes = [
    { id: 1, nombre: 'Monica' },
    { id: 2, nombre: 'Maria' },
    { id: 3, nombre: 'Valeria' },
    { id: 4, nombre: 'Miguel' },
    { id: 5, nombre: 'Nacho' },
];
var posicion = clientes.findIndex((cliente) => cliente.id === 2);
console.log(posicion);
console.log(clientes[posicion]);

//includes : ayuda a determinar si en un arrgelo existe un elemento en especifico
//y nos devuelve verdadero o falso segun corresponda

var mascotas = ['perro', 'gato', 'conejo'];
var resultado = mascotas.includes('gato');
console.log(resultado);
console.log('monica'.includes('s'));

//ejercicio de buscador
var buscador = (parametro) => {
    let clientes = [
        { id: 1, nombre: 'Monica' },
        { id: 2, nombre: 'Maria' },
        { id: 3, nombre: 'Valeria' },
        { id: 4, nombre: 'Miguel' },
        { id: 5, nombre: 'Nacho' },
    ];
    return clientes.filter((cliente)=> cliente.nombre.includes(parametro));
}
console.log(buscador('ia'));

//JOIN: método que nos ayuda a unir todos los elementos de un arreglo
//y generar un string a partir de esa unión
//OJO: join no puede covertir un array de objetos en un string

var elementos = ['aire','fuego','agua','amor'];
var resultado = elementos.join(',');
console.log(resultado);

var clientes = [
    { id: 1, nombre: 'Monica' },
    { id: 2, nombre: 'Maria' },
    { id: 3, nombre: 'Valeria' },
    { id: 4, nombre: 'Miguel' },
    { id: 5, nombre: 'Nacho' },
];

//console.log(clientes.join());

//Ejemplo: generar un archivo .csv a partir de los datos de 
//nuestros clientes para posteriormente abrirlos en un Excel
//las claves del arrgelo u objeto son los encabezados de las
//columnas en excel

//Object.values: retorna lo valores unicamente del objeto

console.log(Object.values({ id: 1, nombre: 'Monica' }));

//Object.keys : duelve los nombres de las llaves
console.log(Object.keys({ id: 1, nombre: 'Monica' }));

var clientes = [
    { id: 1, nombre: 'Monica' },
    { id: 2, nombre: 'Maria' },
    { id: 3, nombre: 'Valeria' },
    { id: 4, nombre: 'Miguel' },
    { id: 5, nombre: 'Nacho' },
];
var csvGenerator = (array, separador = ',') => {
    let cabecera = Object.keys(array[0]).join(separador);
    let data = array.map((element) => Object.values(element).join(separador));
    console.log(cabecera);
    data.forEach(element => console.log(element))
}
csvGenerator(clientes);

//concat * sort * splice * slice

var array1 = [1, 2, 3, 4, 5];
var array2 = [6, 7, 8, 9, 0];

//unir los dos arreglos
array3= array1.concat(array2);
array4 = [...array1, ...array2];
console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);

//Sort, metodo de ordenamiento basado por defecto en codis ASCII
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(array1.sort());

var arrayMeses = ['Dic', 'Ene', 'Mar', 'Feb'];
console.log(arrayMeses.sort());

var array = [1, 10000, 21, 30, 4];
var ordenado = array.sort((a,b) => b - a);
console.log(ordenado);

//splice: remueve o modifica elemento de un array , o al array en si
//xxx.splice(parameter1,parameter2,parameter3)
//parameter1: posicion desde donde incia la eliminacion
//parameter2: cantidad de elementos a eliminar a apartir del parameter1
//parameter3: reemplaza el elemento del array por otro
var nombres = ['Monica', 'Evelyn', 'Miguel', 'Sara'];
nombres.splice(1,2,'Esteban');
console.log(nombres);

//slice: retorna una copia de una parte mas pequeña de un array
//no incluye la última posicion
var nombres = ['Monica', 'Evelyn', 'Miguel', 'Sara'];

var copiaNombres = nombres.slice(1,4);
console.log(copiaNombres);
console.log(nombres);
