
const { getDogsNombreyTodos }  = require('../controllers/getPerroNombreyTodos')
const { getDogsId }  = require('../controllers/getPerroId')

const { Router } = require('express');
const router = Router();

router.get("/dogs/:idRaza", getDogsId);

router.get("/dogs/", getDogsNombreyTodos);

module.exports = router;
