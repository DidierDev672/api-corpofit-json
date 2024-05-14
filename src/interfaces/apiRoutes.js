const express = require('express');
const userController = require('../adapters/controllers/UserController');
const medicineController = require('../adapters/controllers/MedicineController');
const ailmentController = require('../adapters/controllers/AilmentController');
const FoodController = require('../adapters/controllers/FoodController');
const MealPlanController = require('../adapters/controllers/MealPlanController');
const MealScheduleController = require('../adapters/controllers/MealScheduleController');
const BussinesInfoController = require('../adapters/controllers/BussinesInfoController');
const DietController = require('../adapters/controllers/dietController');

const router = express.Router();

router.use('/api', userController);
router.use('/api', medicineController);
router.use('/api', ailmentController);
router.use('/api', FoodController);
router.use('/api', MealPlanController);
router.use('/api', MealScheduleController);
router.use('/api', BussinesInfoController);
router.use('/api', DietController);

module.exports = router;
