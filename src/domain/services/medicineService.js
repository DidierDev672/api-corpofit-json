const Medicine = require('../models/medicine');
const data = require('../../adapters/data/medicine.json');
const logger = require('../../utils/logger');

class MedicineService {
    constructor() {
        this.medicines = data;
    }

    createMedicine(title, isSelected) {
        const medicine = new Medicine(title, isSelected);
        this.medicines.push(medicine);
        logger.info(`Creating medicine with title ${title}`);
    }

    getMedicine() {
        return this.medicines;
    }
}

module.exports = MedicineService;