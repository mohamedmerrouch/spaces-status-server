const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require("cors");
require('dotenv').config()

const indexRouter = require('./routes/index');
const spacesRouter = require('./routes/spaces');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


mongoose.connect(process.env.MONGO_DB_URL)
    .then(() => console.log('Connected!'));

app.use('/', indexRouter);
app.use('/spaces', spacesRouter);

module.exports = app;
