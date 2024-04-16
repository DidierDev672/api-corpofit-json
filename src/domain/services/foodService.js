const data = require('../../adapters/data/food.json');


class FoodService {
    constructor() {
        this.foods = data;
    }

    getMedicine() {
        return this.foods;
    }
}

module.exports = FoodService;