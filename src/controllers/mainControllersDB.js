// Requires
const db = require ('../database/models');
const Op = db.Sequelize.Op;
const shuffle = require ('../modules/shuffleArray')
const fs = require ('fs');
const path = require ('path');

// controller DB

const controller = {
    //index.ejs
    prueba : async(req, res)=>{
            let article = ["article01", "article02", "article03", "article04"];
            let searchedProducts = await db.Product.findAll({ where : {section:'lo mas buscado'}});
            let phones = await db.Product.findAll({ where : {section:'celulares'}});
            let tablets = await db.Product.findAll({ where : {section:'tablets'}}); 
            let laptops = await db.Product.findAll({ where : {section:'laptops'}}); 
            return   res.render(path.join(__dirname,'../views/prueba'), {article: article, searchedProducts: shuffle(searchedProducts), phones: shuffle(phones), tablets :tshuffle(ablets), laptops: shuffle(laptops)})
    },
    //lista de lo más buscado
    searchedProducts: (req,res) =>{
        db.Product.findAll({where:{section:'lo mas buscado'}})
            .then((products) => {
                return res.render(path.join(__dirname,'../views/listProducts'), { products: products });
            })
        .catch(error => res.send(error));
    },
    //lista de phones
    phones: (req,res) =>{
        db.Product.findAll({where:{section:'phones'}})
            .then((products) => {
                return res.render(path.join(__dirname,'../views/listProducts'), { products: products });
            })
        .catch(error => res.send(error));
    },
    //lista de tablets
    tablets: (req,res) =>{
        db.Product.findAll({where:{section:'tablets'}})
            .then((products) => {
                return res.render(path.join(__dirname,'../views/listProducts'), { products: products });
            })
        .catch(error => res.send(error));
    },
    //lista de laptops
    laptops: (req,res) =>{
        db.Product.findAll({where:{section:'laptops'}})
            .then((products) => {
                return res.render(path.join(__dirname,'../views/listProducts'), { products: products });
            })
        .catch(error => res.send(error));
    },
    //formulario de busqueda
    search: (req,res) =>{
        //capturo el string que busca el usuaria que viaja por la url
        const {search}= req.query.search
        db.Product.findAll({where:{name: {[Op.like]:'%'+search+'%'}}})
            .then((products) => {
                return res.render(path.join(__dirname,'../views/listProducts'), { products: products });
            })
        .catch(error => res.send(error));
    }
}


module.exports = controller;