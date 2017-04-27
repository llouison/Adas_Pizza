const express = require('express');
const path = require('path');
const logger = require('morgan');
const app = express();

/* telling the app what port to listen on */
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});

/* setting static file */
app.use('/static', express.static(path.join(__dirname, 'public')));
/* setting up logging */
app.use(logger('dev'));

/* creating the first route */
app.get('/', function(req, res) {
  res.send('hello world!');
});

/* handling errors */
app.get('*', function(req, res) {
  res.status(404).send({message: 'not found!'});
});