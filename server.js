const db =require('./db');
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(logger('dev'));




app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))