/**
 * Created by Kaveh T a h e r i a n on 15/08/2017.
 */
var express =require('express'),
    auth = require('../../utils/middleWares/globalAuth.js'),
    _router = express.Router();

module.exports = function () {
    _router.route('/account/users/profile')
        .get(function (req, res, next) {
            if(auth()){
                console.log(req.user);
                return res.render('profile',{ user : req.user });
            }
            else{
                return res.json('not authorize');
            }
        })
        .post(function (req, res, next) {

        });
    return _router;
};