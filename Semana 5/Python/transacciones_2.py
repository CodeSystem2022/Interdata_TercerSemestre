import psycopg2 as bd

conexion = bd.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
    #   conexion.autocommit = False   # esto no deberia estar, se inica la transaccion
    cursor = conexion.cursor()
    sentencia = 'INSERT INTO persona(nombre, apellido, email)VALUES (%s, %s, %s)'
    valores = ('Silvina', 'Prado', 'spppp@gmail.com')
    cursor.execute(sentencia, valores)
    sentencia = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
    valores = ('Juan', 'Etes', 'jetes@gmail.com', 2)
    cursor.execute(sentencia, valores)
    conexion.commit()  # se hace el commit manualmente   # aqui se cierra la transaccion
    print('Termina la transaccion')
except Exception as e:
    conexion.rollback()  # en caso de que el commit no se haga por x error, se hace un rollback..
    print(f'Ocurrio un error: {e}')  # ..y no se guardan los cambios
finally:
    conexion.close()
