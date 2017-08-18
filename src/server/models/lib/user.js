/**
 * Created by Kaveh T a h e r i a n on 15/08/2017.
 */
var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId,
    plugIn = require('../../utils/converterPlugin.js');

var userSchema = new Schema({
    email : { type: String , unique : true},
    salt : { type : String },
    hashed_password : { type : String },
    profile : {
        first_name: {type: String},
        last_name: {type: String},
        gender: { type: String },
        image: { type: Buffer , required: false },
        user_name: {type: String},
        age : { type : Number},
        birthDate : { type : Date, required : false },
        birthPlace : { type : String },
        twitter :{ type : String },
        facebook: { type : String },
        instagram: { type : String }
    },
    is_active : { type : Boolean, default : false },
    status : { type : String , default : 'pending'},
    current_login_at : { type : Date , default : Date.now },
    last_login_at : { type : Date , default : Date.now },
    login_counts : { type : Number , default : 1},
    logs : [{ type : ObjectId , ref : 'Log'}],
    created_at : { type: Date , default: Date.now },
    modified_at : { type: Date , default: Date.now }
});
userSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
userSchema.virtual('password').set(function (pass) {
    this._password = pass;
    this.salt = this.makeSalt();
    this.hashed_password = this.hashPassword(this._password);
}).get(function () {
    return this._password;
});
userSchema.methods.makeSalt = function () {
    return crypto.randomBytes(256).toString('base64');
};
userSchema.methods.hashPassword = function (pass) {
    pass.toString('base64');
    return crypto.createHmac('sha256', this.salt).update(pass).digest('hex');
};
userSchema.methods.checkPassword = function (plainPassword) {
    return this.hashed_password == this.hashPassword(plainPassword);
};
userSchema.plugin(plugIn);
module.exports = mongoose.model('User',userSchema);