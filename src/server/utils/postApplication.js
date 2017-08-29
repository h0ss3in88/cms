/**
 * Created by Kaveh T a h e r i a n on 8/29/2017.
 */
var _ = require('lodash'),
    validator = require('validator');
var PostValidation = function(inputs) {
    var self = this;
    _.extend(self,inputs);
    var titleValidation = function () {
        return !!self.title &&
            !validator.isNumeric(self.title) &&
            !validator.isEmpty(self.title);
    };
    var bodyValidation = function () {
        return self.body &&
            !_.isEmpty(self.body) &&
            !validator.isEmpty(self.body);
    };
    var tagValidation = function () {
        return self.tags &&
               _.isArray(self.tags) &&
                !_.isNull(self.tags) &&
                !_.isEmpty(self.tags.join(','));
    };
    var userIdValidation = function () {
        return !!self.userId &&
            !validator.isEmpty(self.userId) &&
            validator.isMongoId(self.userId);
    }
    this.isValid = function () {
        return titleValidation() &&
            bodyValidation() &&
            tagValidation() &&
            userIdValidation();
    }
};
module.exports = PostValidation;
