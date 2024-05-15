const Feed = require('../models/feed');
const UnitMeasure = require('../models/unitMeasure');


class FoodScheduleRecord {
    constructor(id, time, feeds,unitMeasure ,consumed, weighed) {
        this.id = id;
        this.time = time;
        this.feeds = feeds,
        this.unitMeasure = unitMeasure,
        this.consumed = consumed;
        this.weighed = weighed;
    }
}

module.exports = FoodScheduleRecord;
