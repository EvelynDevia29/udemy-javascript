/**
 * Ejercicios Ciclos

1.Imprima las tablas de multiplicar del 2 al 12 utilizando la declaración for.

Pista: anidamiento.

2.Realice el equivalente con la declaración while y do-while

 * 
 */

//for

var producto;
for(let i = 2; i <= 12; i ++ ){
    console.log('Tabla de multiplicar del: '+ i );
    for(let j = 1; j <= 10; j++){
        producto = i * j;
        console.log(i + ' * ' + j + ' = ' + producto);
    }

}

// while

var producto;
var i = 2;


while(i <= 12 ){
    console.log('Tabla de multiplicar del: '+ i );
    var j = 1;

    while(j <= 10){
        producto = i * j;
        console.log(i + ' * ' + j + ' = ' + producto);
        j = j + 1;

    }

    i = i + 1;
    
}

// do while

var producto;
var i = 2;
var j = 1;

do {
    producto = i * j;
    console.log(i + ' * ' + j + ' = ' + producto);
    j = j + 1;
 
    
}while(i <= 12 && j <= 10 ){
    producto = i * j;
    i = i + 1;
    console.log(i + ' * ' + j + ' = ' + producto);
};





