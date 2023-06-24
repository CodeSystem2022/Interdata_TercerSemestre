
//Franco Bianchi

package test;

import accesodatos.*;

public class TestInterfaces {
    public static void main(String[] args) {
        
        IAccesoDatos datos = new ImplementacionMySql(); // Instanciamos desde la clase
        
        // datos.listar(); // Se ejecuta con polimorfismo
        
        datos = new ImplementacionOracle();
        
        // datos.listar(); // Se ejecuta con polimorfismo
        
        imprimir(datos);
    }
    
    public static void imprimir(IAccesoDatos datos){
        
        datos.listar(); // Se ejecuta con polimorfismo
        
    }
    
    
}
