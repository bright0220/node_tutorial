var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  var dbo = db.db("mydb");
  var myquery = { address: "Valley 345" };
  var newvalues = { $set: { name: "Mickey", address: "Canyon 123" } };
  dbo
    .collection("customers")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log(res);
      db.close();
    });
});
