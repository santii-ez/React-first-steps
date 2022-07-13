const fs = require ('fs');
const path = require ('path');
const { validationResult }= require('express-validator');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const { userInfo } = require('os');
const users = require('../models/User');



const controller = {
    

    login: (req, res) => {
        res.render('login')},

    processRegister: (req,res)=>{

        const resultValidation = validationResult(req);
        
        
         // primero valido mis validaciones que hice con express-validator

        if(resultValidation.errors.length > 0){

            return res.render('login', {

                errors : resultValidation.mapped(),
                oldData : req.body

            });

    
        }

        // segundo voy a validar que el usuario no se registre con el mismo email
         let userInDB = users.findByField('email', req.body.email);
         if(userInDB){
            return res.render('login', {

                errors : {
                    email: {
                      msg : 'Este email ya fue registrado'
                    }
                },
                oldData : req.body

                })
         }


       // tercero agregar avatar y el hash de las contrasenas
        //Me traigo el archivo plano de users y lo parseo.
        let archivoUsuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json')));

        let userToCreate = {
            // tomamos el ultimo id del ultimo usuario y le sumamos 1
            id: archivoUsuarios[archivoUsuarios.length - 1].id + 1,
            // agregamos a cada campo lo que viene del formulario
            fullName: req.body.fullName,
            lastName: req.body.lastName,
            email: req.body.email,
            password : bcrypt.hashSync(req.body.password, 10),
            avatar: req.file.filename,
            //Agregamos por default el rol de usuario común
            role: 1
        }

        users.create (userToCreate);
        return res.render('logIn');

        },

    ingress: (req,res) =>{
        //Creo el objeto errors para validar desde el back la entrada del usuario
        const errors = validationResult(req);
        //Verifico que el objeto errors este vacío
        if(errors.isEmpty()){
        //return res.send(errors.mapped());(con esto me fijo que trae el objeto errores)
            //Me traigo el archivo plano de users y lo parseo.
            let archivoUsuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json')));
            //Busco el objeto literal que coincide con el mail que viaja en el body del formulario
            let usuarioLogueado = archivoUsuarios.find(usuario => usuario.email == req.body.correo)
            //return res.send(usuarioLogueado);(con esto me fijo que tiene el objeto que acabo de crear con el fitro que hice)
            //Como podemos modificar nuestros req.body
            delete usuarioLogueado.password;//?????????? preguntar la logica del negocio detras de esto
            req.session.usuario = usuarioLogueado;  //Esto sirve para navegar por la pagina con el usuario logeado
            //Aquí voy a guardar las cookies del usuario que se loguea
            if(req.body.recordarme){
                res.cookie('email',usuarioLogueado.email,{maxAge: 1000 * 60 * 60 * 24})//tiempo que guardo la cookie
            }
            //Si todo sale bien hice que el usuario entre a su cuenta y lo envio a la pagina prinsipal
           
            return res.redirect('/');
        }else{
          //Si el usuario se equivocó lo mando de nuevo a la vista del formulario y le levanto los errores
          res.render(path.resolve(__dirname, '../views/logIn'),{errors:errors.mapped(),old:req.body});        
        }
      },

    logout: (req,res) =>{
        req.session.destroy();
        res.cookie('email',null,{maxAge: -1});
        res.redirect('/')
    }
};

module.exports = controller;