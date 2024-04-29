const { Router } = require('express');
const userRoute = require('./user.route.js');
const route = Router();

route.use('/api/users', userRoute);
route.get('/', (req, res) =>
    res.status(200).json({ status: 200, message: 'welcome to API labo 3' })
);

module.exports = route;
