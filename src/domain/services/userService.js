const User = require('../models/user');
const data = require('../../adapters/data/user.json');
const logger = require('../../utils/logger');


class UserService {
    constructor() {
        this.users = data;
    }


    createUser(id, name) {
        const user = new User(id, name);
        this.users.push(user);
        logger.info(`Creating user with ID ${id}`);
        return user;
    }

    getUsers() {
        return this.users;
    }

    getUserById(id) {
        return this.users.find(user => user.id === id);
    }
}

module.exports = UserService;