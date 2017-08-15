/**
 * Created by Kaveh T a h e r i a n on 15/08/2017.
 */
var express = require('express'),
    router = express.Router();
module.exports = function () {
    router
        .route('/logout')
        .get(function (req,res,next) {
            req.logout();
            res.redirect('/');
        });
    return router;
};