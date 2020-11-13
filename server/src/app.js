const express = require('express');
const cors = require('cors');
const app = express();

const Nhaa = [];
app.use(cors());
app.use(express.json());

app.post('/Register', (request, response) => {
  const { name, email, password } = request.body;

  const register = { name, email, password };

  Nhaa.push(register);
  console.log('----------------------------------------------------------');
  console.log(register);
  console.log('----------------------------------------------------------');
  return response.json(register);
});

app.get('./Entry/Login'), (request, response) => {};

console.log('----------------------------------------------------------');
console.log('|                   Backend Started ✔                    |');
console.log('----------------------------------------------------------');

module.exports = app;
