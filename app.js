const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Papa! Node app running on EC2 hello ji me ryyan ji with AWS 🚀");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

