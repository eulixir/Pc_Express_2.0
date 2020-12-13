const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Connect mongodb

const { DB_CONNECTION } = process.env;

const db = () => {
  mongoose.Promisse = global.Promisse;
  console.log('----------------------------------------------------------');
  console.log('Start Mongodb connection...');
  console.log('----------------------------------------------------------');
  mongoose
    .connect(DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('----------------------------------------------------------');
      console.log('MongoDb connected');
      console.log('----------------------------------------------------------');
    })
    .catch((err) => {
      console.log('----------------------------------------------------------');
      console.log('MongoDb connect failure ' + err);
      console.log('----------------------------------------------------------');
    });
};

module.exports = db;
