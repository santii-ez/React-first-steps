const express = require ('express');
const router = express.Router();
const mainControllers = require ('../controllers/mainControllers');



//routes DB
router.get("/", mainControllers.index);
router.get("/home", mainControllers.index);


router.get('/searchedProducts',mainControllers.searchedProducts)//ruta de acceso a lista de searchedProducts
router.get('/phones',mainControllers.phones)//ruta de acceso a lista de phones
router.get('/tablets',mainControllers.tablets)//ruta de acceso a lista de tablets
router.get('/laptops',mainControllers.laptops)//ruta de acceso a lista de laptops
router.get('/search',mainControllers.search)//ruta de acceso a la barra de busqueda

// exports
module.exports = router;
