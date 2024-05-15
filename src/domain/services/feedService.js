const Feed = require('../models/feed');
const db = require('../../settings');

class FeedService {
    constructor() {
        this.feedDatabase = [];
    }

    async createFeed(title) {
        const newFeedId = this.feedDatabase.length + 1;
        const newFeed = new Feed(newFeedId, title);

        await db.collection('feed').add({
            ...newFeed,
        });

        this.feedDatabase.push(newFeed);
        return newFeed;
    }

    async getAllFeeds() {
        const data = [];
        const docRef = db.collection('feed');
        const snapshot = await docRef.get();
        snapshot.forEach((doc) => {
            data.push({
                id: doc.id,
                title: doc.data().title,
            });
        });

        if (data.length > 0) return data;
    }

    async getFeedById(id) {
        const docRef = db.collection('feed').doc(id);
        const doc = await docRef.get();
        if (!doc.exists) {
            console.log('No Such document!');
        } else {
            this.feedDatabase.push({
                id: doc.id,
                title: doc.data().title,
            });
        }

        return this.feedDatabase;
    }

    async updateFeed(id, title) {
        const feedToUpdate = this.getFeedById(id);
        if (feedToUpdate) {
            feedToUpdate.title = title;

            await db.collection('feed').doc(id).update({ ...feedToUpdate });
            return feedToUpdate;
        }

        return null;
    }

    async deleteFeed(id) {

        await db.collection('feed').doc(id).delete();
    }
}

module.exports = FeedService;