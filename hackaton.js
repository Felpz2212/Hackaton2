const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/dialogflow', async (req, res) => {

  console.log('Entrou')

  res.send({
    fulfillmentMessages: [
      {
        text: {
          text: [
            req.body.queryResult.queryText
          ]
        }
      }
    ]
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})