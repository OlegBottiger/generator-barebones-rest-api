require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const health = require('./routes/health');

const app = express();

app.use(cors);
app.use(bodyParser);

app.use('/health', health);

module.exports = app;
