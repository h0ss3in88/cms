/**
 * Created by Kaveh T a h e r i a n on 15/08/2017.
 */
module.exports = function (req, res, next) {
    req.db = req.app.get('db')[0];
    return next();
};