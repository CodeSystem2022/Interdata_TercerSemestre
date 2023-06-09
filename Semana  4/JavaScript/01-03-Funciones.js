miFuncion(8, 2); //Esto se le conoce como hosting

function miFuncion(a, b){
    console.log("Sumamos: "+(a + b));
}

//Llamamos a la funcion
miFuncion(5, 4);

let resultado = miFuncion(6, 7);
console.log(resultado);

//Declaramos una funcion de tipo expresión o anónima
let x = function(a, b){return a+b}; //Necesita cierre con punto y coma
resultado = x(5,6); //Al llamar sempone la variable y paréntesis
console.log(resultado);

//Funciones del tipo self y invoking
(function(a, b){
    console.log('Ejecutando la funcion: '+ (a + b));
})

console.log(typeof miFuncion);
function miFuncionDos(a, b){
    console.log(arguments);
}

miFuncionDos(5,7);

//toString
var miFuncionTexto = miFuncionDos.toString(); //Convierte la funcion a texto
console.log(miFuncionTexto);

//Funcion flecha
const sumarFuncionFlecha = (a,b) => a+ b;
resultado = sumarFuncionFlecha(3, 7); //Asignamos el valor a una variable
console.log(resultado);

//Función tipo expresión
let sumar = function(a = 4, b = 8){
    console.log(arguments[0]); //Muestra el parámetro de: a
    console.log(arguments[1]); //Muestra el parámetro de: b
    return a + b + arguments[2];
}

resultado = sumar(3, 2, 9);
console.log(resultado);

//Sumar todos los argumentos
let respuesta =sumarTodo(5, 4, 13, 10, 9);
console.log(respuesta);
function sumarTodo(){
    let suma = 0;
    for(let i=0; i < arguments.length; i++){
        suma += arguments[i]; //Arguments es solo para arreglos
    }
    return suma;
}

//Tipo primitivo
let k = 10;
function cambiarValor(a){
    a = 20;
}

cambiarValor(k);
console.log(k);

//Paso por referencia 
const persona = {
    nombre:  'Juan',
    apellido : 'Perez'
}
console.log(persona);
function cambiarValorObjeto(p1){
    p1.nombre = 'Ignacio';
    p1.apellido = 'Juarez';
}

cambiarValorObjeto(persona);
console.log(persona);