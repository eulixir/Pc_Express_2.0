const mongoose = require('mongoose');
const UserModel = require('../models/UserModel');

const Schema = require('mongoose').Schema;

let UserSchema = Schema({
  name: String,
  email: String,
  password: String,
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;

const model = mongoose.model(UserModel);

new model({
  name: 'String',
  email: 'String',
  password: 'String',
})
  .save()
  .then(() => {
    console.log('usuário cadastrado');
  })
  .catch((err) => console.log('Houve um erro ' + err));

// async function getTransactionsFrom(period) {
//   const transactions = await TransactionModel.find({ yearMonth: period });
//   return transactions;
// }

// async function postTransaction(transaction) {
//   const newTransactionMongoDB = await TransactionModel.create(transaction);
//   console.log(newTransactionMongoDB);
//   return newTransactionMongoDB;
// }

// async function updateTransaction(_id, transaction) {
//   await TransactionModel.updateOne({ _id: ObjectId(_id) }, transaction);
//   return { _id, ...transaction };
// }

// async function deleteTransaction(_id) {
//   const result = await TransactionModel.deleteOne({ _id: ObjectId(_id) });
//   console.log(result);
//   return result.deletedCount === 1;
// }
