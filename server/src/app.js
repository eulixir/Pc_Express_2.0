const express = require('express');
const cors = require('cors');
const app = express();

const User = [];
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
  const user = email ? User.filter((User) => User.email.includes(email)) : User;

  console.log('----------------------------------------------------------');
  console.log(user);
  console.log('----------------------------------------------------------');
  return response.json(user);
});

app.post('/Entry/Register', (request, response) => {
  const { name, email, password } = request.body;

  const register = { name, email, password };

  User.push(register);
  console.log('----------------------------------------------------------');
  console.log(register);
  console.log('----------------------------------------------------------');
  return response.json(register);
});

app.get('/Entry/Validate/:email', (request, response) => {
  const { email } = request.params;
  const { name, password } = request.body;

  const user = { name, email, password };

  const findUserIndex = User.findIndex((user) => user.email === email);

  if (findUserIndex === -1) {
    return response.status(400).json({ error: 'Email does not exist' });
  }

  const emailValidate = {
    name,
    email: User[findUserIndex].email,
    password,
  };

  user[findUserIndex] = emailValidate;

  console.log('----------------------------------------------------------');
  console.log(emailValidate);
  console.log('----------------------------------------------------------');
  return response.json(email);
});

console.log('----------------------------------------------------------');
console.log('|                   Backend Started ✔                    |');
console.log('----------------------------------------------------------');

module.exports = app;
