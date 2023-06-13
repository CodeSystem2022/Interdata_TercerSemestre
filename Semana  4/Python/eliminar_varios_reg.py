import psycopg2  # Conectamos a postgres

conexion = psycopg2.connect(
    user='postgres',
    password='admin',
    host='127.0.0.1',
    port='5432',
    database='test_bd')

try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'DELETE FROM personas WHERE id_persona IN %s'
            entrada = input("Digite los id a eliminar: ")
            valores = (tuple(entrada.split(',')),)
            cursor.execute(sentencia, valores)  # Ejecutamos sentencia
            registros_eliminados = cursor.rowcount
            print(f"Los registros eliminados son: {registros_eliminados}")
except Exception as e:
    print(f"Ocurrio un error: {e}")
finally:
    conexion.close()
