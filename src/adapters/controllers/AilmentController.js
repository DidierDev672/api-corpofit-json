const express = require('express');
const AilmentService = require('../../domain/services/ailmentService');
const logger = require('../../utils/logger');

const router = express.Router();
const ailmentService = new AilmentService();

router.get('/ailments', (req, res) => {
    try {
        logger.info('Fetching all ailment');
        const ailments = ailmentService.getAilment();
        res.json(ailments);
    } catch (error) {
        logger.error(`Error fetching ailment: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = router;