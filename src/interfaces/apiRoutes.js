const express = require('express');
const userController = require('../adapters/controllers/UserController');

const router = express.Router();

// Rutas de usuario
router.use('/api', userController);

module.exports = router;