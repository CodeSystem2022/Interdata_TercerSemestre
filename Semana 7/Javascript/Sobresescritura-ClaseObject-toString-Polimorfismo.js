//Franco Bianchi

class Persona extends Object{ // La clase object es agregada por default a las clases (clase padre)

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

    toString(){ //Retorna string
      return this.nombreCompleto();
    }
}


class Empleado extends Persona{ //Clase hija
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

//TEST

let persona1 = new Persona("Pedro", "Gomez")
let empleado1 = new Empleado("Franco", "Bianchi", "Señales")

//Object.prototype.toString Esta es la manera de acceder a atributos y métodos de manera dinámica

console.log(persona1.toString())  // Ejecuta el metodo toString()

console.log(empleado1.toString()) // Hereda y ejecuta el metodo toString() de la clase padre y este
                                  // retorna nombreCompleto de la clase hija              



