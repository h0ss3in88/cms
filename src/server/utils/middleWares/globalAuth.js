/**
 * Created by Kaveh T a h e r i a n on 15/08/2017.
 */
module.exports = function () {
    return function(req,res,next){
        if(req.isAuthenticated()){
            return next();
        }else{
            return res.redirect('/login');
        }
    }
};