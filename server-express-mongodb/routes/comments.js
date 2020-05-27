var express = require("express");
var router = express.Router();
var CommentModel = require("../models/comment");
var ArticleModel = require("../models/article");

router.get("/:id", function (req, res, next) {
    ArticleModel.findById(req.params.id).then(article => res.json(article));
  })

router.get('/' , (req,res) => {
    CommentModel.find({})
        .populate('article')
        .sort({'createdAt':-1})
        .then(comments => res.json(comments))
        .catch(err => res.status(400).json('Error' + err));
  });

router.post('/', async (req, res) => {
    const comment = new CommentModel({
       
        article: req.params.id,        
        content : req.body.content

    }); console.log(req.params.id)
    try {
        const savedComment = await comment.save();
        const savedCommentWithArticleData = await CommentModel.findById(savedComment._id).populate('article');
        res.send(savedCommentWithArticleData); 
    }catch(err){
        res.status(400).send(err);
    }
})

router.put('/update/', async (req,res) => {
    
    console.log(req.article);
    try {
        await CommentModel.findByIdAndUpdate(req.body._id, { thumbsup : req.body.thumbsup, thumbsdown: req.body.thumbsdown });
        res.send({ "success": true });
    }catch(err){
        res.status(400).send(err);
    }
})

module.exports = router;
