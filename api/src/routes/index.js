const { getDogNombreyTodos }  = require('../controllers/getPerroNombreyTodos');
const { getDogId }  = require('../controllers/getPerroId');
const { postPerro } = require('../controllers/postCan');
const { Router } = require('express');
const { getdogsall } = require('../controllers/getPerroTodos');
const { getdoglikename } = require('../controllers/getPerroLikeName');
const { getdogxtemp} = require('../controllers/getPerroXtemp');
const router = Router();
const { getTemperamentos } = require('../controllers/getTemps.js');

 router.get('/dogname/:elnombre', getdoglikename);
/** http://localhost:3000/dogname/Max  */

 router.get('/dogtemp/:eltemp', getdogxtemp );
/** http://localhost:3000/dogtemp/Intelligent  */

 router.get('/dogsall/', getdogsall );
/** http://localhost:3000/dogsall/  */

 router.post("/postdog", postPerro);
 router.get("/dogs/:idRaza", getDogId);
 router.get("/dogs/", getDogNombreyTodos);

router.get("/temperamentos",  getTemperamentos );
module.exports = router ;