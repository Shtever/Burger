var mysql = require("mysql");
var PORT = process.env.PORT

var connection = mysql.createConnection({
    host: "localhost",
    port: PORT,
    user: "root",
    password: "qwerty00",
    database: "burgers_db"
  });
  
  // Make connection.
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;
  