const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/routes.js');
const path = require('path');
const dotenv = require('dotenv');

app.use(express.json());
app.use(cors());

console.log('----------------------------------------------------------');
console.log('Backend Started :3');

module.exports = app;
