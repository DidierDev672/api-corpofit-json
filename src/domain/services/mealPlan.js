const data = require('../../adapters/data/dailyMealPlan.json');

class MealPlanService {
    constructor() {
        this.mealPlan = data;
    }

    getMealPlan() {
        return this.mealPlan;
    }
}

module.exports = MealPlanService;