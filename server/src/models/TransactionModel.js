const mongoose = require('mongoose');

let schema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const TransactionModel = mongoose.model('user', schema);

module.exports = TransactionModel;
