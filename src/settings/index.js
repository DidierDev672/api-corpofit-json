const { initializeApp, applicationDefault, cert  } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');


const serviceAccount = require('./corpofit-example-firebase-adminsdk-ybgwh-6e7e64ae54.json');

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

module.exports = db;
