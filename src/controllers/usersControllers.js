const fs = require ('fs');
const path = require ('path');
const { validationResult }= require('express-validator');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const db = require('../database/models')



const controller = {
    

    login: (req, res) => {
        res.render(path.join(__dirname,'../views/logIn.ejs'))},

    processRegister: (req,res)=>{

        const resultValidation = validationResult(req);
        
        
         // primero valido mis validaciones que hice con express-validator

        if(resultValidation.errors.length > 0){

            return res.render(path.join(__dirname,'../views/logIn'), {

                errors : resultValidation.mapped(),
                oldData : req.body

            });

    
        }

        // segundo voy a validar que el usuario no se registre con el mismo email
        db.User.findAll({
            where : {
                email: req.body.email
            }
        })
        .then(userInDB => {
            if(userInDB.length > 0){
                return res.render('login', {
    
                    errors : {
                        email: {
                          msg : 'Este email ya fue registrado'
                        }
                    },
                    oldData : req.body
    
                    })
             } else {
                db.User.create(
                        {                          
                            first_name: req.body.fullName,
                            last_name: req.body.lastName,
                            email: req.body.email,
                            password : bcrypt.hashSync(req.body.passconfcon, 10),
                            image_product: req.file.filename,
                            role: 1
                        }
                    )
                    .then(()=> {
                        return res.render(path.join(__dirname,'../views/logIn.ejs'))    
                })
            }
        })
        .catch(error => res.send(error))
    },

    getIn: async (req,res) =>{
        //Creo el objeto errors para validar desde el back la entrada del usuario
        const errors = await validationResult(req);
         
        if(errors.isEmpty()){
            let usuarioLogueado = await db.User.findOne ({where: {email: req.body.correo}})
            
            delete usuarioLogueado.password;
            
            req.session.usuario = usuarioLogueado

            if (req.body.recordarme) {
                res.cookie('email',usuarioLogueado.email,{maxAge: 1000 * 60 * 60 * 24})
                
            }
            return res.redirect('/');
        } else {
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