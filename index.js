// cron scheduled at cron-job.org @ eli.finer+soft.discpline@gmail.com

const express = require('express');
const moment = require('moment');
const cohort = require('./cohortX.js');

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  if (req.query.token && req.query.token === process.env.URL_TOKEN) {
    await cohort.postCheckin();
    res.send('OK ' + moment().format());
  } else {
    res.status(403).send('Access denied');
  }
});

app.listen(port, () => {
  console.log(`Soft Discpline Reddit Bot listening at http://localhost:${port}`);
});
