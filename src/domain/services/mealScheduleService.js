const data = require('../../adapters/data/mealSchedule.json');

class MealScheduleService {
    constructor() {
        this.mealSchedule = data;
    }

    getMealSchedule() {
        return this.mealSchedule;
    }
}

module.exports = MealScheduleService;