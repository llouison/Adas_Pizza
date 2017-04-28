const Pizza = require('../models/pizza');
const controller = {};

controller.index = (req, res) => {
    Pizza.findAll()
    .then(pizzas => {
        res.render('pizza/pizza-index', {
            documentTitle: 'Ada\'s Pizza',
            pizzaData: pizzas,
        });
    })
    .catch(err => {
        res.status(400).json(err);
    });
};

controller.show = (req, res) => {
    Pizza.findById(req.params.id)
    .then(pizza => {
        res.render('pizza/pizza-single', {
            documentTitle: 'Ada\'s Pizza',
            onePizza: pizza,
        });
    })
    .catch(err => {
        res.status(400).json(err);
    });
};

controller.create = (req, res) => {
    Pizza.create({
        flavor: req.body.flavor,
        description: req.body.description,
        flavor_key: req.body.flavor_key,
        location: req.body.location,
    })
    .then(pizza => {
        res.redirect('/pizzas');
    })
    .catch(err => {
        res.status(400).json(err);
    });
};

module.exports = controller;