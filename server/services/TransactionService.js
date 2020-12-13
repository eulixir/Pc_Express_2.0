const mongoose = require('mongoose');
const TransactionModel = require('../models/TransactionModel');
const ObjectId = mongoose.Types.ObjectId;

async function getTransactionsFrom(period) {
  const transactions = await TransactionModel.find({ yearMonth: period });
  return transactions;
}

async function postTransaction(transaction) {
  const newTransactionMongoDB = await TransactionModel.create(transaction);
  console.log(newTransactionMongoDB);
  return newTransactionMongoDB;
}

async function updateTransaction(_id, transaction) {
  await TransactionModel.updateOne({ _id: ObjectId(_id) }, transaction);
  return { _id, ...transaction };
}

async function deleteTransaction(_id) {
  const result = await TransactionModel.deleteOne({ _id: ObjectId(_id) });
  console.log(result);
  return result.deletedCount === 1;
}
