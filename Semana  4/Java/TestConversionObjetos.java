//Franco Bianchi

package test;

import domain.*; //Asterisco para heredar todas las clases

public class TestConversionObjetos{ 

    public static void main(String[] args) {
        Empleado empleado;
        empleado = Escritor("Pepe",20000,TipoEscritura.CLASICO);//Pasamos los parametros
        
      //Downcasting(convertir clase padre a hijo)
      
      ((Escritor)empleado).getTipoEscritura();//Sintaxis corta
      
      //Upcasting(convertir clase hijo a padre)
      
      Empleado empleado1 = escritor;
    }


}
