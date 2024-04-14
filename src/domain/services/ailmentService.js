// const Ailment = require('../models/ailment');
const data = require('../../adapters/data/anamnesis.json');
// const logger = require('../../utils/logger');

class AilmentService {
    constructor() {
        this.ailment = data;
    }


    getAilment() {
        return this.ailment;
    }
}

module.exports = AilmentService;