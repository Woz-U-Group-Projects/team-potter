var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({

  article: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article'},
    content: { type: String, required: true, trim: true },
    thumbsup: { type: Number, default: 0},
    thumbsdown: { type: Number, default: 0},
        
},{
    timestamps : true,
});

// Duplicate the ID field.
CommentSchema.virtual("id").get(function () { return this._id.toHexString(); });

// Ensure virtual fields are serialised.
CommentSchema.set("toJSON", { virtuals: true });

module.exports =  mongoose.model('Comment', CommentSchema);