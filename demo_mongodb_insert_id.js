var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { _id: 1, product_id: 154, status: 1 };
  dbo.collection("orders").insertOne(myobj, function (err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
