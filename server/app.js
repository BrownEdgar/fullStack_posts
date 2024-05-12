require('dotenv').config()
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const mongoose = require('mongoose')
const models = require('./models')
const services = require('./services')



const url = 'mongodb://127.0.0.1:27017/test';

mongoose.connect(url)
  .then(() => console.log('Connected!'))
  .catch(err => console.log(err))

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const postRouter = require('./routes/posts');
const app = express();

app.locals.models = {
  posts: models.posts,
  users: models.users,
}
app.locals.services = {
  posts: new services.posts(app.locals.models),
  users: new services.users(app.locals.models)
}

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ err });
});

module.exports = app;
