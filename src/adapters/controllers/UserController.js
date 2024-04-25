const express = require('express');
const UserService = require('../../domain/services/userService');
const logger = require('../../utils/logger');

const router = express.Router();
const userService = new UserService();

// Crear usuario
router.post('/users', (req, res) => {
    const { id, name } = req.body;
    const user = userService.createUser(id, name);
    res.json(user);
});

// Obtener todos los usuarios
router.get('/users', (req, res) => {
    try {
        logger.info('Fetching all users');
        const users = userService.getUsers();
        res.json(users);
    } catch (error) {
        logger.error(`Error fetching users: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Obtener usuario por ID
router.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const user = userService.getUserById(userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
});

module.exports = router;
