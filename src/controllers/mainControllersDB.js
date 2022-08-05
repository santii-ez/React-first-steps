// Requires
const db = require ('../database/models');
const Op = db.Sequelize.Op;
const fs = require ('fs');
const path = require ('path');
const { where } = require('sequelize/types');

// controller DB

const controller = {
    prueba : (req, res)=>{
        db.Product.findAll()
        .then ((product)=>{
            let article = ["article01", "article02", "article03", "article04"];
            let searchedProducts = product.section == 'lo mas buscado'
            let phones = product.category == 'phones'
            let tablets = product.category == 'tablets'
            let laptops = product.category == 'laptops'
            return   res.render(path.join(__dirname,'../views/prueba'), {article: article,
                                                                        searchedProducts: searchedProducts, 
                                                                        phones: phones, 
                                                                        tablets :tablets, 
                                                                        laptops: laptops});
        })
        .catch(error => res.send(error));
    }
    
}


module.exports = controller;