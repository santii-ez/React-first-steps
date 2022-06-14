const fs = require ('fs');
const path = require ('path')


// leer el archivo
const filePath = path.join(__dirname, "../data/productsDataBase.json")

const controllers = {
    
    cart : (req, res) => {
        res.render("productCart");
    },
    productDetail : (req, res) => {
        let products = JSON.parse(fs.readFileSync (filePath, "utf-8"))

        let detalleProducto = products.filter(item => {
            return item.id == parseInt(req.params.id)
        })

        res.render('productDetail', {detalleProducto: detalleProducto})
    },

    listProducts :(req, res)=> {
        let products = JSON.parse(fs.readFileSync (filePath, "utf-8"))

        res.render('listProducts', {products: products})
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
}


module.exports = controllers