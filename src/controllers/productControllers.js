const fs = require ('fs');
const path = require ('path');
const db = require ('./../database/models')


// leer el archivo
const filePath = path.join(__dirname, "../data/productsDataBase.json")

const controllers = {

    prueba: (req, res) => {
        let sale = db.Sale.findAll({
            include: [{association: 'user'}, {association: 'products'}]
        })
        let sale_detail = db.Sale_detail.findAll ()

        Promise.all ([sale, sale_detail])
        .then( ([sale, sale_detail]) =>{
            res.send({sale, sale_detail})
        });   
    },
    
    cart : (req, res) => {
        res.render(path.join(__dirname,'../views/productCart.ejs'));
    },

    productDetail : (req, res) => {
        let products = JSON.parse(fs.readFileSync (filePath, "utf-8"))

        let detalleProducto = products.filter(item => {
            return item.id == parseInt(req.params.id)
        })

        res.render(path.join(__dirname,'../views/productDetail.ejs'), {detalleProducto: detalleProducto})
    },

    listProducts :(req, res)=> {
        let products = JSON.parse(fs.readFileSync (filePath, "utf-8"))

        res.render(path.join(__dirname,'../views/listProducts.ejs'), {products: products})
    },
   

    newProduct: (req, res) => {
        res.render('newProduct');
    },
        
    store: (req, res) => {
        let products = JSON.parse(fs.readFileSync(filePath, "utf-8"))
    
        let newProduct = {
            
            id: products [products.length -1].id + 1,
            name: req.body.name,
            description:req.body.description,
            price: parseInt (req.body.price),
            discount:parseInt (req.body.discount),
            category: req.body.category,
            image: req.file.filename,
            section: req.body.section,
            marca: req.body.brand,
        }
    
       
        products.push (newProduct)
    
        let newProductStore = JSON.stringify(products, null, 2);
    
        fs.writeFileSync(filePath, newProductStore, 'utf-8')	
    
        return res.redirect('/product')
    
        },

        delete: (req, res) => {
            let products = JSON.parse(fs.readFileSync(filePath, "utf-8"));
     

            products = products.filter (item => {
                return item.id != req.params.id
            })

            let newArrayProducts = JSON.stringify(products, null, 2);
    
            fs.writeFileSync(filePath, newArrayProducts, 'utf-8')	
    
            return res.redirect('/product')
        },

        editView: (req, res) => {
            let products = JSON.parse(fs.readFileSync(filePath, "utf-8"))

            productToEdit = products.filter (item =>{
                return item.id == req.params.id
            }) 

            res.render (path.join(__dirname,'../views/productEdit.ejs'), {productToEdit: productToEdit})
        },
        editProduct: (req, res) => {
            let products = JSON.parse(fs.readFileSync(filePath, "utf-8"))
             
            

            productToEdit = products.filter (item => {
                return item.id == req.params.id
            })

            oldImage = productToEdit[0].image
            
            req.body.id = req.params.id;
            req.body.image = oldImage
           
            let productUpdate = products.map((prod) => {
                if (prod.id == req.body.id) {
                  let newProduct = {
                    id: prod.id,
                    name: req.body.name,
                    description:req.body.description,
                    price: parseInt (req.body.price),
                    discount:parseInt (req.body.discount),
                    category: req.body.category,
                    image: req.body.image,
                    section: req.body.section,
                    marca: req.body.brand,
                  };
                  if (req.file) {
                    newProduct.image = req.file.filename;
                  }
                  console.log(newProduct)
                  return newProduct;
                }
                return prod;
              });
              

            let newArrayProducts = JSON.stringify(productUpdate, null, 2);
    
            fs.writeFileSync(filePath, newArrayProducts, 'utf-8')	
    
            return res.redirect('/product')
              

        }
}


module.exports = controllers