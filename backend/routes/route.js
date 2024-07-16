const routes = require('express').Router();
const { getCategories } = require('../controller/controller');

routes.route('/api/categories').get(getCategories);

module.exports = routes;