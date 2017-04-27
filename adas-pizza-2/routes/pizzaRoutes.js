const express = require('express');
const pizzaRoutes = express.Router();

const pizzaData = require('../db/pizza');

pizzaRoutes.get('/', function(req, res) {
  res.render('pizza/pizza-index', {
    documentTitle: 'Ada\'s Pizza!',
    pizzaData: pizzaData,
  });
});

pizzaRoutes.get('/:id', function(req, res) {
  const id = req.params.id;
  res.render('pizza/pizza-single', {
    documentTitle: 'Ada\'s Pizza!',
    onePizza: pizzaData[id],
  });
});

module.exports = pizzaRoutes;