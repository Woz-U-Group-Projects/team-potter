<<<<<<< HEAD
//var mongoDB = "mongodb://127.0.0.1/database";
var mongoDB =
  "mongodb+srv://dbuser:W9wB4S0xgvap4ccx@lifestyle-blog-vjztb.mongodb.net/test?retryWrites=true&w=majority";

module.exports = mongoDB;
=======
var mongoDB = "mongodb://127.0.0.1/database";
//var mongoDB =
  "mongodb+srv://dbuser:W9wB4S0xgvap4ccx@lifestyle-blog-vjztb.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
>>>>>>> 2c461a9156cc9fe55c7785a380f44be9803d8c47
