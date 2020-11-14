const express = require('express');
const cors = require('cors');
const app = express();

const Nhaa = [];
app.use(cors());
app.use(express.json());

//Valitade if email exists
function validateEmail(request, response, next) {
  const { email } = request.params;

  if (!email) {
    return response.status(400).json({ error: 'Email does not exists' });
  }

  return next();
}

app.use('/Entry/:email', validateEmail);

app.get('/Entry/Login', (request, response) => {
  const { email } = request.query;
  const data = email ? Nhaa.filter((Nhaa) => Nhaa.email.includes(email)) : Nhaa;

  console.log('----------------------------------------------------------');
  console.log(data);
  console.log('----------------------------------------------------------');
  return response.json(data);
});

app.post('/Entry/Register', (request, response) => {
  const { name, email, password } = request.body;

  const register = { name, email, password };

  Nhaa.push(register);
  console.log('----------------------------------------------------------');
  console.log(register);
  console.log('----------------------------------------------------------');
  return response.json(register);
});

console.log('----------------------------------------------------------');
console.log('|                   Backend Started ✔                    |');
console.log('----------------------------------------------------------');

module.exports = app;
