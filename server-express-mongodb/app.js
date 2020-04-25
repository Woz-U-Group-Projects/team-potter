var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var mongoose = require("mongoose");

var tasksRouter = require("./routes/tasks");

var app = express();

<<<<<<< HEAD
var mongoDB = require("./private/mongo");
||||||| merged common ancestors
=======
var mongoDB = require("./private/mongo");

>>>>>>> 0696cf5644599c3792aad87dd533e85e49409b98
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/tasks", tasksRouter);

<<<<<<< HEAD
||||||| merged common ancestors
var mongoDB = "mongodb://127.0.0.1/database";
//var mongoDB =
  "mongodb+srv://ammon:Password1%21@cluster0-lhvh5.mongodb.net/test?retryWrites=true&w=majority";
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
