/**
 * Created by hussein on 8/29/2017.
 */
var _ = require('lodash'),
    assert = require('assert'),
    async = require('async'),
    PostApplication = require('../utils/postApplication.js');
var Post = function (args) {
    assert.ok(args.db !== null , 'database provider required');
    assert.ok(args.userId !== null || args.userId != undefined, 'unknown author');
    var self = this;
    _.extend(self,args);
    // check inputs
    var checkInputs = function (callback) {
        if(self.application.isValid()){
           return callback(null,true);
        }else{
            return callback('invalid inputs',null);
        }
    };
    // create post
    var createPost = function (callback) {
        self.db.Post.create(self.inputs,function (err, doc) {
            if(err) { return callback(err,null); }
            if(!doc || validator.isEmpty(doc)){ return callback('something bad happened'); }
            else{
                return callback(null,doc);
            }
        });
    };
    // start uploading post
    self.start= function (cb) {
        self.application = new PostApplication(self.inputs);
        async.series([
            checkInputs,
            createPost
        ],function (error, results) {
            if(error){
                return cb(error,null);
            }else{
                // return back success flag
                return cb(null,results);
            }
        });
    }
};
module.exports = Post;
