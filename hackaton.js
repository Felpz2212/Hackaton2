const express = require('express')
const app = express()
const NF = require('./models/nf')
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/dialogflow', async (req, res) => {

  console.log('Entrou')


  const NF = await NF.findAll();


  res.send(NF)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})