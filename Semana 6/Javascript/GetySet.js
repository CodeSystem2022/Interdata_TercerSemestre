let persona ={
    nombre: 'Sil',
    apellido: 'Prado',
    email: 'silpradoetc@gmail.com',
    edad: 27,
    idiomas: 'INGLÉS',
    nombreCompleto: function(){  //método o función en JavaScript   
        return this.nombre+' '+this.apellido;
    },
    get nombreEdad(){
        return this.nombre+' edad: '+this.edad;
    },
    get lang(){
        return this.idiomas.toLowerCase();
    },
    set lang(lang){
        this.idiomas = lang.toLowerCase();
    }
}
