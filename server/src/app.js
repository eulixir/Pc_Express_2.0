const express = require('express');
const cors = require('cors');
const app = express();
const nodemailer = require('nodemailer');
const service = require('../db/userServices');
const crypto = require('crypto');

require('dotenv').config();

const secret = process.env.SECRETCRYPTO;

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

app.post('/Entry/Register', async (request, response) => {
  let { name, email, password } = request.body;
  console.log(password);

  const encrypt = (value) => {
    const iv = Buffer.from(crypto.randomBytes(16));
    const cipher = crypto.createCipheriv(
      'aes-256-cbc',
      Buffer.from(secret),
      iv
    );
    let encrypted = cipher.update(value);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
  };

  const cryptoPassword = encrypt(password);
  password = cryptoPassword;

  try {
    const register = { name, email, password };

    const newUser = await service.postUser(register);

    response.send({
      status: 'Ok',
      transaction: newUser,
    });
  } catch ({ message }) {
    console.log(message);
    response.status(400).send({ error: message });
  }
});

// Validate Email and Password
app.get('/Entry/Validate/:email/:password', (request, response) => {
  const { email, name, password } = request.params;

  const user = { name, email, password };

  const findUserIndex = User.findIndex((user) => user.email === email);
  const findPasswordIndex = User.findIndex(
    (user) => user.password === password
  );

  console.log(findPasswordIndex);

  if (findUserIndex === -1) {
    return response.status(400).json({ error: 'Email invalid' });
  }
  if (findPasswordIndex === -1) {
    return response.status(400).json({ error: 'Password invalid' });
  }

  const emailValidate = {
    name: User[findUserIndex].name,
    email: User[findUserIndex].email,
    password: User[findUserIndex].password,
  };
  user[findUserIndex] = emailValidate;

  console.log('----------------------------------------------------------');
  console.log(emailValidate);
  console.log('----------------------------------------------------------');
  return response.json(emailValidate);
});

app.get('/Entry/sendEmail/:email/', (request, response) => {
  const { email } = request.params;

  const user = { email };

  const findUserIndex = User.findIndex((user) => user.email === email);

  if (findUserIndex === -1) {
    return response.status(400).json({ error: 'Email invalid' });
  }

  const emailValidate = {
    email: User[findUserIndex].email,
  };
  user[findUserIndex] = emailValidate;

  function getRandomCode(length) {
    var code = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      code += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return code;
  }

  const randomCode = getRandomCode(5);

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  let mailOptions = {
    from: 'noreply.pcexpress@gmail.com',
    to: email,
    subject: 'Reset your password',
    html:
      '<p>We heard that you lost your PcExpress password. Sorry about that!</p><p>But don’t worry! You can use the following code to reset your password</p>' +
      randomCode,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err + 'send email fail');
    }
    console.log('Email send 🚀');
  });

  return response.json(emailValidate);
});

console.log('----------------------------------------------------------');
console.log('|                   Backend Started ✔                    |');
console.log('----------------------------------------------------------');

module.exports = app;
