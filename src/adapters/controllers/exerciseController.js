const express = require("express");
const ExerciseService = require("../../domain/services/exerciseService");
const router = express.Router();

const exerciseService = new ExerciseService();

router.post("/exercise", async (req, res) => {
  const {
    idCategory,
    name,
    description,
    repetitions,
    sets,
    duration,
    restTime,
  } = req.body;
  const newExercise = await exerciseService.createExercise(
    idCategory,
    name,
    description,
    repetitions,
    sets,
    duration,
    restTime
  );
  res.status(201).json(newExercise);
});

router.get("/exercises", async (req, res) => {
  const allExercise = await exerciseService.getAllExercise();
  res.status(200).json(allExercise);
});

router.get("/exercise/:id", async (req, res) => {
  const exerciseId = req.params.id;
  const exercise = await exerciseService.getExerciseById(exerciseId);
  if (exercise) {
    res.status(200).json(exercise);
  } else {
    res.status(404).json({ message: "Ejercicio no encontrada" });
  }
});

router.put("/exercise/:id", async (req, res) => {
  const exerciseId = req.params.id;
  const {
    idCategory,
    name,
    description,
    repetitions,
    sets,
    duration,
    restTime,
  } = req.body;
  const updateExercise = await exerciseService.updateExercise(
    idCategory,
    exerciseId,
    name,
      description,
      repetitions,
      sets,
      duration,
    restTime
    );
    if (updateExercise) {
        res.status(200).json(updateExercise);
    } else {
        res.status(404).json({ message: "Ejercicio no encontrado" });
    }
});

router.delete("/exercise/:id", async (req, res) => {
    const exerciseId = req.params.id;
    const exerciseDelete = await exerciseService.deleteExercise(exerciseId);
    if (exerciseDelete) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Ejercicio no encontrado" });

    }
});

module.exports = router;
