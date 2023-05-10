# -*- coding: utf-8 -*-
"""
Tecnicatura en Programación
Daiana Figueroa
"""

# Declaramos una variable
# "w": write. Abre el archivo en solo modo escritura. 
# Va a sustituir el archivo original si existe o crear uno nuevo.
# UTF-8 permite codificar cualquiera de los caracteres de Unicode 

try:
    archivo = open("prueba.txt", "w", encoding="utf8")
    archivo.write("Programamos con diferentes tipos de archivos\n")
    archivo.write("En este caso en txt\n")
    archivo.write("Podemos escribir varias líneas de código\n")
    archivo.write("Pero los acentos no van arrojar error\n")
    archivo.write("Para que figuren los acentos usaremos encoding=utf8\n")
    archivo.write("Letras para manipular archivos (r: read),(a: append)\n")
    archivo.write("(w: write), (x: crea un archivo), (t: esta es solo para texto\n")
    archivo.write("(b: archivos binarios), (w+: lee y escribe)\n")
    
except Exception as e:
    print(e)
# Con finally siempre se va a cerrar   
finally:
    archivo.close()
    
    