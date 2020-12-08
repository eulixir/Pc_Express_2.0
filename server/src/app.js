const express = require('express');
const cors = require('cors');
const app = express();
const nodemailer = require('nodemailer');
require('dotenv').config();

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
    text: 'Your reset code is = ' + randomCode,
    html:
      '<p>For clients that do not support AMP4EMAIL or amp content is not valid</p>',
    amp: `<!doctype html>
    <html ⚡4email>
      <head>
        <meta charset="utf-8">
        <style amp4email-boilerplate>body{visibility:hidden}</style>
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
      </head>
      <body>
        <p>Image: <amp-img src="https://cldup.com/P0b1bUmEet.png" width="16" height="16"/></p>
        <p>GIF (requires "amp-anim" script in header):<br/>
          <amp-anim src="https://cldup.com/D72zpdwI-i.gif" width="500" height="350"/></p>
      </body>
    </html>`,
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
