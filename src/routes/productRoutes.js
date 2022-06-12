const express = require ('express');
const router = express.Router();
const productControllers = require ('../controllers/productControllers');

// routes
router.get("/productDetail", productControllers.productDetail );

router.get("/productCart", productControllers.carrito );

router.get("/listPhones", productControllers.listaCelulares );

/*router.get("listado/:idProducto?", productControllers.detalleProducto );*/

router.get('/newProduct', productControllers.newProduct);

// exports
module.exports = router;

