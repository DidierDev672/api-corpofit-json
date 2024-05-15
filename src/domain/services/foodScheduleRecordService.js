const FoodScheduleRecord = require('../models/foodScheduleRecord');
const db = require('../../settings');


class FoodScheduleRecordService {
    constructor() {
        this.scheduleDatabase = [];
    }

    async createScheduleRecord(time, feeds, unitMeasure, consumed, weighed) {
        const newScheduleId = this.scheduleDatabase.length + 1;
        const newScheduleRecord = new FoodScheduleRecord(newScheduleId, time, feeds, unitMeasure, consumed, weighed);

        await db.collection('foodScheduleRecord').add({
            ...newScheduleRecord
        });
    }

    async getAllScheduleRecord() {
        const data = [];
        const docRef = db.collection('foodScheduleRecord');
        const snapshot = await docRef.get();
        snapshot.forEach((doc) => {
            data.push({
                id: doc.id,
                time: doc.data().time,
                feeds: doc.data().feeds,
                unitMeasure: doc.data().unitMeasure,
                consumed: doc.data().consumed,
                weighed: doc.data().weighed,
            });
        });

        if (data.length > 0) return data;
    }


    async getFoodScheduleRecordById(id) {
        const docRef = db.collection('foodScheduleRecord').doc(id);
        const doc = await docRef.get();
        if (!doc.exists) {
            console.log('No such document!');
        } else {
            this.this.scheduleDatabas.push({
                id: doc.id,
                time: doc.data().time,
                feeds: doc.data().feeds,
                unitMeasure: doc.data().unitMeasure,
                consumed: doc.data().consumed,
                weighed: doc.data().weighed,
            });
        }

        return this.scheduleDatabase;
    }

    async updateScheduleRecord(id, time, feeds, unitMeasure, consumed, weighed) {
        const foodScheduleRecord = this.getFoodScheduleRecordById(id);
        if (foodScheduleRecord) {
            foodScheduleRecord.time = time;
            foodScheduleRecord.feeds = feeds;
            foodScheduleRecord.unitMeasure = unitMeasure;
            foodScheduleRecord.consumed = consumed;
            foodScheduleRecord.weighed = weighed;

            await db.collection('foodScheduleRecord').doc(id).update({ ...foodScheduleRecord });
            return foodScheduleRecord;
        }

        return null;
    }

    async deleteScheduleRecord(id) {
        await db.collection('foodScheduleRecord').doc(id).delete();
    }

}

module.exports = FoodScheduleRecordService;
