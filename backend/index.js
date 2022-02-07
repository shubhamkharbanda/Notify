

const connectTomongo = require('./db')
connectTomongo();
const express = require('express')
const app = express()
const port = 5000
const cors=require('cors')
app.use(
  cors({
    origin:"http://localhost:3000"

  })
)
app.use('/auth',require('./Routes/auth'))
app.use('/notes',require('./Routes/notes'))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
