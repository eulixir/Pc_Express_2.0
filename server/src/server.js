const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { DB_CONNECTION } = process.env;

dotenv.config();

console.log('----------------------------------------------------------');
console.log('Starting connection with the MongoDB... 🚀');
console.log('----------------------------------------------------------');
mongoose.connect(
  DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      connectedToMongoDB = false;

      console.log('----------------------------------------------------------');
      console.error(`MongoDB connect failure - ${err} ❌`);
      console.log('----------------------------------------------------------');
    }
  }
);

const { connection } = mongoose;

connection.once('open', () => {
  connectedToMongoDB = true;
  console.log('MongoDB connected');
  const APP_PORT = process.env.PORT || 3333;
  app.listen(APP_PORT, () => {
    console.log('----------------------------------------------------------');
    console.log(`Server started on port ${APP_PORT} ✔`);
    console.log('----------------------------------------------------------');

    console.log('----------------------------------------------------------');
    console.log('|                   Backend Started ✔                    |');
    console.log('----------------------------------------------------------');
  });
});
