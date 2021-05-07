console.log("@server.js");
const express = require("express");
const inquirer = require("inquirer");
const cTable = require("console.table");
const mysql = require("mysql2");
const PORT = 3000;
const app = express();
const script = require("./assets/js/script.js");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

////////////////////////////////
app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.use(express.static("assets"));

////////////////////////////////
// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});
////////////////////////////////
app.listen(PORT, () => {
  console.log("Listening on Port", PORT);
});
