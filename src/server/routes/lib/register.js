/**
 * Created by Kaveh T a h e r i a n on 15/08/2017.
 */
var express = require('express'),
    Reg = require('../../processes/registration.js'),
    _router = express.Router();
module.exports = function () {
    _router.route('/register')
        .get(function (req, res, next) {
            res.render('register');
        })
        .post(function (req, res, next) {
            var _reg = new Reg(req.db);
            _reg.startRegistration(req.body,function (err, result) {
                if(err){
                    return next(err);
                }else{
                    req.logIn(result.user,function (err) {
                        if(err){
                            return next(err);
                        }
                        // req._passport.session.user = user;
                        // req.session['passport'] = req._passport.session;
                        // res.end();
                        return res.redirect('/');
                    });
                }
            });
        });
    return _router;
};