const express = require('express');
const MealPlanService = require('../../domain/services/mealPlan');
const logger = require('../../utils/logger');

const router = express.Router();
const mealPlanService = new MealPlanService();

router.get('/meal-plan', (rq, res) => {
    try {
        logger.info('Fetching all daily meal plan');
        const meals = mealPlanService.getMealPlan();
        res.json(meals);
    } catch (e) {
        logger.error(`Error fetching daily meal plan ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;