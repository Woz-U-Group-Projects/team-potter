var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var mongoose = require("mongoose");

var articlesRouter = require("./routes/articles");
var commentsRouter = require("./routes/comments");

var app = express();


var mongoDB = require("./private/mongo");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/articles", articlesRouter);
app.use("/comments", commentsRouter);


// var mongoDB = "mongodb://127.0.0.1/database";
// //var mongoDB =
//   "mongodb+srv://ammon:Password1%21@cluster0-lhvh5.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on("connected", () => console.log(`Mongoose connection open to ${mongoDB}`));
db.on("disconnected", () => console.log("Mongoose connection disconnected"));
db.on("error", console.error.bind(console, "Mongoose connection error:"));

module.exports = app;
