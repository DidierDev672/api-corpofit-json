const express = require("express");
const TipService = require("../../domain/services/tipService");
const router = express.Router();

const tipService = new TipService();

router.post("/tip", async (req, res) => {
  const { title, content, photo } = req.body;
  const newTip = await tipService.createTip(title, content, photo);
  res.status(201).json(newTip);
});

router.get("/tips", async (req, res) => {
  const allTip = await tipService.getAllTip();
  res.status(200).json(allTip);
});

router.get("/tip/:id", async (req, res) => {
  const tipId = req.params.id;
  const tip = await tipService.getTipById(tipId);
  if (tip) {
    res.status(200).json(tip);
  } else {
    res.status(404).json({ message: "Tip no encontrada" });
  }
});

router.put("/tip/:id", async (req, res) => {
  const tipId = req.params.id;
  const { title, content, photo } = req.body;
  const updateTip = await tipService.updateTip(tipId, title, content, photo);
  if (updateTip) {
    res.status(200).json(updateTip);
  } else {
    res.status(404).json({ message: "Tip no encontrado" });
  }
});

router.delete("/tip/:id", async (req, res) => {
  const tipId = req.params.id;
  const tipDelete = await tipService.deleteNutrition(tipId);
  if (tipDelete) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Tip no encontrado" });
  }
});

module.exports = router;
