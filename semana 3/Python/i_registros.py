# Franco Bianchi

import psycopg2

conexion = psycopg2.connect(user="postgres", password="admin",host="127.0.0.1", port="5432",database="testdb")

try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = "INSERT INTO persona (nombre, apellido, email)VALUES (%s, %s, %s)"#Comando a ejecutar por postgre
            valores = ("Carlos", "Lara", "clara@mail.com")#Valores a insertar
            cursor.execute(sentencia,valores)#Ejecutamos
            registros_insertados = cursor.rowcount
            print(f'Los registros insertados son: {resgistros_insertados}')

except Exception as e:
    print(f"Error: {e}")
finally:
    conexion.close()
