const express = require('express');
const userController = require('../adapters/controllers/UserController');
const bussinesInfoController = require('../adapters/controllers/BussinesInfoController');

const router = express.Router();

// Rutas de usuario
router.use('/api', userController);
router.use('/api', bussinesInfoController);

module.exports = router;
