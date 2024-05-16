const express = require("express");
const NutritionService = require("../../domain/services/nutritionService");
const router = express.Router();

const nutritionService = new NutritionService();

router.post("/nutrition", async (req, res) => {
  const { calories, protein, carbohydrates, fat, water, objective } = req.body;
  const newNutrition = await nutritionService.createNutrition(
    calories,
    protein,
    carbohydrates,
    fat,
    water,
    objective
  );
  res.status(201).json(newNutrition);
});

router.get("/nutritions", async (req, res) => {
  const allNutrition = await nutritionService.getAllNutrition();
  res.status(200).json(allNutrition);
});

router.get("/nutrition/:id", async (req, res) => {
  const nutritionId = req.params.id;
  const nutrition = await nutritionService.getNutritionById(nutritionId);
  if (nutrition) {
    res.status(200).json(nutrition);
  } else {
    res.status(404).json({ message: "Nutrition no encontrada" });
  }
});

router.put("/nutrition/:id", async (req, res) => {
  const nutritionId = req.params.id;
  const { calories, protein, carbohydrates, fat, water, objective } = req.body;
  const updateNutrition = await nutritionService.updateNutrition(
    nutritionId,
    calories,
    protein,
    carbohydrates,
    fat,
    water,
    objective
  );
  if (updateNutrition) {
    res.status(200).json(updateNutrition);
  } else {
    res.status(404).json({ message: "Nutrition no encontrada" });
  }
});

router.delete("/nutrition/:id", async (req, res) => {
  const nutritionId = req.params.id;
  const nutritionDeleted = await nutritionService.deleteNutrition(nutritionId);
  if (nutritionDeleted) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Nutrition no encontrada" });
  }
});

module.exports = router;
