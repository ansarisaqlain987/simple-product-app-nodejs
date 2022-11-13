const express = require('express');
const app = express();
const DBConnection = require('./utils/dbConnect');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();
DBConnection.connectDB();

app.use(cors())
app.use(bodyParser.json());

app.use('/product', require('./routes/product.route')(express.Router()));
app.use('/', express.static('public/html'));

module.exports = app;