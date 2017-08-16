/**
 * Created by Kaveh T a h e r i a n on 15/08/2017.
 */
var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    Auth = require('../processes/authentication.js'),
    assert = require('assert');
module.exports = function (db) {
    assert.ok(db,'dataBase object required');
    passport.use(new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password'
    },function (email,password,done) {
        var _auth = new Auth(db);
        _auth.start({ email : email , password : password },function (err,result) {
            if(err){
                return done(null,false,err);
            }else{
                return done(null,result.user);
            }
        });
    }));
    passport.serializeUser(function (user, done) {
        console.log('serial user');
        done(null,user._id);
    });
    passport.deserializeUser(function (id, done) {
        db.User.findOne({_id : id },function (err, user) {
            console.log('deserialize user');
            if(err) { return done(err); }
            done(null,user);
        });
    });
};