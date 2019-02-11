const express = require("express");

const app = express();

const port = 3001;

app.get("/", (req, res) => {
  //console.log(req);
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`travel fm is listening on port ${port}`);
});
