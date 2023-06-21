import psycopg2 as bd # Esto es para conectarnos a postgres

conexion = bd.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
    conexion.autocommit = False # esto directamente no deberia estar, inicia la transaccion
    cursor = conexion.cursor()
    sentencia = 'INSERT INTO persona(nombre, apellido, email) VALUES(%s, %s, %s)'
    valores = ('Clara', 'Esparza', 'cesparza@mail.com')
    cursor.execute(sentencia, valores)

    sentencia = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
    valores = ('Juan', 'Juarez', 'jcjuarez@mail.com', 13)
    cursor.execute(sentencia, valores)

    conexion.commit() # con el commit manual cerramos la transaccion

    print('termina la transaccion')
    conexion.commit()  # hacemos el commit manualmente

except Exception as e:
    conexion.rollback()
    print(f'Ocurrio un error, se hizo un rollback: {e}')
finally:
    conexion.close()