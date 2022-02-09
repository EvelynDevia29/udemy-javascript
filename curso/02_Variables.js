/**
 * Variables
 * 
 * 3 formas de definir variables:
 * 
 * var
 * Let
 * const
 */

//variables con VAR

var nombre = 'Monica Evelyn';
console.log(nombre);

var edad = 27;
console.log(edad);

var persona = {
    nombre:'Monica',
    apellido:'Quevedo',
    edad:39,
    direccion:{
        calle:'Siempre viva',
    numeropDeCasa:123,
},
ciudadesVisitadas:[
    'Guayaquil',
    'Cuenca',
    'Manta'
]
};

var ciudad;
ciudad = 'Boston';
ciudad = 'Florida'
console.log(ciudad);

//Variables con Let


{
    let saludo = 'Hola soy Mónica let';
    console.log(saludo);
}
console.log(saludo);


{
    var saludo = 'Hola soy Monica var'; 
    console.log(saludo);
}
console.log(saludo);

/* variables const, se escriben en mayusculas y 
si es largo se usan guio bajo*/

const PI =3.141516;
console.log(PI);
var nombre = 'Mónica';
var saludo = `Hola soy ${nombre}
como estas?`;
console.log(saludo);