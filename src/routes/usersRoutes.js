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
const validations = [
    body('fullName').notEmpty().withMessage('Tienes que ingresar su nombre'),
    body('lastName').notEmpty().withMessage('Tienes que ingresar su apellido'),
    body('email').notEmpty().withMessage('Tienes que ingresar su email'),
    body('contrasena').notEmpty().withMessage('Tienes que ingresar su contraseña'),
]

// Formulario de registro y login
router.get("/login", usersControllers.login);

// Procesar el registro
router.post("/login", upLoadFile.single('avatar'), validations, usersControllers.processRegister)


module.exports = router;
