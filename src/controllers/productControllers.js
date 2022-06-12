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

    listPhones :(req, res)=> {
        res.render('listPhones');
    },

    newProduct: (req, res) => {
        res.render('newProduct');
    }
};


module.exports = controllers;