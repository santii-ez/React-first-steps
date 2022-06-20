const express = require ('express');
const router = express.Router();
const path = require("path");
const multer = require("multer");

const productControllers = require ('../controllers/productControllers')

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, '../public/images/products'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  })

const uploadFile = multer({ storage: storage });


// routes
router.get("/productCart", productControllers.cart );

router.get("/productDetail/:id", productControllers.productDetail);
// Create a new product
router.get('/create', productControllers.newProduct)
router.post('/store', uploadFile.single("images"),productControllers.store)

//List products
router.get("/", productControllers.listProducts);

//Delete products
router.delete("/delete/:id", productControllers.delete)

// router.get("/listPhones", productControllers.listProducts);

// router.get("/listNotebook", productControllers.listNotebook);

// router.get("/listTablet", productControllers.listTablet);


// Edit products
router.get("/edit/:id", productControllers.editView)
router.put("/edit/:id",uploadFile.single("images"), productControllers.editProduct)
// exports
module.exports = router;

