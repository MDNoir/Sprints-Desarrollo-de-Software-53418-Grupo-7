var mysql = require('mysql');

var con = mysql.createConnection({
host: "127.0.0.1",
user: "root",
password: "",
database: "manguito"
});

/*
var reg = { 
    usuario: "noirock",
    edad: 25,
    contrasena: "suanfonzon"
}
*/

con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO usuarios (usuario, edad, contrasena) VALUES ('"+reg.usuario+"', '"+reg.edad+"', '"+reg.contrasena+"')";
    con.query(sql, function(err, result, fields){
        if (err) throw err;
        console.log(result);
    });
});