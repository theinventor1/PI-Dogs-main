const { getDogNombreyTodos }  = require('../controllers/getPerroNombreyTodos');
const { getDogId }  = require('../controllers/getPerroId');
const { postPerro } = require('../controllers/postCan');
const { Router } = require('express');
const router = Router();

const { getTemperamentos } = require('../controllers/getTemps.js');

router.post("/postdog", postPerro);

router.get("/dogs/:idRaza", getDogId);
router.get("/dogs/", getDogNombreyTodos);



router.get("/temperamentos",  getTemperamentos );

module.exports = router ;