const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

// Connect mongodb
const USER_COLLECTION = 'User';
const { DB_CONNECTION } = process.env;

mongoose.Promisse = global.Promisse;
console.log('Start Mongodb connection...');
mongoose
  .connect(DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDb connected');
  })
  .catch((err) => {
    console.log('MongoDb connect failure ' + err);
  });

// Model
