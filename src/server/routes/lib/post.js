/**
 * Created by Kaveh T a h e r i a n on 8/29/2017.
 */
var express = require('express'),
    auth = require('../../utils/middleWares/globalAuth.js'),
    Uploadpost = require('../../processes/createPost.js'),
    _router = express.Router();
module.exports = function () {
    _router.use(auth());
    _router.get('/posts/add',function (req, res, next) {
       return res.render('/posts/add',{ user : req.user });
    });
    _router.post('/posts/add',function (req, res, next) {
        // check incoming values with express-validator
        // create post by UploadPost process
        // redirect user to /posts route

    });
    _router.param('id',function (req, res, next, id) {

    });
    _router.route('/posts/:id')
        .get(function (req, res, next) {
            // find post by it's id in above _router.param section
            // show the post by view jade file
            return res.render('/posts/view',{ user : req.user , post : req.post });
        })
        .post(function (req, res, next) {

        })
        .put(function (req, res, next) {

        })
        .delete(function (req, res, next) {

        });
    return _router;
};