var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var mongoose = require("mongoose");

var articlesRouter = require("./routes/articles");

var app = express();

<<<<<<< HEAD
<<<<<<< HEAD
var mongoDB = require("./private/mongo");
||||||| merged common ancestors
=======
var mongoDB = require("./private/mongo");

>>>>>>> 0696cf5644599c3792aad87dd533e85e49409b98
||||||| merged common ancestors
=======
var mongoDB = require("./private/mongo"); 

>>>>>>> 1ba287e5e30050a28f613c67fc8533e0b1da25c2
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/articles", articlesRouter);


<<<<<<< HEAD
<<<<<<< HEAD
||||||| merged common ancestors
var mongoDB = "mongodb://127.0.0.1/database";
//var mongoDB =
  "mongodb+srv://ammon:Password1%21@cluster0-lhvh5.mongodb.net/test?retryWrites=true&w=majority";
||||||| merged common ancestors
var mongoDB = "mongodb://127.0.0.1/database";
//var mongoDB =
  "mongodb+srv://ammon:Password1%21@cluster0-lhvh5.mongodb.net/test?retryWrites=true&w=majority";
=======
>>>>>>> 1ba287e5e30050a28f613c67fc8533e0b1da25c2
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
=======

mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
>>>>>>> 0696cf5644599c3792aad87dd533e85e49409b98
var db = mongoose.connection;
db.on("connected", () => console.log(`Mongoose connection open to ${mongoDB}`));
db.on("disconnected", () => console.log("Mongoose connection disconnected"));
db.on("error", console.error.bind(console, "Mongoose connection error:"));

module.exports = app;
