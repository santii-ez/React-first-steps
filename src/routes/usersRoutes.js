const express = require ('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');
const path = require("path");
const multer = require("multer");
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const db = require("../database/models")

//requerir express validator
const { body } = require('express-validator')
//Requiero  bcryptjs para comparar las contraseñas hash
const bcrypt = require('bcryptjs');
//Requiero fs ya que debo leer el archivo json de usuarios y verificar si el usuario que se está reistrando existe o no
const fs = require('fs');

//Me traigo el archivo JSON con los usuarios registrados y lo parseo para usarlo mas adelante
// const archivosUsers = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json')))

//multer
//https://www.npmjs.com/package/multer
const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb (null,path.resolve(__dirname, '../../public/images/users'))//Acá se indica la ruta donde se guardará la imagen
    },

    filename: (req, file, cb)=>{
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`//Acá se genera el nombre del archivo para que no se repita en la carpeta raiz y se pisen los archivos
        cb (null, fileName)
    }
})

const upLoadFile = multer({storage})

//Ejecucion de las validaciones para el formulario de registro

const validationsRegister = [
    body('fullName').notEmpty().withMessage('Tienes que ingresar su nombre'),
    body('lastName').notEmpty().withMessage('Tienes que ingresar su apellido'),
    body('email').notEmpty().withMessage('Tienes que ingresar su email').bail()
    .isEmail(). withMessage('Ingrese un email valido'),
    body('password').notEmpty().withMessage('Tienes que ingresar su contraseña'),
    body('passconfcon').custom((value, {req}) =>{
        if(req.body.password == value ){
            return true    // Si yo retorno un true  no se muestra el error     
        }else{
            return false   // Si retorno un false si se muestra el error
        }    
    }).withMessage('Las contraseñas deben ser iguales'),
    body('avatar').custom((value, {req})=>{
        let file = req.file
        let acceptedExtensions = ['.jpg','.jpeg', '.png', '.gif']
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

//Ejecucion de las validaciones para el formulario de ingreso
const validationsLogin = [
    //Validacion en el back del mail
    body('correo').isEmail().withMessage('Por favor, ingrese un formato de mail válido'),
    //Validacion en el back de la contraseña
    body('contrasena').notEmpty().withMessage('Por favor, escriba su contraseña'),
    //Si pasa las dos validaciones anteriores, se verifica en el array de archivosUsers que exista el usuario
    body('correo').custom( async value => {
      let emailCheck = await db.User.findAll ({where: {email: value}})
      
      if (emailCheck.length == 0) {
            console.log("No user exist")
            return Promise.reject()
            }
        }).withMessage('Su email no se encuentra registrado'),

    //Si pasa las 3 validaciones solo queda confirmar que la contraseña que ingreso es la correcta
    body('contrasena').custom(async (value, {req}) =>{
        let emailCheck = await db.User.findOne ({where: {email: req.body.correo}})
        if (emailCheck) {
            
            if(!bcrypt.compareSync(value, emailCheck.password)){
                
              return Promise.reject()
            }}            
    }).withMessage('Credenciales Inválidas'),
]


//Rutas

// Formulario de registro y login
router.get("/login", guestMiddleware, usersControllers.login);

//crea a tu cuenta
router.post("/login", upLoadFile.single('avatar'), validationsRegister, usersControllers.processRegister)

//iniciar secion
router.post('/', validationsLogin, usersControllers.getIn) 

//cerrar secion
router.get("/logout", authMiddleware, usersControllers.logout)

module.exports = router;
