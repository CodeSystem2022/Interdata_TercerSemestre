"""
Tecnicatura en Programación
Daiana Figueroa
"""

class ManejoArchivos:
    def __init__(self, nombre):
        self.nombre = nombre
    
    def __enter__(self):
        print("Obtenemos el recurso".center(50, "-"))
        # Encapsulamos el código
        self.nombre = open(self.nombre, 'r', encoding="utf8")
        return self.nombre
    def __exit__(self, tipo_exception, valor_exception, traza_error):
        print("Finaliza el recurso".center(50, "-"))
        if self.nombre:
            self.nombre.close()