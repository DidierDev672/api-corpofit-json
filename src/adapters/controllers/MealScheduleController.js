const express = require('express');
const MealScheduleService = require('../../domain/services/mealScheduleService');

const router = express.Router();
const mealScheduleService = new MealScheduleService();

router.get('/meal-schedule', (req, res) => {
    try {
        const schedule = mealScheduleService.getMealSchedule();
        res.json(schedule);
    } catch (error) {
        console.log(`Error fetching daily meal plan ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;