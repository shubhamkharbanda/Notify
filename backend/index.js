

const connectTomongo = require('./db')
connectTomongo();
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors=require('cors')
app.use(
  cors({
    origin:"http://localhost:3000"

  })
)
app.use('/auth',require('./Routes/auth'))
app.use('/notes',require('./Routes/notes'))

if ( process.env.NODE_ENV == "production"){app.use(express.static("client/build"));const path = require("path");app.get("*", (req, res) => {res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));})}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
