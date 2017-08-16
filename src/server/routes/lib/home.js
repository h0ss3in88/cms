/**
 * Created by Kaveh T a h e r i a n on 15/08/2017.
 */
var express = require('express'),
    _router = express.Router();
module.exports = function () {
    _router.route('/')
        .get(function (req, res, next) {
            console.log(req.session);
            res.render('home',{ user : req.user });
        });
    return _router;
};