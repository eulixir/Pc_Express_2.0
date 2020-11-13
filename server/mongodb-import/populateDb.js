const mongoose = require('mongoose');
const fs = require('fs').promises;

const dotenv = require('dotenv');
dotenv.config();

const USER_COLLECTION = 'User';

/**
 * Crie um arquivo .env na raiz da pasta 'utils' e
 * preencha os valores conforme o arquivo de
 * exemplo "".env.example"
 *
 * DB_CONNECTION
 */
const { DB_CONNECTION } = process.env;

console.log('Iniciando conexão ao MongoDB...');
mongoose.connect(
  DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.error(`Erro na conexão ao MongoDB - ${err}`);
      process.exit(1);
    }
  }
);

const { connection } = mongoose;

connection.once('open', () => {
  console.log('Conectado ao MongoDB');
  recreateCollections();
});

async function recreateCollections() {
  console.log('Eliminando as collections...');
  await dropCollections();

  console.log('Recriando as collections...');
  await createCollections();

  console.log('Preenchendo os documentos das collections...');
  await populateCollections();

  connection.close();
  console.log('Processamento finalizado!');
}

async function dropCollections() {
  const promiseUser = new Promise((resolve, reject) => {
    connection.db
      .dropCollection(USER_COLLECTION)
      .then(() => {
        resolve();
      })
      .catch((err) => {
        if (err.code === 26) {
          resolve();
          return;
        }

        reject(err);
      });
  });

  await Promise.all([promiseUser]);
}

async function createCollections() {
  const promiseUser = new Promise((resolve, reject) => {
    connection.db
      .createCollection(USER_COLLECTION)
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });

  await Promise.all([promiseUser]);
}

async function populateCollections() {
  const promiseUser = new Promise(async (resolve, reject) => {
    const stringArrayUser = await fs.readFile(
      './populate/populate.json',
      'utf-8'
    );

    const User = JSON.parse(stringArrayUser);

    connection.db
      .collection(USER_COLLECTION)
      .insertMany(User)
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });

  await Promise.all([promiseUser]);
}
