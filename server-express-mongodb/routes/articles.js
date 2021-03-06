var express = require("express");
var router = express.Router();
var ArticleModel = require("../models/article");

router.get("/", function(req, res, next) {
  ArticleModel.find().then(articles => res.json(articles));
});

router.get("/:id", function (req, res, next) {
  ArticleModel.findById(req.params.id).then(article => res.json(article));
})
router.post("/", function(req, res, next) {
  let newArticle = new ArticleModel();
  newArticle.title = req.body.title;
  newArticle.article = req.body.article;
  newArticle.authorname = req.body.authorname;
  newArticle.complete = false;
  newArticle.save().then(article => res.json(article));
});

router.delete("/:id", function(req, res, next) {
  ArticleModel.findByIdAndRemove(req.params.id, (err, article) => {
    if (err) return res.status(400).send(err);
    res.send(article);
  });
});

router.put("/:id", function(req, res, next) {
  ArticleModel.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      complete: req.body.complete
    },
    { new: true },
    (err, article) => {
      if (err) return res.status(400).send(err);
      res.send(article);
    }
  );
});

module.exports = router;
