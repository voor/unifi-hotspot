// dependencies  ===============================================================
const express = require('express');
const session = require('express-session');
const app = express();
const morgan = require('morgan');

// logging
app.use(morgan('tiny'));

// middleware
app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

// routes ======================================================================
app.use('/authorize', require('./src/routes/authorize')());
app.use('/', require('./src/routes/landing')());

// launch ======================================================================
app.listen(process.env.PORT, () => {
  console.log('running server on port ' + process.env.PORT);
});
