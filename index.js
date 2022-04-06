const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Joshua</h1>");
});

app.listen(2000, () => {
  console.log("🚀 Server running on PORT 2000");
});
