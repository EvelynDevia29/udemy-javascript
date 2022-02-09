/**
 * Ciclos * 
 */



//While
contador = 1;
var saludo = 'Hola mundo';
while(contador <= 5){
    console.log(saludo);
    contador += 1;
}

//Do while
var contador = 11;
do {
    contador += 1;
    console.log('Hola mundo');
}while(contador <= 10);

//for

for(let i = 0; i < 5; i++){
    console.log('Hola mundo aqui estoy');
    
}

// for in

var persona = {
    nombre: 'Monica',
    apellido: 'Quevedo',
    edad: 39
}

for(let clave in persona){
    console.log(clave,persona[clave]);
}


//for of
var arreglo = [1,2,3,4,5];
var nombre = 'Monica'; 
for(let valor of nombre){
    console.log(valor);
} 
