let x = 10; // variable primitivo
console.log(x.length);
//Objeto
let persona ={
    nombre: 'Sil',
    apellido: 'Prado',
    email: 'silpradoetc@gmail.com',
    edad: 27,
    idiomas: 'INGLÉS',
    nombreCompleto: function(){  //método o función en JavaScript   
        return this.nombre+' '+this.apellido;
    },
    get nombreEdad(){
        return this.nombre+' edad: '+this.edad;
    },
    get lang(){
        return this.idiomas.toLowerCase();
    },
    set lang(lang){
        this.idiomas = lang.toLowerCase();
    }
}
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.nombreCompleto());

let persona2 = new Object();
persona2.nombre = 'Juan';
persona2.direccion = 'etcetc 234';

console.log(persona);

//for in
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}

persona2.apellido = 'Prada';
console.log(persona2);

/// distintas formas de imprimir un objeto
// Numero 1: concatenar valor de cada propiedad
console.log(persona.apellido+','+persona.edad);

// 2: a traves del for in
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}
// 3: con la funcion Object.values --> regresa el obj como un array
let personaArray = Object.values(persona);
console.log(personaArray);

// 4: Metodo JSON.stringify

let personaString = JSON.stringify(persona);
console.log(personaString); 

console.log('utilizamos el get');
console.log(persona.nombreEdad);

console.log('utilizamos el get idiomas');
console.log(persona.lang);
persona.lang = 'EN';
console.log(persona.lang);

//constructor
class persona3 {
    constructor(nombre, apellido, email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.nombreCompleto = function () {
            return this.nombre + ' ' + this.apellido;
        }
    }
}
let padre = new persona3('eee', 'Prado', 'safsg@gmail.com');
console.log(padre);
let madre = new persona3('Dora', 'etc', 'etc@gmail.com');
console.log(padre.nombreCompleto());

//formas de crear objetos
let miObjeto = new Object(); // formal
let miObjeto2 = {};

let miCadena = new String('hola');
let miCadena2 = 'hola';

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean(false);
let miBoolean2 = false;

let miArray = new Array();
let miArray2 = [];

//funciones
let miFuncion = new function(){};
let miFuncion2 = function(){};

// uso de prototype 
//persona3.protype.telefono = '23456543';

//uso de call
let persona4 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto2: function(titulo, telefono){
        return titulo+': '+this.nombre+' '+this.apellido+' '+telefono;
        //return this.nombre+' '+this.apellido;
    }
}
let persona5 = {
    nombre: 'Pepe',
    apellido:'Etcetera'
}
console.log(persona4.nombreCompleto2('Lic.','32456765'));
console.log(persona4.nombreCompleto2.call(persona5, 'Ing.', '3456786543'));

// uso de apply
let arreglo = ['Ing. en Sistemas', '234432'];
console.log(persona4.nombreCompleto2.apply(persona5, arreglo));