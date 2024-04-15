const express = require('express');
const userController = require('../adapters/controllers/UserController');
const medicineController = require('../adapters/controllers/MedicineController');
const ailmentController = require('../adapters/controllers/AilmentController');
const FoodController = require('../adapters/controllers/FoodController');

const router = express.Router();

router.use('/api', userController);
router.use('/api', medicineController);
router.use('/api', ailmentController);
router.use('/api', FoodController);

module.exports = router;