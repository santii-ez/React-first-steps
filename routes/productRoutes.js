const express = require ('express');
const router = express.Router();
const productControllers = require ('../controllers/productControllers')



router.get("/productDetail", productControllers.productDetail );

router.get("/productCart", productControllers.carrito );

/*router.get("listado/:idProducto?", productControllers.detalleProducto );*/


module.exports =router

