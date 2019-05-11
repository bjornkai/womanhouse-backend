require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const session      = require('express-session');
const passportSetup =  require('./config/passport/passport-setup');
const cors = require('cors');

// mongoose
//   .connect('mongodb://localhost/womanhouse-backend', {useNewUrlParser: true})
//   .then(x => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//   })
//   .catch(err => {
//     console.error('Error connecting to mongo', err)
//   });
mongoose
  .connect(process.env.MONGODB_URI, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
// mongoose
//   .connect('mongodb://heroku_dh5ql4sl:lnvepabre86akoi30muu53uhqv@ds237989.mlab.com:37989/heroku_dh5ql4sl', {useNewUrlParser: true})
//   .then(x => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//   })
//   .catch(err => {
//     console.error('Error connecting to mongo', err)
//   });


mongoose.set('useFindAndModify', false);

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());



// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));


// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

// allow CORS (Cross Origin Resource Sharing)
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(cors({
  credentials: true,
  origin:  'http://localhost:3000', //needs to be womanhouse for deploying to heroku
  methods: ["GET", "POST", "DELETE", "PUT"]
}));

// HANDLE SESSIONS HERE:
// app.js
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}));

// 🎯🎯🎯 MUST COME AFTER SESSION: 🎯🎯🎯
passportSetup(app);

//const index = require('./routes/index');
//app.use('/', index);

const songRoutes = require('./routes/song-routes');
app.use('/api', songRoutes);

const authRoutes = require('./routes/auth-routes');
app.use('/api', authRoutes);

const showRoutes = require('./routes/show-routes');
app.use('/api', showRoutes);

const galleryRoutes = require('./routes/image-routes');
app.use('/api', galleryRoutes);

const fileUploadRoutes = require('./routes/file-upload-routes');
app.use('/api', fileUploadRoutes);

// entrance point to the react app from the backend
app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/public/index.html");
});

module.exports = app;
