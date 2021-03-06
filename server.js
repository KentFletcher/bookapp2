'use strict';

// require('dotenv').config();
const express = require('express');
// const superagent = require('superagent');


const app = express();
const PORT = process.env.PORT || 8800;

app.use(express.static('./public'));
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
  response.status(200).render('./pages/index.ejs');
});

app.get('/new', (req, res) => {
  res.status(200).render('./pages/searches/new.ejs');
});

app.use('*', (req, res) => res.send('Sorry that route does not yet exist!'));



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});


