const fs = require('fs');
const path = require('path');
const db = require ('../database/models')
        
let userLoggedMiddleware = async (req,res,next) =>{
    //Variable locals (super global - vive en las vistas )
    res.locals.usuario = false;
    if(req.session.usuario){
        res.locals.usuario = req.session.usuario;
        return next();
    }else if(req.cookies.email){
        let usuario = await db.User.findOne({where: {email: req.cookies.email}})
        //return res.send(usuario);
        //delete usuario.password;
        req.session.usuario = usuario;
        res.locals.usuario = usuario;
        return next();
    }else{
        return next();
    }
}

module.exports = userLoggedMiddleware 