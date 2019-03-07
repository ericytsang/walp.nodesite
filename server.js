const express = require("express")
const bodyParser= require('body-parser')

const app = express()
const port = 9090

app.use(bodyParser.urlencoded({extended: true}))

const mongoDbClient = require('mongodb').MongoClient
var mongoDbConnection;

// connect to database

mongoDbClient.connect('mongodb+srv://application:4OoNV5z8Jw5ac0B0VKCIl6sMa6h@walp-nodesite-pgjky.mongodb.net/test?retryWrites=true', (err, client) => {

  // log error & abort if present
  if (err) return console.log(err)

  // establish connection with database
  mongoDbConnection = client.db("walp-nodesite")

  // only listen for web client requests after connection with db is established
  app.listen(port)
  {
    console.log("listening on "+port)
  }
})

// practising with GET

app.get("/", (req, res) =>
{
  var cursor = mongoDbConnection.collection("note").find()
  cursor.toArray((err, cursorRes) =>
  {
    // log error & abort if present
    if (err) return console.log(err)

    // send the client the quotes
    res.send(cursorRes)
  })
})

app.get("/dirname", (req, res) =>
{
  res.send(__dirname)
})

// note CRUD

app.post("/note", (req, res) =>
{
  mongoDbConnection.collection("note").save(req.body, (err, result) => {

    // log error & abort if present
    if (err) console.log(err)

    // log saving success
    console.log(`saved: ${req.body}`)

    // make browsers reload the page
    res.redirect("/")
  })
})
