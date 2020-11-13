const express = require('express');
const transactionRouter = express.Router();
const service = require('../services/transactionService');

module.exports = transactionRouter;
transactionRouter.get('/', async (request, response) => {
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

    const filteredTransactions = await service.getTransactionsFrom(period);

    response.send({
      lenght: filteredTransactions.length,
      transactions: filteredTransactions,
    });
  } catch ({ message }) {
    console.log(message);
    response.status(400).send({ error: message });
  }
});

transactionRouter.post('/', async (request, response) => {
  const { body } = request;

  try {
    if (JSON.stringify(body) == '{}') {
      throw new Error(`Conteúdo inexistente`);
    }

    const { description, value, category, year, month, day, type } = body;
    const yearMonth = `${year}-${month.toString().padStart(2, '0')}`;
    const yearMonthDay = `${yearMonth}-${day.toString().padStart(2, '0')}`;

    const postTransaction = {
      description,
      value,
      category,
      year,
      month,
      day,
      yearMonth,
      yearMonthDay,
      type,
    };

    const newTransaction = await service.postTransaction(postTransaction);

    response.send({
      status: 'Ok',
      transaction: newTransaction,
    });
  } catch ({ message }) {
    console.log(message);
    response.status(400).send({ error: message });
  }
});

transactionRouter.put('/', async (request, response) => {
  try {
    throw new Error(`Id inexistente`);
  } catch ({ message }) {
    console.log(message);
    response.status(400).send({ error: message });
  }
});

transactionRouter.put('/:id', async (request, response) => {
  const { body, params } = request;

  console.log(params);

  try {
    if (JSON.stringify(body) == '{}') {
      throw new Error(`Conteúdo inexistente`);
    }
    const { description, value, category, year, month, day, type } = body;
    const { id } = params;
    const yearMonth = `${year}-${month.toString().padStart(2, '0')}`;
    const yearMonthDay = `${yearMonth}-${day.toString().padStart(2, '0')}`;

    const updateTransaction = {
      description,
      value,
      category,
      year,
      month,
      day,
      yearMonth,
      yearMonthDay,
      type,
    };

    const updatedTransaction = await service.updateTransaction(
      id,
      updateTransaction
    );

    response.send({
      status: 'Ok',
      transaction: updatedTransaction,
    });
  } catch ({ message }) {
    console.log(message);
    response.status(400).send({ error: message });
  }
});

transactionRouter.delete('/:id', async (request, response) => {
  const { params } = request;

  console.log(params);

  try {
    const { id } = params;

    const didDelete = await service.deleteTransaction(id);

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
