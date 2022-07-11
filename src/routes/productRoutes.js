const express = require ('express');
const router = express.Router();
const path = require("path");
const multer = require("multer");
const adminMiddleware = require('../middlewares/adminMiddleware')

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

//List products
router.get("/", productControllers.listProducts);

router.get("/productCart", productControllers.cart );

router.get("/productDetail/:id", productControllers.productDetail);


// Create a new product
router.get('/create', adminMiddleware,  productControllers.newProduct)
router.post('/store', adminMiddleware, uploadFile.single("images"),productControllers.store)

//Delete products
router.delete("/delete/:id", adminMiddleware, productControllers.delete)


// Edit products
router.get("/edit/:id", adminMiddleware, productControllers.editView)
router.put("/edit/:id", adminMiddleware, uploadFile.single("images"), productControllers.editProduct)


module.exports = router;

