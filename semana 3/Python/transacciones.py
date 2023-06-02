import psycopg2 as bd  # Conexión a postgres

conexion = bd.connect(
    user="postgres",
    password="admin",
    host="127.0.0.1",
    port="5432",
    database="test_bd"
)

try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = """INSERT INTO persona(nombre, apellido, email)
            VALUES (%s, %s, %s)"""

            valores = ("Gabriel", "Chavez", "gachavez@mail.com")
            cursor.execute(sentencia, valores)

            sentencia = """UPDATE persona SET
            nombre = %s, apellido = %s, email = %s
            WHERE \"idPersona\" = %s;"""  # id_persona

            valores = ("Emanuel", "Perez", "emaperez@mail.com", 1)
            cursor.execute(sentencia, valores)

except Exception as e:
    print(f"Ocurrió un error, se hizo un rollback - Error: {e}")

finally:
    conexion.close()

print("Se termina la transacción")
