const express = require ('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');
const path = require("path");
const multer = require("multer");


router.get("/login", usersControllers.logIn);


module.exports = router;
