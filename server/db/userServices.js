const mongoose = require('mongoose');
const UserModel = require('./userModel');
const ObjectId = mongoose.Types.ObjectId;

async function getUser(email) {
  const users = await UserModel.find({ email: email });
  return users;
}

async function postUser(user) {
  const newUserMongoDB = await UserModel.create(user);
  console.log(newUserMongoDB);
  return newUserMongoDB;
}

async function updateUser(_id, user) {
  await UserModel.updateOne({ _id: ObjectId(_id) }, user);
  return { _id, ...user };
}
async function deleteUser(_id) {
  const result = await UserModel.deleteOne({ _id: ObjectId(_id) });
  console.log(result);
  return result.deletedCount === 1;
}

module.exports = {
  getUser,
  postUser,
  updateUser,
  deleteUser,
};
