const express = require ('express');
const router = express.Router();
const productControllers = require ('../controllers/productControllers');

// routes
router.get("/productCart", productControllers.cart );

router.get("/productDetail/:idProduct", productControllers.productDetail);

router.get('/newProduct', productControllers.newProduct);

router.get("/listPhones", productControllers.listPhones);

// exports
module.exports = router;

