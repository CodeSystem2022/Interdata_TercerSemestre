class Persona{ //clase padre

    constructor(nombre, apellido){
        this._nombre = nombre
        this._apellido = apellido
        }
  
    get nombre(){
        return this._nombre
    }

    set nombre(nombre){
        this._nombre = nombre
    }

    get apellido(){
        return this._apellido
    }

    set apellido(apellido){
        this._apellido = apellido
    }

    nombreCompleto(){
        return this.idPersona+' '+this._nombre+' '+this._apellido
    }

class Empleado extends Persona{ //clase hija
    constructor(nombre, apellido, departamento){
        super(nombre, apellido)
        this._departamento = departamento
    }

    get departamento(){
        return this._departamento
    }

    set departamento(departamento){
        this._departamento = departamento
    }
    
    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto()+', '+this._departamento
    }

}

let persona1 = new Persona('Ignacio', 'Buchter')
//metodo get
console.log(persona1.nombre)
console.log(persona1.apellido) 

//metodo set
persona1.nombre = 'Ezequiel' 
persona1.apellido = 'Digiovani'

console.log(persona1.nombre)
console.log(persona1.apellido)
//console.log(persona1)

let persona2 = new Persona('Martin', 'Buchter')
//metodo get
console.log(persona2.nombre) 
console.log(persona2.apellido)

//metodo set
persona2.nombre = 'Pablo'
persona2.apellido = 'perez'

console.log(persona2.nombre)
console.log(persona2.apellido)
//console.log(persona2)

let empleado1 = new Empleado('Ignacio', 'Buchter', 'sistemas')
console.log(empleado1)
console.log(empleado1.nombreCompleto())
