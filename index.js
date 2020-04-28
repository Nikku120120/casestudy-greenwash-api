const config = require('./src/config/config');
const mongodb = require('./src/models/mongodb');
const passportconfig = require('./src/config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

const routes = require('./src/routes/routes');

var app = express();

// middleware
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(cors());
app.use('/api', routes);

//error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});

// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));