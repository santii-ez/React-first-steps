const fs = require ('fs');
const path = require ('path');
const db = require ('./../database/models')


const controllers = {

    cart : (req, res) => {
        res.render(path.join(__dirname,'../views/productCart.ejs'));
    },

    productDetail : (req, res) => {
        db.Product.findByPk(req.params.id)
            .then((product) => {
                return res.render(path.join(__dirname, '../views/productDetail.ejs'), { product: product });
            })
            .catch(error => res.send(error));
    },

    listProducts :(req, res)=> {
        db.Product.findAll()
            .then((products) => {
                return res.render(path.join(__dirname,'../views/listProducts.ejs'), { products: products });
            })
            .catch(error => res.send(error));
    },
   
    newProduct: (req, res) => {
        res.render(path.join(__dirname,'../views/newProduct.ejs'));
    },
        
    store: (req, res) => {
        db.Product.create(
            {
           name: req.body.name,
           description:req.body.description,
           price_product:  req.body.price,
           discount: req.body.discount,
           category: req.body.category,
           image_product: req.file.filename,
           section: req.body.section,
           brand: req.body.brand
       })
       .then(resultado =>{
          
           return res.redirect('/product')
       })

        
    
        },

        delete: (req, res) => {
            db.Product.destroy({
                where: { id: req.params.id }
            })
            .then(resultado => {
            return res.redirect('/product')
         })
        },

        editView: async (req, res) => {
            let productToEdit = await db.Product.findAll({where: {id: req.params.id}})
            

            res.render (path.join(__dirname,'../views/productEdit.ejs'), {productToEdit: productToEdit})
        },
        
        editProduct: async (req, res) => {
            let product = await db.Product.findByPk(req.params.id)
            let oldImage = product.image_product
            let updateProduct = await db.Product.update(
                {
                    name: req.body.name,
                    description:req.body.description,
                    price_product:  req.body.price,
                    discount: req.body.discount,
                    category: req.body.category,
                    image_product: req.file ? req.file.filename : oldImage,
                    section: req.body.section,
                    brand: req.body.brand
                },
                {
                   where:{ id: req.params.id} 
                }
            )
                return res.redirect('/product')
              

        }
}


module.exports = controllers