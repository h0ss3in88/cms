/**
 * Created by Kaveh T a h e r i a n on 15/08/2017.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId;
var logSchema = new Schema({
    subject : { type : String },
    description : { type : String },
    created_at : { type : Date , default: Date.now },
    modified_at : { type : Date ,default : Date.now },
    user_id : { type : ObjectId , ref : 'User'},
    created_at : { type: Date , default: Date.now },
    modified_at : { type: Date , default: Date.now }
});
logSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
module.exports = mongoose.model('Log',logSchema);
