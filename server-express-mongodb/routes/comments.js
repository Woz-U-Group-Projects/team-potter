var express = require("express");
var router = express.Router({ mergeParams: true }); // this is helpful when working with nested routes
var CommentModel = require("../models/comment");
var ArticleModel = require("../models/article");

router.get("/:articleId", function (req, res, next) {
  ArticleModel.findById(req.params.articleId)    
    .then((article) => res.json(article));
});
router.post("/:articleId", function (req, res, next) {
  // create new comment document
  const newComment = new CommentModel(req.body);
  newComment.article = req.params.articleId;
  // find article document
  return ArticleModel.findById(req.params.articleId)
    .then((article) =>
      // save new comment document
      newComment
        .save()
        .then((createdComment) => {
          // add new comment ID to article document
          console.log(article);
          article.comments.push(createdComment._id);
          return article
            .save()
            .then(() => res.redirect(`/articles/${article.id}/comments`))
            .catch((err) => next(err));
        })
        .catch((err) => next(err))
    )
    .catch((err) => next(err));
});

module.exports = router;
