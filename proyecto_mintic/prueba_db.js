var mysql = require('mysql');

var con = mysql.createConnection({
host: "127.0.0.1",
user: "root",
password: "",
database: "manguito"
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
    var sql = "SELECT * FROM usuarios";
    con.query(sql, function(err, result, fields){
        if (err) throw err;
        console.log(result);
    });
});