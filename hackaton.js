const express = require('express')
const app = express()

const port = 3000
const prisma = new PrismaClient();

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/dialogflow', async (req, res) => {

  console.log('Entrou')


  const NF = await prisma.NF.findOne({where:{
      documento: req.body.documento
  }})


  res.send(NF)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})