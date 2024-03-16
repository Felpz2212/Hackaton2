const express = require('express')
const User = require('./models/user');
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/dialogflow', async (req, res) => {

  console.log('Entrou')


  const user = await User.findAll();


  res.send(user)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})