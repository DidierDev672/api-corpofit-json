const express = require('express');
const userController = require('../adapters/controllers/UserController');
const medicineController = require('../adapters/controllers/MedicineController');

const router = express.Router();

// Rutas de usuario
router.use('/api', userController);
router.use('/api', medicineController);

module.exports = router;