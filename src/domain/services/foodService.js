const Food = require('../models/food');
const data = require('../../adapters/data/food.json');
//const logger = require('../../utils/logger');

class FoodService {
    constructor() {
        this.foods = data;
    }

    getMedicine() {
        return this.foods;
    }
}

module.exports = FoodService;