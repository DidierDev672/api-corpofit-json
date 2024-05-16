const Nutrition = require('../models/nutrition');
const db = require('../../settings');

class NutritionService {
    constructor() {
        this.nutritionDataBase = [];
    }

    async createNutrition(calories, protein, carbohydrates, fat, water, objective) {
        const newNutritionId = this.nutritionDataBase.length + 1;
        const newNutrition = new Nutrition(newNutritionId, calories, protein, carbohydrates, fat, water, objective);

        await db.collection('nutrition').add({
            ...newNutrition,
        });

        this.nutritionDataBase.push(newNutrition);
        return newNutrition;
    }

    async getAllNutrition() {
        const data = [];
        const docRef = db.collection('nutrition');
        const snapshot = await docRef.get();
        snapshot.forEach((doc) => {
            data.push({
                id: doc.id,
                calories: doc.data().calories,
                protein: doc.data().protein,
                carbohydrates: doc.data().carbohydrates,
                fat: doc.data().fat,
                water: doc.data().water,
                objective: doc.data().objective,
            });
        });

        if (data.length > 0) return data;
    }

    async getNutritionById(id) {
        const docRef = db.collection('nutrition').doc(id);
        const doc = await docRef.get();
        if (!doc.exists) {
            console.log('No Such document!');
        } else {
            this.nutritionDataBase.push({
                id: doc.id,
                calories: doc.data().calories,
                protein: doc.data().protein,
                carbohydrates: doc.data().carbohydrates,
                fat: doc.data().fat,
                water: doc.data().water,
                objective: doc.data().objective,
            });
        }

        return this.nutritionDataBase;
    }

    async updateNutrition(id, calories, protein, carbohydrates, fat, water, objective) {
        const nutritionUpdate = this.getNutritionById(id);
        if (nutritionUpdate) {
            nutritionUpdate.calories = calories;
            nutritionUpdate.protein = protein;
            nutritionUpdate.carbohydrates = carbohydrates;
            nutritionUpdate.fat = fat;
            nutritionUpdate.water = water;
            nutritionUpdate.objective = objective;

            await db.collection('nutrition').doc(id).update({ ...nutritionUpdate });
            return nutritionUpdate;
        }

        return null;
    }

    async deleteNutrition(id) {
        await db.collection('nutrition').doc(id).delete();
    }
}

module.exports = NutritionService;