const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

// Model
let UserSchema = mongoose.Schema({
  email: String,
  name: String,
  password: String,
});

// Collection

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
