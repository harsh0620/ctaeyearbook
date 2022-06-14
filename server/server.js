const express = require("express");
const dotenv = require("dotenv");
const app = require("./app");
var cors = require("cors");
const path = require("path");
const http = require("http");
app.use(cors());
const port = process.env.PORT || 8080;

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
console.log(path.join(__dirname, "client/build", "index.html"));

const server = http.createServer(app);
server.listen(port, () => {
  console.log("Server is listening on port :", port);
});
