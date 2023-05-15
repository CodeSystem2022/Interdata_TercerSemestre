const autos = ['Ferrari', 'Renault','BMW'];
console.log(autos)

//recorrer elementos
console.log(autos[0]); 

for(let i = 0; i < autos.length; i++){
    console.log(i+ ': '+autos[i]);
}

//modificar elementos
autos[1] = 'Audi';
console.log(autos);

//agregar nuevos valores
autos.push('Volvo');
console.log(autos);

//otra forma
autos[autos.length] = 'Peugeot';
console.log(autos);

//another, careful with thisss
autos[6] = 'Mazda'; //al tener 5 elementos (i0 a i4), dejo un espacio vacio (i5)
console.log(autos)

//preguntar si es un array
console.log(Array.isArray(autos)); // devuelve booleano 
//
console.log(autos instanceof Array);
