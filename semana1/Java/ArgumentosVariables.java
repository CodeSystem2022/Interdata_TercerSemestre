package test;

public class ArgumentosVariables {
    public static void main(String[] args) {
        imprimirNumeros(3, 4, 5);
        variosParametros("Pedro", "Picapiedra", 10);
    }
    
    private static void variosParametros(String nombre,String apellido, int ...numeros){
        System.out.println("Nombre = " + nombre+" Apellido = "+apellido);
        imprimirNumeros(numeros);
    }
    
    private static void imprimirNumeros(int ...numeros){
        for (int i = 0; i < numeros.length; i++){
            System.out.println("Elementos = " + numeros[i]);
        }
    }
}
