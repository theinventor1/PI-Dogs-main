const { getDogNombreyTodos }  = require('../controllers/getPerroNombreyTodos');
const { getDogId }  = require('../controllers/getPerroId');
// const { postPerro } = require('../controllers/postPerro');

const { postPerro } = require('../controllers/postCan2');

const { Perro } = require('../db');

const { Router } = require('express');
const router = Router();

//const { Sequelize } = require('sequelize');
//const sequelize = new Sequelize('postgres://postgres:planck@localhost:5432/dogs', { logging: false , native: false });
//const { perros } = sequelize.models;


router.get("/dogs/:idRaza", getDogId);
router.get("/dogs/", getDogNombreyTodos);
router.post("/dogs", postPerro);


module.exports =router ;