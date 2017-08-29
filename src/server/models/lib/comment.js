/**
 * Created by Kaveh T a h e r i a n on 8/29/2017.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId;
var commentSchema = new Schema({
    title : { type : String , required: '{PATH} is required' },
    email : { type : String , required : '{PATH} is required' },
    body : { type : String , required : '{PATH} is required '},
    status : { type : String , default : 'pending' },
    post_id : { type : ObjectId , ref : 'Post'},
    ip : { type : String , required : '{PATH} is required' },
    liked : { type : Number , default : 0 },
    dis_liked : { type : Number , default : 0 },
    published_at : { type : Date , required : false },
    created_at : { type : Date , default : Date.now },
    modified_at : { type : Date , default : Date.now }
});
commentSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
module.exports = mongoose.model('Comment',commentSchema);