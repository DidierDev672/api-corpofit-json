const express = require('express');
const BussinesInfoService = require('../../domain/services/bussinesInfoService');
const logger = require('../../utils/logger');

const router = express.Router();
const bussinesService = new BussinesInfoService();

router.get('/bussines-info', (req, res) => {
    try {
        logger.info(`Fetching all bussnes`);
        const bussines = bussinesService.getBussinesInfo();
        res.json(bussines);
    } catch (error) {
        logger.error(`Error fetching bussines: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
module.exports = router;
