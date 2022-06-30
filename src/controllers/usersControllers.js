const fs = require ('fs');
const path = require ('path');
const { validationResult }= require('express-validator');
const bcrypt = require('bcryptjs');
const multer = require('multer');

const controller = {
    login: (req, res) => {
        res.render('login')},

    processRegister: (req,res)=>{

        const resultValidation = validationResult(req);
        
        

        if(resultValidation.errors.length > 0){

            return res.render('login', {

                errors : resultValidation.mapped(),
                oldData : req.body

            })
            
        }

        res.redirect('/')

    },
    ingress: 'mañana lo sigo',
    

};

module.exports = controller;