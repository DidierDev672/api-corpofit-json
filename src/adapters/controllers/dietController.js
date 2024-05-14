const express = require('express');
const DietService = require('../../domain/services/dietService');
const router = express.Router();

const dietServices = new DietService();

// Método para manejar la solicitud de creación de una nueva dieta
router.post('/diet', (req, res) => {
    const { title, description, photo } = req.body;
        const newDiet = dietServices.createDiet(title, description, photo);
        res.status(201).json(newDiet);
});

 // Método para manejar la solicitud de obtener todas las dietas
router.get('/diets', async (req, res) => {
    const allDiets = await dietServices.getAllDiets();
    res.status(200).json(allDiets);
});

 // Método para manejar la solicitud de obtener una dieta por su ID
router.get('/diet/:id', async (req, res) => {
    const dietId = req.params.id;
        const diet = await dietServices.getDietById(dietId);
        if (diet) {
            res.status(200).json(diet);
        } else {
            res.status(404).json({ message: "Dieta no encontrada" });
        }
});

//  Método para manejar la solicitud de actualizar una dieta existente
router.put('/diet/:id', async  (req, res) => {
    const dietId = req.params.id;
    const { title, description, photo } = req.body;
    const updateDiet = await dietServices.updateDiet(dietId, title, description, photo);
    if (updateDiet) {
        res.status(200).json(updateDiet);
    } else {
        res.status(404).json({ message: "Dieta no encontrada" });
    }
});

 // Método para manejar la solicitud de eliminar una dieta por su ID
router.delete('/diet/:id', async (req, res) => {
    const dietId = req.params.id;
        const dietDeleted = await dietServices.deleteDiet(dietId);
        if (dietDeleted) {
            res.status(204).send(); // No hay contenido para enviar en una respuesta exitosa
        } else {
            res.status(404).json({ message: "Dieta no encontrada" });
        }
});


module.exports =  router;
