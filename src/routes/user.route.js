const { Router } = require('express');
const UserController = require('../controllers/user.controller.js');
const route = Router();

route.get('/', UserController.getUserList);

module.exports = route;
