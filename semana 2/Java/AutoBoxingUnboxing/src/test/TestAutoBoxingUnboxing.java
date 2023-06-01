//Franco Bianchi

package test;


public class TestAutoBoxingUnboxing {
    public static void main(String[] args) {
        
        
        
        int enteroPrim = 10;
        System.out.println("enteroPrim = " + enteroPrim);
        Integer entero = 10;
        System.out.println("entero = " + entero.doubleValue());//Autoboxing
        
        int entero2 = entero;//Unboxing
        System.out.println("entero2 = " + entero2);
        
    }
}
