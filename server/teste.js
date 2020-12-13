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

const UserSchema = mongoose.Schema({
  email: String,
  name: String,
  password: String,
});

// Collection
mongoose.model('User', UserSchema);

const User = mongoose.model('User');

new User({
  email: 'String',
  name: 'String',
  password: 'String',
})
  .save()
  .then(() => {
    console.log('User registred');
  })
  .catch((err) => {
    console.log('Register faliluer ' + err);
  });
