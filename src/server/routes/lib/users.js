/**
 * Created by Kaveh T a h e r i a n on 15/08/2017.
 */
var express = require('express'),
    auth = require('../../utils/middleWares/globalAuth.js'),
    _router = express.Router();
module.exports = function () {
    _router.route('/account/users')
        .get(function (req, res, next) {
            console.log(req.session);
            if(req.isAuthenticated()){
                req.db.User.find({},function (err, docs) {
                    if(err) { return next(err); }
                    else{
                        return res.render('users', { user : req.user ,users : docs});
                    }
                });
            }else {
                return res.status(401).send('not authorize');
            }
        });
    return _router;
};