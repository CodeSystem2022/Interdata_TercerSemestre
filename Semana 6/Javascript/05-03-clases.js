class Persona{

    static contadorPersona  = 0; //Atributo estático
    //email = 'Valor default email'; //Atributo no estático

    static get MAX_OBJ(){
        return 5; //Este metodo simula una constante
    }

    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        if(Persona.contadorPersona < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersona;
        }
        else{
            console.log('Se ha superado el máximo de objetos permitidos')
        }
        Persona.contadorObjetosPersona++;
        //console.log("Se incrementa el contador: "+Persona.contadorObjetosPersona);
        this.idPersona = ++Persona.contadorPersona;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
       this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this.idPersona + ' ' +this._nombre +'  '+ this._apellido;
    }
    //Sobreescribiendo el método de la clase padre(O)
    toString(){ //Retorna un String

        //Se aplica polimorfismo que significa multiples formas en tiempo de ejecución
        //El método que se ejecuta depende si es una referencia de la clase padre o hija
        
        return this.nombreCompleto();
    }
    //Métodos static
    static saludar(){
        console.log("Saludos desde el método static");
    }
    static saludar2(persona){
        console.log(persona.nombre +' '+ persona.apellido);
    }
}

class Empleado extends Persona{ //Clase hija
    constructor(nombre, apellido,departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto()+', '+this._departamento;
    }
}

let persona1 = new Persona('Martin', 'Riquelme');
console.log(persona1);
let persona2 = new Persona('Esteban', 'Rodriguez')
console.log(persona2);
persona2.nombre = "Maria Laura ";
console.log(persona2.nombre);
persona2.apellido = "Bosques";
console.log(persona2.apellido)

let empleado1 = new Empleado('Mariana', 'Ferreyra','Sistemas');
console.log(empleado1);
console.log(empleado1.nombre)
console.log(empleado1.nombreCompleto());

