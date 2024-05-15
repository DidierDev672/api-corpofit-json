const Diet = require('../models/diet');
const db = require('../../settings');

class DietService {
    constructor() {
        this.dietDatabase = [];
    }


    //Métodos para crear una nueva dieta
    createDiet(title, description, photo) {
        const newDietId = this.dietDatabase.length + 1;
        const newDiet = new Diet(newDietId, title, description, photo);

        db.collection('diet').add({
            ...newDiet
        });
        this.dietDatabase.push(newDiet);
        return newDiet;
    }

    // Métodos para obtener todas las dietas
    async getAllDiets() {
        const data = [];
        const docRef = db.collection('diet');
        const snapshot = await docRef.get();
        snapshot.forEach((doc) => {
            data.push({
                id: doc.id,
                title: doc.data().title,
                description: doc.data().description,
                photo: doc.data().photo
            });
        });
        if (data.length > 0) return data;
    }

    // Métodos para obtener una dieta por su ID
    async getDietById(id) {
        const docRef = db.collection('diet').doc(id);
        const doc = await docRef.get();
        if (!doc.exists) {
            console.log('No such document!');
        } else {
            this.dietDatabase.push({
                id: doc.id,
                title: doc.data().title,
                description: doc.data().description,
                photo: doc.data().photo
            });
        }
        return this.dietDatabase;
    }

    // Método para actualizar una dieta existencia
    async updateDiet(id, title, description, photo) {
        const dietToUpdate = this.getDietById(id);
        if (dietToUpdate) {
            dietToUpdate.title = title;
            dietToUpdate.description = description;
            dietToUpdate.photo = photo;

            await db.collection('diet').doc(id).update({ ...dietToUpdate });
            return dietToUpdate;
        }

        return null;  // La dieta no fue encontrada
    }

    // Método para eliminar una dieta por su ID
    async deleteDiet(id) {
        await db.collection('diet').doc(id).delete();
    }
}

module.exports = DietService;
