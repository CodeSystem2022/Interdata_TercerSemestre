
package test

import static aritmetica.Aritmetica.division; // Importamos la clase

public class TestExepciones{
    public static void main(String[] args)  {
          int resultado = 0;
          try{
              resultado = division(10,0);
          } catch(Exception e){
              System.out.printIn("Ocurrio un Error");
              e.printStackTrace(System.out) // Pila de excepciones
              System.out.printIn(e.gerMessage());
          }  


      
    }

}
