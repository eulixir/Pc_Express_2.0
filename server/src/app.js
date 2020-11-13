const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

console.log('----------------------------------------------------------');
console.log('Backend Started :3');

module.exports = app;
