const db = require('../db/config');

const Pizza = {};

Pizza.findAll = () => {
    return db.query('SELECT * FROM pizza');
};

Pizza.findById = id => {
    return db.oneOrNone('SELECT * FROM pizza WHERE id = $1', [id]);
};

Pizza.create = pizza => {
    return db.one(
        `
        INSERT INTO pizza
        (flavor, description, flavor_key, location)
        VALUES ($1, $2, $3, $4) RETURNING *
        `,
        [pizza.flavor, pizza.description, pizza.flavor_key, pizza.location]
    );
};

module.exports = Pizza;