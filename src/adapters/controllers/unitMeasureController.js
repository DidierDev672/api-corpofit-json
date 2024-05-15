const express = require('express');
const UnitMeasureService = require('../../domain/services/unitMeasureService');
const router = express.Router();

const unitMeasureService = new UnitMeasureService();

router.post('/unit-measure', async (req, res) => {
    const { title } = req.body;
    const newUnitMeasure = await unitMeasureService.createUnitMeasure(title);
    res.status(201).json(newUnitMeasure);
});


router.get('/unit-measures', async (req, res) => {
    const allUnitMeasure = await unitMeasureService.getAllUnits();
    res.status(200).json(allUnitMeasure);
});


router.get('/unit-measure/:id', async (req, res) => {
    const unitMeasureId = req.params.id;
    const unitMeasure = await unitMeasureService.getUnitMeasure(unitMeasureId);
    if (unitMeasure) {
        res.status(200).json(unitMeasure);
    } else {
        res.status(404).json({ message: "Unidad medida no encontrada" });
    }
});

router.put('/unit-measure/:id', async (req, res) => {
    const unitMeasureId = req.params.id;
    const { title } = req.body;
    const updateUnitMeasure = await unitMeasureService.updateUnitMeasure(unitMeasureId, title);
    if (updateUnitMeasure) {
        res.status(200).json(updateUnitMeasure);
    } else {
        res.status(404).json({ message: "Unidad medida no encontrada" });
    }
});

router.delete('/unit-measure/:id', async (req, res) => {
    const unitMeasureId = req.params.id;
    const unitMeasureDeleted = await unitMeasureService.deleteUnitMeasure(unitMeasureId);
    if (unitMeasureDeleted) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Unidad medida no encontrada" });
    }
});

module.exports = router;