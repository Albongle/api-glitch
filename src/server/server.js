const express = require('express');
const { PORT } = require('../config/constants.config.js');
const indexRoute = require('../routes/index.route.js');
const cors = require('cors');

const app = express();
app.use(cors({ origin: '*', optionSucessStatus: 200 }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(indexRoute);

app.use((req, res) =>
    res.status(400).json({ status: 400, message: 'resource not found' })
);

const server = app.listen(PORT, () =>
    console.log(`app listening ons ports ${server.address().port}`)
);
