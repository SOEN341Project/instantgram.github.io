var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
var cors = require("cors");
var expressValidator = require('express-validator');
var session = require('express-session');

mongoose.connect('mongodb://localhost/instantgram');
let db = mongoose.connection;

//check connection
db.once('open', function(){
  console.log('Connected to MongoDB');
});
mongoose.set('useFindAndModify', false);

//check database errors
db.on('error', function(err){
  console.log(err);
});


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/usersController');
var picsRouter = require('./routes/picsController');
var loginRouter = require('./routes/login');
var users = require('./routes/usersController');
var dashboardRouter = require('./routes/dashboard');
var logoutRouter = require('./routes/logout');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: "asdfasdfasdfasdf", resave: false, saveUninitialized: true}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/postpic', picsRouter);
app.use('/users', users);
app.use('/login', loginRouter);
app.use('/dashboard', dashboardRouter);
app.use('/logout', logoutRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
