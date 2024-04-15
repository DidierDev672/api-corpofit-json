const express = require('express');
const FoodService = require('../../domain/services/foodService');
const logger = require('../../utils/logger');

const router = express.Router();
const foodService = new FoodService();

router.get('/foods', (req, res) => {
    try {
        logger.info('Fetching all medicine');
        const foods = foodService.getMedicine();
        res.json(foods);
    } catch (error) {
        logger.error(`Error fetching food: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = router;