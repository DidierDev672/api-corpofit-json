const express = require('express');
const userController = require('../adapters/controllers/UserController');
const medicineController = require('../adapters/controllers/MedicineController');
const ailmentController = require('../adapters/controllers/AilmentController');

const router = express.Router();

router.use('/api', [userController, medicineController, ailmentController]);

module.exports = router;