/**
 * Created by Kaveh T a h e r i a n on 15/08/2017.
 */
var express =require('express'),
    _router = express.Router();

module.exports = function () {
    _router.route('/account/users/profile')
        .get(function (req, res, next) {
            console.log(req.session);
            if(req.isAuthenticated()){
                res.render('profile',{ user : req.user });
            }
            else{
                return res.json('not authorize');
            }
        })
        .post(function (req, res, next) {

        });
    return _router;
};