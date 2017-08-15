/**
 * Created by Kaveh T a h e r i a n on 14/08/2017.
 */
var express = require('express'),
    mongoose = require('mongoose'),
    path = require('path');

var app = express();
app.use('/bower_components',express.static(path.resolve(__dirname,'../','../','bower_components')));
app.use('/client',express.static(path.resolve(__dirname,'../','client')));
require('./configs/expressCfg')(app);
require('./configs/mongodb')(mongoose,app);
app.use(require('./utils/middlewares/db'));
require('./configs/passportCfg')(app.get('db'));
require('./routes')(app);
module.exports = app;