// requerir modulos
const shuffle = require ('../modules/shuffleArray')
// requerir librerias fs y path
const fs = require ('fs');
const path = require ('path')


// leer el archivo
const filePath = path.join(__dirname, "../data/productsDataBase.json")

// controller
const controllers = {
    cart : (req, res) => {
        res.render("productCart");
    },
    productDetail : (req, res) => {
        res.render('productDetail');
    },

    listPhones :(req, res)=> {
        res.render('listPhones');
    },
    listNotebook :(req, res)=> {
        let article = ["article01", "article02", "article03", "article04"];
        let products = JSON.parse(fs.readFileSync (filePath, "utf-8"));
        //laptops
        let laptops = products.filter (item => {
            return item.category == "laptops"
        });
        res.render('listNotebook', {products: products, searchedProducts: shuffle(searchedProducts), article: article,  laptops: shuffle(laptops)});
    },
    listTablet :(req, res)=> {
        res.render('listTablet');
    },

    newProduct: (req, res) => {
        res.render('newProduct');
    }
};


module.exports = controllers;