//Franco Bianchi

package test;

import domain.Persona;

public class TestForEach {
    public static void main(String[] args) {
        int edades[] = {1,2,3,4,20};
        for (int edad: edades) { // Sintaxis ForEach
            
        }
    
        Persona personas[] = {new Persona("Pedro"), new Persona("Pablo")};
        
        for (Persona persona:personas) {
            System.out.println("persona = " + persona);
        }
    }
}
