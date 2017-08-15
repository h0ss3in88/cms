/**
 * Created by Kaveh T a h e r i a n on 15/08/2017.
 */
var passport = require('passport');
module.exports = function (req,res,next) {
    var redirects = {
        successRedirect : '/',
        failureRedirect : '/login',
        failureFlash : true
    };
    return passport.authenticate('local',redirects);
};