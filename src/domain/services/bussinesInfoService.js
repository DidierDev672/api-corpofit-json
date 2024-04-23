//const BussinesInfo = require('../models/bussinesInfo');
const data = require('../../adapters/data/bussines-info.json');

class BussinesInfoService {
    constructor() {
        this.BussinesInfo = data;
    }


    getBussinesInfo() {
        return this.BussinesInfo;
    }
}

module.exports = BussinesInfoService;
