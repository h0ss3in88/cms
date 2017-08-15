/**
 * Created by Kaveh T a h e r i a n on 15/08/2017.
 */
var _ = require('lodash'),
    Q = require('q'),
    mongoose = require('mongoose'),
    models = require('../models');
var Db = function (args) {
    var self = this;
    self.init= function () {
        var defer = Q.defer();
        mongoose.connect(args.uri,args.options,function (error) {
            if(error) { defer.reject(error); }
            else{
                self.User = models.User;
                self.Log = models.Log;
                defer.resolve(self);
            }
        });
        return defer.promise;
    }
};
module.exports = Db;