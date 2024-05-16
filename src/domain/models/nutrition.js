class Nutrition {
    constructor(idUser, calories, protein, carbohydrates, fat, water, objective) {
        this.idUser = idUser;
        this.calories = calories;
        this.protein = protein;
        this.carbohydrates = carbohydrates;
        this.fat = fat;
        this.water = water;
        this.objective = objective;
    }
}

module.exports = Nutrition;