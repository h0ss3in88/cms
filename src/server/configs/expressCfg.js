/**
 * Created by Kaveh T a h e r i a n on 15/08/2017.
 */
var bodyParser = require('body-parser'),
    path= require('path'),
    compression = require('compression'),
    methodOverride = require('method-override'),
    responseTime = require('response-time'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    RedisStore = require('connect-redis')(session),
    passport = require('passport'),
    logger = require('morgan'),
    moment = require('moment');
module.exports = function (app) {
    app.locals.moment = moment;
    app.use(logger('dev'));
    app.set('view engine','jade');
    app.set('views',path.resolve(__dirname,'../','views'));
    app.use(compression());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended : true }));
    app.use(cookieParser('doublesecretProtection'));
    app.use(session({
        name : 'cmsAuthSession',
        secret: 'supersecret',
        saveUninitialized: false,
        resave: false,
        store : new RedisStore({
            host : process.env.OPENSHIFT_REDIS_DB_HOST || process.env.NODE_REDIS_HOST,
            port : process.env.OPENSHIFT_REDIS_DB_PORT || process.env.NODE_REDIS_PORT,
            pass : 'ZTNiMGM0NDI5OGZjMWMxNDlhZmJmNGM4OTk2ZmI5'
        }),
        cookie : { path : '/' , httpOnly : true , secure : false , expires: new Date(Date.now() + (30 * 86400 * 1000)) }
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(methodOverride('_method'));
    app.use(responseTime());
    app.set('x-powered-by',false);
    app.set('ClientID','a64093991a9543e2a398c3b7cfd3ad58');
    app.set('ClientSecret','4c2a883883de4ecda6af40be9be115c1');
    if(process.env.NODE_ENV &&
        process.env.NODE_ENV == 'development'){app.set('port',process.env.PORT || 3300);}
    else {
        var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
        var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
        app.set('port',server_port);
        app.set('server_ip_address',server_ip_address);
    }
};