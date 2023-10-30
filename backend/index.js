const connectToMongo = require('./db');
import { config } from 'dotenv';

config({
  path: "./config.env"
})

const express = require('express')
var cors = require('cors')

connectToMongo();
const app = express()
const port = 5000

app.use(cors());
app.get("/", (req,res) =>{
  res.setHeader("Access-Control-Allow--Credentials","true")
  res.send("API is running..")
});

app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`IdeaSpotter backend listening on port http://localhost:${port}`)
})
