const routes = require('express').Router();
const { getCategories, createCategory, getTransactions, createTransactions, deleteTransaction, getLabels } = require('../controller/controller');

routes.route('/api/categories')
    .get(getCategories)
    .post(createCategory);

routes.route('/api/transactions')
    .get(getTransactions)
    .post(createTransactions)
    .delete(deleteTransaction);

routes.route('/api/labels')
    .get(getLabels);

module.exports = routes;