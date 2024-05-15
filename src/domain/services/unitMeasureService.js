const UnitMeasure = require('../models/unitMeasure');
const db = require('../../settings');

class UnitMeasureService {
    constructor() {
        this.UnitMeasureDatabase = [];
    }

    async createUnitMeasure(title) {
        const newUnitId = this.UnitMeasureDatabase.length + 1;
        const newUnitMeasure = new UnitMeasure(newUnitId, title);

        await db.collection('unitMeasure').add({
            ...newUnitMeasure
        });

        this.UnitMeasureDatabase.push(newUnitMeasure);
        return newUnitMeasure;
    }


    async getAllUnits() {
        const data = [];
        const docRef = db.collection('unitMeasure');
        const snapshot = await docRef.get();
        snapshot.forEach((doc) => {
            data.push({
                id: doc.id,
                title: doc.data().title,
            })
        });

        if (data.length > 0) return data;
    }

    async getUnitMeasure(id) {
        const docRef = db.collection('unitMeasure').doc(id);
        const doc = await docRef.get();
        if (!doc.exists) {
            console.log('No Such document!');
        } else {
            this.UnitMeasureDatabase.push({
                id: doc.id,
                title: doc.data().title,
            });
        }

        return this.UnitMeasureDatabase;
    }

    async updateUnitMeasure(id, title) {
        const unitMeasureUpdate = this.getUnitMeasure(id);
        if (unitMeasureUpdate) {
            unitMeasureUpdate.title = title;

            await db.collection('unitMeasure').doc(id).update({ ...unitMeasureUpdate });
            return unitMeasureUpdate;
        }

        return null;
    }

    async deleteUnitMeasure(id) {
        await db.collection('unitMeasure').doc(id).delete();
    }
}

module.exports = UnitMeasureService;