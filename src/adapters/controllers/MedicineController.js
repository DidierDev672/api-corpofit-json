const express = require('express');
const MedicineService = require('../../domain/services/medicineService');
const logger = require('../../utils/logger');

const router = express.Router();
const medicineService = new MedicineService();

router.post('/medicines', (req, res) => {
    const { title, isSelected } = req.body;
    const medicine = medicineService.createMedicine(title, isSelected);
    res.json(medicine);
});


router.get('/medicines', (req, res) => {
    try {
        logger.info('Fetching all medicine');
        const medicines = medicineService.getMedicine();
        res.json(medicines);
    } catch (error) {
        logger.error(`Error fetching medicine: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;