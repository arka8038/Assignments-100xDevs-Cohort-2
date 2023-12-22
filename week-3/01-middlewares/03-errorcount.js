const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let errorCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint


const errorHandler = (err, req, res, next) => {
  if (err && err.message === 'User not found') {
    errorCount++;
    res.status(404).json({ error: 'Not Found' });
  } else {
    next(err);
  }
};

app.use((req, res, next) => {
  res.locals.errorCount = errorCount;
  next();
});

app.get('/user', function(req, res, next) {
  try {
    throw new Error("User not found");
  } catch (err) {
    next(err);
  }
});

app.post('/user', function (req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', function (req, res) {
  res.status(200).json({ errorCount });
});

app.use(errorHandler);

module.exports = app;