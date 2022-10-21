const express = require('express');
const app = express();
const DBConnection = require('./utils/dbConnect');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();
DBConnection.connectDB();

app.use(bodyParser.json());

app.use('/product', require('./routes/product.route')(express.Router()));
app.use('/', express.static('public/html'));

module.exports = app;