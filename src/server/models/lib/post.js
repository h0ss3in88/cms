/**
 * Created by hussein on 8/29/2017.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId;
var postSchema = new Schema({
    title : { type : String },
    description : { type : String , required : false },
    body : { type : String , required : '{PATH} is required '},
    view_counts : { type : Number , default : 0 },
    status : { type : String , default : 'drafted' },
    author : { type : ObjectId , ref : 'User' },
    tags : [{
        type : String,
        set : function (value) {
            return value.split(',');
        },
        get : function (value) {
            return value.join(',');
        }
    }],
    comments : [{ type : ObjectId , ref : 'Comment' , default : [] }],
    published_at : { type : Date , required : false },
    created_at : { type : Date , default : Date.now },
    modified_at : { type : Date , default : Date.now }
});
postSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
module.exports = mongoose.model('Post',postSchema);