const { getDogNombreyTodos }  = require('../controllers/getPerroNombreyTodos');
const { getDogId }  = require('../controllers/getPerroId');
const { postPerro } = require('../controllers/postCan');
const { Router } = require('express');
const { getdogsall } = require('../controllers/getPerroTodos');
const { getdoglikename } = require('../controllers/getPerroLikeName');
const { getdogxtemp} = require('../controllers/getPerroXtemp');
const { compdogxtemp} = require('../controllers/complDogXtemp');
const router = Router();
const { getTemperamentos } = require('../controllers/getTemps.js');


router.get('/compltemp/:eltemp', compdogxtemp );
/** http://localhost:3001/compltemp/Intelligent  */

 router.get('/dogname/:elnombre', getdoglikename);
/** http://localhost:3001/dogname/Max  */

 router.get('/dogtemp/:eltemp', getdogxtemp );
/** http://localhost:3001/dogtemp/Intelligent  */

 router.get('/dogsall/', getdogsall );
/** http://localhost:3001/dogsall/  */

 router.post("/postdog", postPerro);
 router.get("/dogs/:idRaza", getDogId);
 router.get("/dogs/", getDogNombreyTodos);

router.get("/temperamentos",  getTemperamentos );
module.exports = router ;