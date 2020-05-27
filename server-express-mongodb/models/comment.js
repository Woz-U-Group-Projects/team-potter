var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({

    article: { type: Schema.Types.ObjectId, ref: 'Article' },
    content: { type: String, required: true, trim: true },
    thumbsup: { type: Number, default: 0},
    thumbsdown: { type: Number, default: 0},
        
},{
    timestamps : true,
});

module.exports =  mongoose.model('Comment', CommentSchema);