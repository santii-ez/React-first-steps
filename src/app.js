//Declaracion de frameworks
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require ('method-override') 

//Requiero los paquetes para trabajar lo referido a session y cookies
const session = require('express-session');
const cookieParser = require('cookie-parser');

//Requerir nuestro middleware - Aplicación
//Requiero el middleware que controla si el sitio está o no culminado
const mantenimiento = require('./middlewares/mantenimiento');
//Requerir el middleware que controla si el usuario está o no Logueado
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

//>montar rutas 
const productRoutes = require ('./routes/productRoutes');
const mainRoutes = require ('./routes/mainRoutes');
const usersRoutes = require ('./routes/usersRoutes');

//Declaracion de puertos
const port = 3000;

// views
app.use(express.static(path.join(__dirname,'views')));
// public
app.use(express.static(path.join(__dirname,'../public')));
// Decode Form URL Encoded Data
app.use(express.urlencoded({extended: false}));
// Put and Delete method
app.use(methodOverride ('_method'));

//EJS
app.set('view engine', 'ejs');

//Para mantener en sesion al usuario
app.use(session({
    secret : 'topSecret',
    resave: false,
    saveUninitialized: false,
}))

//Aqui coloco el Middleware para activar lo referido a las cookies
app.use(cookieParser());

//Middleware de aplicación que se encarga de controlar si el usuario está logueado o no
app.use(userLoggedMiddleware);


//match
app.use('/',mainRoutes);
app.use('/user',usersRoutes);
app.use('/product', productRoutes);

//montar el servidor                                                                                                                                                                                                                                                                                                                             
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    console.log(__dirname);
});
