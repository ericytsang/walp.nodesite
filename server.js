const express = require("express");
const app = express();
const port = 9090

app.listen(port)
{
  console.log("listening on "+port)
}

app.get("/", (req, res) =>
{
  res.sendFile(`${__dirname}/index.html`)
})

app.get("/dirname", (req, res) =>
{
  res.send(__dirname)
})
