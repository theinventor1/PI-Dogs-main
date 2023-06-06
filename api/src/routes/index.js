const { getPerroNombreyTodos }  = require('../controllers/getPerroNombreyTodos');
const { getPerroIdyRaza }  = require('../controllers/getPerroIdyRaza');
const { postPerro } = require('../controllers/postCan');
const { Router } = require('express');
const { getperrotodos } = require('../controllers/getPerroTodos');
const { getperrolikename } = require('../controllers/getPerroLikeName');
const { getperroxtemp} = require('../controllers/getPerroXtemp');
const { compldogxtemp} = require('../controllers/complDogXtemp');
const router = Router();
const { getTemperamentos } = require('../controllers/getTemps.js');
const { allfromjson } = require('../controllers/allFromJson');

 router.get('/compltemp/:eltemp', compldogxtemp);
 
 /** http://localhost:3001/compltemp/Intelligent  */

 router.get('/dogname/:elnombre', getperrolikename);

 /** http://localhost:3000/dogname/Max  */
 
 router.get('/dogtemp/:eltemp', getperroxtemp );
 /** http://localhost:3000/dogtemp/Intelligent  */ 
 

 router.get('/dogsall/', getperrotodos );
 /** http://localhost:3000/dogsall/  */

 router.post("/postdog", postPerro);
  
 router.get('/dogs/name=?',getPerroNombreyTodos); /**por query */
  /** http://localhost:3001/dogs/name?a=Akita */

 router.get("/dogs/:idRaza", getPerroIdyRaza);  /**por params  */

 router.get("/temperaments",  getTemperamentos );

 router.get('/dogs', allfromjson );

 
 module.exports = router ;