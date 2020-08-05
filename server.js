'use strict';

// require('dotenv').config();
const express = require('express');
const superagent = require('superagent');


const app = express();
const PORT = process.env.Port || 8800;

app.use(express.static('./public'));
app.set('view engine', 'ejs');

app.get('/hello', (req, res) => {
  res.status(200).render('./pages/index.ejs');
});

app.get('/data', (request, response) => {
  let airplanes = {
    departure: Date.now(),
    canFly: true,
    pilot: 'Well Trained',
  };
  response.status(200).json(airplanes);
});

app.use('*', (req, res) => res.send('Sorry that route does not yet exist!'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
