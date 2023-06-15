import psycopg2 as bd

conexion = bd.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
    #conexion.autocommit = False
    cursor = conexion.cursor()
    sentencia = 'INSERT INTO persona(nombre, apellido, email)VALUES (%s, %s, %s)'
    valores = ('Elba','Gayo', 'elba@gmail.com')

    cursor.execute(sentencia, valores)
    conexion.commit()  # se hace el commit manualmente
    print('Termina la transaccion')
except Exception as e:
    conexion.rollback()       # en caso de que el commit no se haga por x error, se hace un rollback..
    print(f'Ocurrio un error: {e}')    #..y no se guardan los cambios
finally:
    conexion.close()
