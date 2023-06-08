import psycopg2

conexion = psycopg2.connect(user = 'postgres',password = 'admin',host = '127.0.0.1',port = '5432', database = 'test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'INSERT INTO persona (nombre,apellido,email)VALUES(%s, %s, %s)' # Placeholder
            valores=(
                ('Carlos','Lara','clara@gmail.com'),
                ('Marcos', 'Canto', 'mcanto@gmail.com'),
                ('Marcelo', 'Cuenca', 'mcuenca@gmail.com')
            )#Tupla de tuplas
        # De esta manera ejecutamos la sentencia
            cursor.executemany(sentencia, valores)
            # Se utiliza para guardar cambios en la base de datos
            # conexion.commit()
        # Recuperamos los registros que serian una lista
            registros_insertados = cursor.rowcount
            print(f'Los registros son: {registros_insertados}')
except Exception as e:
    print(f'Ocurrió un error {e}')
finally:
    conexion.close()