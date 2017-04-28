const express = require('express');
const controller = require('../controllers/pizzaController');

const pizzaRoutes = express.Router();

pizzaRoutes.get('/', controller.index);

pizzaRoutes.get('/add', (req, res) => {
  res.render('pizza/pizza-add', {
    documentTitle: 'Ada\'s Pizza!'
  });
});

pizzaRoutes.get('/:id', controller.show);

pizzaRoutes.post('/', controller.create);

module.exports = pizzaRoutes;