const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",
  // Your password
  password: "HOTdog123456",
  database: "employees_db",
});

db.connect(function (err) {
  if (err) {
    console.log(err);
    return;
  }
});

// Setting up connection.query to use promises instead of callbacks
// This allows us to use the async/await syntax
exports.db = function () {
  return db;
};
