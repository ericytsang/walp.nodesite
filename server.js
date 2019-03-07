const express = require("express");
const app = express();
const port = 9090

// server

app.listen(port)
{
  console.log("listening on "+port)
}

// practising with GET

app.get("/", (req, res) =>
{
  res.sendFile(`${__dirname}/index.html`)
})

app.get("/dirname", (req, res) =>
{
  res.send(__dirname)
})
