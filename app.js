const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Ryyan! Node app running on EC2 hello ji me ryyan khan shahb and  with Docker 🚀");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

