package test;

import domain.*;

public class TestinstanceOf {
    public static void main(String[] args) {
        Empleado empleado1 = new Empleado("Nacho", 10000);
        determinarTipo(empleado1);
        empleado1 = new Gerente("Nacho", 5000, "sistemas");
        //determinarTipo(empleado1);
    }
    
    public static void determinarTipo(Empleado empleado){
        if(empleado instanceof Gerente){
            System.out.println("Es de tipo gerente"); 
            Gerente gerente = (Gerente)empleado;
            ((Gerente) empleado).getDepartamento();
            System.out.println("gerente = " + gerente.getDepartamento());
        }
        
        else if(empleado instanceof Empleado){
            System.out.println("Es de tipo empleado");
           
        }
        
        else if(empleado instanceof Object){
            System.out.println("Es de tipo object");
        }
        
        
    }
}
