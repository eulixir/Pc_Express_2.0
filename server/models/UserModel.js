const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

let UserSchema = Schema({
  name: String,
  email: String,
  password: String,
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
