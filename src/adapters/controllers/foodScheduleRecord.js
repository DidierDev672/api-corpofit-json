const express = require('express');
const FoodScheduleRecordService = require('../../domain/services/foodScheduleRecordService');
const router = express.Router();

const foodScheduleRecordService = new FoodScheduleRecordService();

router.post('/food-schedule-record', async (req, res) => {
    const { time, feeds, unitMeasure, consumed, weighed } = req.body;
    console.log(time, feeds, unitMeasure, consumed, weighed);
    const newScheduleRecord = await foodScheduleRecordService.createScheduleRecord(time, feeds, unitMeasure, consumed, weighed);
    res.status(201).json(newScheduleRecord);
});

router.get('/food-schedule-records', async (req, res) => {
    const allFoodScheduleRecord = await foodScheduleRecordService.getAllScheduleRecord();
    res.status(200).json(allFoodScheduleRecord);
});

router.get('/food-schedule-record/:id', async (req, res) => {
    const foodScheduleId = req.params.id;
    const foodSchedule = await foodScheduleRecordService.getFoodScheduleRecordById(foodScheduleId);
    if (foodSchedule) {
        res.status(200).json(foodSchedule);
    } else {
        res.status(404).json({ message: "Horario no encontrado" });
    }
});

module.exports = router;
