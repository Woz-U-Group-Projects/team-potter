<<<<<<< HEAD
// var mongoDB = "mongodb://127.0.0.1/database";
 var mongoDB =
  "mongodb+srv://dbuser1:Password1@lifestyle-blog-vjztb.mongodb.net/test?retryWrites=true&w=majority";

module.exports = mongoDB;

||||||| merged common ancestors
var mongoDB = "mongodb://127.0.0.1/database";
//var mongoDB =
  "mongodb+srv://dbuser:W9wB4S0xgvap4ccx@lifestyle-blog-vjztb.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
=======
//var mongoDB = "mongodb://127.0.0.1/database";
var mongoDB =
  "mongodb+srv://dbuser:W9wB4S0xgvap4ccx@lifestyle-blog-vjztb.mongodb.net/test?retryWrites=true&w=majority";

module.exports = mongoDB;
>>>>>>> d4edfa22a5b13d11a8a31d5b16c7fc2dcc2f6e35
