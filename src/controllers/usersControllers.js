const fs = require ('fs');
const path = require ('path');
const { validationResult }= require('express-validator');
const { userInfo } = require('os');
const bcryptjs = require('bcryptjs')
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
         let userToCreate = {
             id : req.body.id,
             fullName: req.body.fullName,
             lastName: req.body.lastName,
             email: req.body.email,
             contrasena : bcryptjs.hashSync(req.body.contrasena, 10),
             avatar: req.file.filename
         }


      

        users.create (userToCreate);
        return res.send('ok, se guardo al usuario');

        }

    }
 


module.exports = controller;