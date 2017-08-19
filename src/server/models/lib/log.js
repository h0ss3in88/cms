/**
 * Created by Kaveh T a h e r i a n on 15/08/2017.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId,
    plugIn = require('../../utils/converterPlugin.js');
var logSchema = new Schema({
    subject : { type : String },
    description : { type : String },
    user_id : { type : ObjectId , ref : 'User'},
    created_at : { type: Date , default: Date.now },
    modified_at : { type: Date , default: Date.now }
});
logSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
logSchema.plugin(plugIn);
module.exports = mongoose.model('Log',logSchema);
