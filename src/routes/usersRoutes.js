const express = require ('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');
const path = require("path");
const multer = require("multer");

//multer

const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb (null,'../public/images/users');
    },

    filename: (req, file, cb)=>{
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`
        cb (null, fileName)
    }
})

const upLoadFile = multer({storage})

//requerir express validator

const { body } = require('express-validator')
const validationsRegister = [
    body('fullName').notEmpty().withMessage('Tienes que ingresar su nombre'),
    body('lastName').notEmpty().withMessage('Tienes que ingresar su apellido'),
    body('email').notEmpty().withMessage('Tienes que ingresar su email').bail()
    .isEmail(). withMessage('Ingrese un email valido'),
    body('contrasena').notEmpty().withMessage('Tienes que ingresar su contraseña'),
    body('passconfcon').custom((value, {req}) =>{
        if(req.body.contrasena == value ){
            return true    // Si yo retorno un true  no se muestra el error     
        }else{
            return false   // Si retorno un false si se muestra el error
        }    
    }).withMessage('Las contraseñas deben ser iguales'),
    body('avatar').custom((value, {req})=>{
        let file = req.file
        let acceptedExtensions = ['.jpg', '.png', '.gif']
        if(!file){
            throw new Error ('Tienes que subir una imagen')
        }

        else{

            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)){
     
                throw new Error (`Las extensiones de archivo permitidas son  ${acceptedExtensions.join(' , ')}`);
            }
        }
        return true
    })
]

// Formulario de registro y login
router.get("/login", usersControllers.login);

// Procesar el registro
router.post("/login", upLoadFile.single('avatar'), validationsRegister, usersControllers.processRegister)


module.exports = router;
