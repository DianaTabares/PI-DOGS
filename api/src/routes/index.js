const { Router } = require('express');
const getDogs = require('../controllers/getDogs');
// Importar todos los routers;
const getDogsById = require('../controllers/getDogById');
const getDogsByName = require('../controllers/getDogByName');
const getTemperaments = require('../controllers/getTemperaments');
const postDog = require('../controllers/postDogs');

// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs',getDogs);
router.get('/dogs/:id',getDogsById);
router.get('/dogsname',getDogsByName);
router.get('/temperaments',getTemperaments);
router.post('/dogs',postDog);




module.exports = router;
