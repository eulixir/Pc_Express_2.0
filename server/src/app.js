const express = require('express');
const cors = require('cors');
const app = express();
const nodemailer = require('nodemailer');
const service = require('../db/userServices');
const crypto = require('crypto');

var validator = require('validator');

const takeRandomCode = require('../functions/randomCode');

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

// get User
app.get('/Entry/Login', async (request, response) => {
  const { email } = request.query;
  const user = email ? User.filter((User) => User.email.includes(email)) : User;

  try {
    const getUsers = await service.getUser(email);

    response.send({
      users: getUsers,
    });
  } catch ({ message }) {
    console.log(message);
    response.status(400).send({ error: message });
  }
});

// Post User
app.post('/Entry/Register', async (request, response) => {
  let { name, email, password } = request.body;
  // 1º step See if the email is already registered
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

  //2º Step Try to insert in mongoDB
  try {
    const register = { name, email, password };
    const newUser = await service.postUser(register);
    response.send({
      status: 'Ok',
      transaction: newUser,
    });
    User.push(register);
  } catch ({ message }) {
    console.log(message);
    response.status(400).send({ error: message });
  }
});

// Validate Email and Password
app.get('/Entry/Validate/:email/:password', async (request, response) => {
  let { email, name, password } = request.params;
  const user = { name, email, password };

  try {
    const getUsers = await service.getUser(email);
    console.log(email);
    response.send({
      users: getUsers,
    });
  } catch ({ message }) {
    console.log(message);
    response.status(400).send({ error: message });
  }

  const findUserIndex = User.findIndex((user) => user.email === email);
  const findPasswordIndex = User.findIndex(
    (user) => user.password === password
  );

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
});

// Send Random Code
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
      takeRandomCode,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err + 'send email fail');
    } else {
      console.log('Email send 🚀');
    }
  });

  return response.json(emailValidate);
});

// Send Contact Form
app.post('/contact', (request, response) => {
  const formContent = ({
    name,
    subject,
    email,
    phone,
    local,
    content,
  } = request.body);

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  let mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    cc: email,
    subject: subject,
    html:
      '<p>We heard that you lost your PcExpress password. Sorry about that!</p><p>But don’t worry! You can use the following code to reset your password</p>',
  };

  try {
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        console.log(err + ' ' + 'send email fail');
      } else {
        console.log('Form send 🚀');
        response.send({
          status: 'Ok',
        });
      }
    });
  } catch {}
});

console.log('----------------------------------------------------------');
console.log('|                   Backend Starting                     |');
console.log('----------------------------------------------------------');

module.exports = app;
