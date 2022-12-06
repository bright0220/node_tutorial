var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

con.connect(function (err) {
  if (err) throw err;
  var adr = "Mountain 21";
  console.log(mysql.escape(adr));
  con.query(
    "SELECT * FROM customers WHERE address LIKE 'S%'",
    function (err, result, fileds) {
      if (err) throw err;
      console.log(result);
    }
  );
});
