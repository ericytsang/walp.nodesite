const express = require("express")
const bodyParser= require('body-parser')

const app = express()
const port = 9090

app.use(bodyParser.urlencoded({extended: true}))

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

// note CRUD

app.post("/note", (req, res) =>
{
  res.send(req.body)
  console.log(req.body)
})
