class Pelicula:
    def __init__(self, nombre):
        self._nombre = nombre
    
    def __str__(self):
        return f'Pelicula: {self._nombre}'
    
    #Metodo GET
    @property
    def nombre(self):
        return self._nombre

    #Metodo SET
    @nombre.setter
    def nombre(self, nombre):
        self._nombre = nombre
