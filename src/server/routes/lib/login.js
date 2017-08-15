/**
 * Created by Kaveh T a h e r i a n on 15/08/2017.
 */
var express = require('express'),
    passport = require('passport'),
    _router = express.Router();
module.exports = function () {
    _router.route('/login')
        .get(function (req, res, next) {
            res.render('login');
        })
        .post(function (req, res, next) {
            passport.authenticate('local', function(err, user, info) {
                if (err) { return next(err); }
                if(user == false && info) { return res.json({ unAuthorize : info } ); }
                if (!user) { return res.redirect('/login'); }
                req.logIn(user, function(err) {
                    if (err) { return next(err); }
                    else{
                        res.redirect('/');
                    }
                });
            })(req, res, next);
        });
    return _router;
};