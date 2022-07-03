const fs = require ('fs');
const path = require ('path');


   //USUARIO REGISTRO

   const users = {

    // archivo que hace referencia a la base de datos
    fileName : './data/users.json',

    // para leer los archivos json y convertirlos en un array

    getData: function (){
      return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },

    // metodo para generar un ID

    generateId : function(){
       

       let allUsers = this.findAll();
       
       let lastUser = allUsers.pop();

       if(lastUser){
       return lastUser.id + 1 
       }

    },
    // metodo para buscar a todos los usuarios 
    findAll : function () {
        return this.getData()
    },

    //  metodo para buscar un usuario por ID 

    findById : function(id) {

     // 1) obtener a todos los usuarios 
     let allUsers = this.findAll();

     // 2) encontrar el id seleccionado
     let userFound = allUsers.find(oneUser => oneUser.id == id);
     return userFound
    },

    //metodo para buscar un usuario por algun campo

    findByField : function(field, text){
      let allUsers = this.findAll();
      let userFound = allUsers.find(oneUser => oneUser[field] === text );
      return userFound

    },

    create: function (userData) {

    // traer a todos los usuarios
    let allUsers = this.findAll();

    // crear nuevo usuario
    let newUser= {
        id: this.generateId (),
        ...userData
       }

    //pushear al nuevo usuario
    allUsers.push(newUser);

    //escribirlo en el archivo json

    fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));

    return newUser
    }
}

module.exports = users