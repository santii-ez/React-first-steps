const express = require ('express');
const router = express.Router();
const productControllers = require ('../controllers/productControllers');

// routes
router.get("/productCart", productControllers.cart );

router.get("/productDetail", productControllers.productDetail);

router.get('/newProduct', productControllers.newProduct);

router.get("/listProducts", productControllers.listProducts);

// exports
module.exports = router;

