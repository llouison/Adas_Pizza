/* dependencies & creating app */
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

/* importing routes */
const pizzaRoutes = require('./routes/pizzaRoutes');

/* telling the app what port to listen on */
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});

/* setting static file */
app.use('/static', express.static(path.join(__dirname, 'public')));
/* setting up logging */
app.use(logger('dev'));
/* setting up body-parser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* setting the view engine */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* creating the first route */
app.get('/', function(req, res) {
  res.send('hello world!');
});

/* creating the pizza route */
app.use('/pizzas', pizzaRoutes);

/* handling errors */
app.get('*', function(req, res) {
  res.status(404).send({message: 'not found!'});
});