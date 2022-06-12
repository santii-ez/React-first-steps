const express = require ('express');
const router = express.Router();
const mainControllers = require ('../controllers/mainControllers');

//routes
router.get("/", mainControllers.index);

router.get("/home", mainControllers.index );

// exports
module.exports = router;
