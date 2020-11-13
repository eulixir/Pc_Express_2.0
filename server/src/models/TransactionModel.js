const mongoose = require('mongoose');

let schema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const TransactionModel = mongoose.model('transaction', schema);

module.exports = TransactionModel;
