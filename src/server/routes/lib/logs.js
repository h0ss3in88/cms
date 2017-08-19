/**
 * Created by Kaveh T a h e r i a n on 19/08/2017.
 */
var express = require('express'),
    _router = express.Router(),
    auth = require('../../utils/middleWares/globalAuth.js');
module.exports = function () {
    _router
        .route('/account/users/profile/logs/:id')
        .all(auth())
        .param('id',function (req, res, next, id) {
            req.db.Log
                .find({ 'user_id' : id })
                .select('subject description created_at modified_at')
                .exec(function (err, docs) {
                    if(err) return next(err);
                    req.logs = docs;
                    return next();
                });
        })
        .get(function (req, res, next) {
            if(req.logs){
                return res.render('logs',{ logs : req.logs , user : req.user });
            }else{
                return next(new Error('no logs find'));
            }
        });
    return _router;
};