const fs = require ('fs');
const path = require ('path')


// leer el archivo
const filePath = path.join(__dirname, "../data/productsDataBase.json")

const controllers = {
    /*detalleProducto : (req, res) => {
        if (req.params.idProducto == undefined) {
            res.send('Bienbenido a la seccion de productos')
        } 
        else {
            res.send('Bienbenido al producto: ' + req.params.idProducto)
        };   
    },*/
    cart : (req, res) => {
        res.render("productCart");
    },
    productDetail : (req, res) => {
        res.render('productDetail');
    },

    listProducts :(req, res)=> {
        let products = JSON.parse(fs.readFileSync (filePath, "utf-8"))

        res.render('listProducts', {products: products})
    },

    newProduct: (req, res) => {
        res.render('newProduct');
    }
};


module.exports = controllers;