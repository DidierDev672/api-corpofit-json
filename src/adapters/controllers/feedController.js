const express = require('express');
const FeedService = require('../../domain/services/feedService');
const router = express.Router();

const feedService = new FeedService();

router.post('/feed', async (req, res) => {
    const { title } = req.body;
    const newFeed = await feedService.createFeed(title);
    res.status(201).json(newFeed);
});

router.get('/feeds', async (req, res) => {
    const allFeed = await feedService.getAllFeeds();
    res.status(200).json(allFeed);
});

router.get('/feed/:id', async (req, res) => {
    const feedId = req.params.id;
    const feed = await feedService.getFeedById(feedId);
    if (feed) {
        res.status(200).json(feed);
    } else {
        res.status(404).json({ message: "Alimentos no encontrados" });
    }
});

router.put('/feed/:id', async (req, res) => {
    const feedId = req.params.id;
    const { title } = req.body;
    const updateFeed = await feedService.updateFeed(feedId, title);
    if (updateFeed) {
        res.status(200).json(updateFeed);
    } else {
        res.status(404).json({ message: "Alimentos no encontrados" });
    }
});

router.delete('/feed/:id', async (req, res) => {
    const feedId = req.params.id;
    const feedDeleted = await feedService.deleteFeed(feedId);
    if (feedDeleted) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Alimento no encontrado" });
    }
});

module.exports = router;