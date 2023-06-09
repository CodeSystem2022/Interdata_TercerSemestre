let x = 10;
console.log(x.length);

//Objeto 
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 28,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase(); //Convierte las minúsculas a mayúsculas
    },
    set lang(lang){
        this.idioma = lang.toUpperCase(); 
    },
    nombreCompleto: function(){
        return this.nombre+' '+this.apellido;
    },
    get nombreEdad(){
        return 'El nombre es: '+this.nombre+' edad: '+ this.edad;
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());

let persona2 = new Object(); //Debe crear un nuevo objeto de memoria
persona2.nombre ='Juan';
persona2.direccion = 'Salada 14';
persona2.telefono = '5412365423565';

console.log(persona2.telefono);
console.log(persona['apellido']) //Accedemos como si fuera un arreglo
console.log('Usamos el ciclo for in')

//for in y accedemos al objeto como si fuera un arreglo
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad])
}
console.log('Cambiamos y eliminamos un error')

persona.apellido = 'Betancud'; //Cambiamos dinamicamente un valor del objeto
delete persona.apellido; // 'Eliminamos el error
console.log(persona)

//Distintas formas de imprimir un objeto
//Numero 1: la mas sencilla, es concatenar cada valor de cada propiedad
console.log('Distintas formas de imprimir un objeto: Forma 1');
console.log(persona.nombre+ ', '+persona.apellido);

//Número 2: A través del ciclo for in
console.log('Distintas formas de imprimir un objeto: Forma 2');
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//Número 3: La función Object.values()
console.log('Distintas formas de imprimir un objeto: Forma 3');
let personaArray = Object.values(persona);
console.log(personaArray);

//Número 4: Utilizamos el método JSON.stringify
console.log('Distintas formas de imprimir un objeto: Forma 4');
let personaString = JSON.stringify(persona);
console.log(personaString);

console.log('Comenzamos a utilizar el método get');
console.log(persona.nombreEdad);

console.log('Comenzamos con el método get para idiomas');
console.log(persona.lang);


console.log('Comenzamos con el método get y set para idiomas');
persona.lang = 'en';
console.log(persona.lang);

function Persona3(nombre = 'Luis', apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+' '+this.apellido;
    }
}

let padre = new Persona3('Leo', 'Lopez', 'lopez@gmail.com');
padre.nombre = 'Luis'; //Modificamos el nombre
console.log(padre);
console.log(padre.nombreCompleto()); //Utilizamos la funcion
let madre = new Persona3('Laura', 'Contreras', 'lccontreras@gmail.com');
console.log(madre);
console.log(madre.nombreCompleto());
