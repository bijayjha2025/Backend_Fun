console.log("Bijay");

require('dotenv').config()

const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user', (req, res) => {
  res.send('bijayjha123')
})

app.get('/about', (req, res) => {
  res.send('I am a backend developer')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})