/**
 * Created by Kaveh T a h e r i a n on 15/08/2017.
 */
module.exports = function (app) {
    app.use('/',require('./lib/home')());
    app.use('/',require('./lib/login')());
    app.use('/',require('./lib/register')());
    app.use('/',require('./lib/logout')());
};