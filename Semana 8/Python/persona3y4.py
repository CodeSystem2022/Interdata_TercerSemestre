@classmethod
    def insertar(cls, persona):
        with CursorDelPool() as cursor:
            valores = (persona.nombre, persona.apellido, persona.email)
            cursor.execute(cls._INSERTAR, valores)
            log.debug(f'Persona insertada: {persona}')
            return cursor.rowcount

@classmethod
  def actualizar(cls, persona):
       with CursorDelPool() as cursor:
          valores = (persona.nombre, persona.apellido, persona.email, persona.id_persona)
          cursor.execute(cls._ACTULIZAR, valores)
          log.debug(f'Persona actualizada: {persona}')
           return cursor.rowcount


if __name__ == '__main__':
    # actualizar un registro
    persona1 = Persona(1, 'Ignacio', 'Buchter', 'ignaciobuchter48@gmail.com')
    personas_actualizadas = PersonaDAO.actualizar(persona1)
    log.debug(f'Personas actualizadas: {personas_actualizadas}')

    # insertar un registro
    persona1 = Persona(nombre='juan', apellido='romero', email='Jromero@gmail.com')
    personas_insertadas = PersonaDAO.insertar(persona1)
    log.debug(f'Personas Insertadas: {personas_insertadas}')
