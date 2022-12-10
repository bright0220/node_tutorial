var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: /^S/ };
  var newvalues = { $set: { name: "Minnie" } };
  dbo
    .collection("customers")
    .updateMany(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log(res);
      db.close();
    });
});
