const express = require ('express');
const router = express.Router();
const mainControllersJSON = require ('../controllers/mainControllersJSON');
const mainControllersDB = require ('../controllers/mainControllersDB');

//routes JSON
router.get("/", mainControllersJSON.index);
router.get("/home", mainControllersJSON.index);

//routes DB
router.get("/db", mainControllersDB.prueba);//por ahora levanta un ejs de prueba

// exports
module.exports = router;
