const express = require ('express');
const router = express.Router();
const mainControllersJSON = require ('../controllers/mainControllersJSON');
const mainControllersDB = require ('../controllers/mainControllersDB');

//routes JSON
router.get("/", mainControllersJSON.index);
router.get("/home", mainControllersJSON.index);

//routes DB
router.get("/db", mainControllersDB.prueba);//por ahora levanta un ejs de prueba
router.get('/searchedProducts',mainControllersDB.searchedProducts)//ruta de acceso a lista de searchedProducts
router.get('/phones',mainControllersDB.phones)//ruta de acceso a lista de phones
router.get('/tablets',mainControllersDB.tablets)//ruta de acceso a lista de tablets
router.get('/laptops',mainControllersDB.laptops)//ruta de acceso a lista de laptops
router.get('/search',mainControllersDB.search)//ruta de acceso a la barra de busqueda

// exports
module.exports = router;
