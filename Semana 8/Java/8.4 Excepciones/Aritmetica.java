
package aritmetica;

import exepciones.OperacionExcepcion; // Importamos la excepcion

public class Aritmetica {
    public static int division(int numerador, int denominador)
           throws OperacionExcepcion{ // Agregamos a la firma la posible excepcion
        if (denominador == 0){
            throw new OperacionExcepcion("División entre cero"); //Arroja la excepcion
        }  
        return numerador / denominador;     
    }
}
