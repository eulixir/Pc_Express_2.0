const express = require('express');
const userRouter = express.Router();
const service = require('../services/transaction');

module.exports = userRouter;
userRouter.get('/', async (request, response) => {
  const { query } = request;

  try {
    if (!query.period) {
      throw new Error(
        `É necessário informar o parâmetro "period", cujo o valor deve estar nor formato yyyy-mm`
      );
    }

    const { period } = query;
    if (period.length !== 7) {
      throw new Error(`Período inválido. Use o formato yyyy-mm`);
    }

    const filteredUsers = await service.getUserFrom(period);

    response.send({
      lenght: filteredUsers.length,
      users: filteredUsers,
    });
  } catch ({ message }) {
    console.log(message);
    response.status(400).send({ error: message });
  }
});

userRouter.post('/', async (request, response) => {
  const { body } = request;

  try {
    if (JSON.stringify(body) == '{}') {
      throw new Error(`Conteúdo inexistente`);
    }

    const { name, email, password } = body;

    const postUser = {
      name,
      email,
      password,
    };

    const newUser = await service.postUser(postUser);

    response.send({
      status: 'Ok',
      user: newUser,
    });
  } catch ({ message }) {
    console.log(message);
    response.status(400).send({ error: message });
  }
});

userRouter.put('/', async (request, response) => {
  try {
    throw new Error(`Id inexistente`);
  } catch ({ message }) {
    console.log(message);
    response.status(400).send({ error: message });
  }
});

userRouter.put('/:id', async (request, response) => {
  const { body, params } = request;

  console.log(params);

  try {
    if (JSON.stringify(body) == '{}') {
      throw new Error(`Conteúdo inexistente`);
    }
    const { name, email, password } = body;
    const { id } = params;

    const updateTransaction = {
      name,
      email,
      password,
    };

    const updatedUser = await service.updateUser(id, updateTransaction);

    response.send({
      status: 'Ok',
      transaction: updatedUser,
    });
  } catch ({ message }) {
    console.log(message);
    response.status(400).send({ error: message });
  }
});

userRouter.delete('/:id', async (request, response) => {
  const { params } = request;

  console.log(params);

  try {
    const { id } = params;

    const didDelete = await service.deleteUser(id);

    if (didDelete) {
      response.send({
        status: 'Ok',
        message: `Lançamento de id ${id} excluído com sucesso!`,
      });
    } else {
      throw new Error(`Não foi possível excluir`);
    }
  } catch ({ message }) {
    console.log(message);
    response.status(400).send({ error: message });
  }
});
