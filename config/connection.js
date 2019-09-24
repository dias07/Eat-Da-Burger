// Set up MySQL connection.
var mysql = require("mysql");

// if (process.env.JAWSDB_URL){
//   connection = mysql.createConnection(process.env.JAWSDB_URL)
// } else {
//   connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "Diyas070591",
//   database: "burgers_db",
//   waitForConnection: true
// });
// }

var connection = mysql.createConnection({
  host: "y0nkiij6humroewt.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "wmr10nlhwq17yabo",
  password: "xcg5tmnvezraechd",
  database: "nvnbls8vp4ack25t",
  waitForConnection: true
})
// Make connection.
connection.connect();

// Export connection for our ORM to use.
module.exports = connection;
