//Franco Bianchi

package test;

import domain.*; //Asterisco para heredar todas las clases

public class TestClaseObject{ 

    public static void main(String[] args) {
        Empleado empleado1 = new Empleado("Pedro",10000);
        Empleado empleado2 = new Empleado("Pablo",15000);
        
        if(empleado1 == empleado2){ // Comparamos el ID de los objetos
            System.out.println("Misma referencia de memoria");
        }
        else{
            System.out.println("Distinta referencia de memoria");
        }
         
        if(empleado1.equals(empleado2)){ //Comparamos el contenido de los objetos(.equals)
            System.out.println("Iguales en contenido");
        }
        else{
            System.out.println("Distintos en contenido");
        }
    }
