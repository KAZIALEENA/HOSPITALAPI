const express = require('express');
const bodyParser = require('body-parser')
const app = express()
const port = 4000;
const db = require('./config/mongoose');
const passport = require('passport');
const passportStratergy = require('./config/passport');
const router = require('./routes/router');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(router);

// Add a simple GET route for testing purposes
app.get('/', (req, res) => {
  res.send('Welcome to HOSPITAL API project! Please use Postman to interact with the API.');
});
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })