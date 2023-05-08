archivo = open('prueba.txt','r',encoding='utf8') # las letras son:"r= read""a= append""x=" "w= write"
#print(archivo.read())
#print(archivo.read(16))
#print(archivo.read(10))
print(archivo.readline())
print(archivo.readline())

# vamos a iterar el archivo, cada una de las lineas
# for linea in archivo:
    # print(linea) # itramos todos los elemntos del archivo
    # print(archivo.readline()[3]) #accedemos al archivo como si fuera una lista

# Anexo de informacion, copiamos a otro
archivo2 = open('copia.txt','w',encoding='utf8')
archivo2.write(archivo.read())
archivo.close() # Cerramos el primer archivo
archivo2.close() # Cerramos el segundo archivo

print('Se ha terminado el proceso de leer y copiar archivos')