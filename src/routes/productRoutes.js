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

//list of products

router.get("/", productControllers.listProducts);

// exports
module.exports = router;

