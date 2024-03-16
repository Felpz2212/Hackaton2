const express = require('express')
const app = express()
const port = 3000
const { Pool } = require('pg');

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//postgres://deploy:E8AasENMyCvyjLaPNjKw52Hwi0NnmKvq@dpg-cnqpunen7f5s7388smlg-a/dbhackaton_vs6u
const pool = new Pool({
  user: 'deploy',
  host: 'dpg-cnqpunen7f5s7388smlg-a',
  database: 'dbhackaton_vs6u',
  password: 'E8AasENMyCvyjLaPNjKw52Hwi0NnmKvq',
  port: '5432',
});

app.post('/dialogflow', async (req, res) => {

  console.log('Entrou')



  pool.query(`SELECT * FROM NF WHERE documento = '${req.body.queryResult.queryText}'`, (err, value) => {
    if (err || value.rows[0] == null) {
      res.send({
        fulfillmentMessages: [
          {
            text: {
              text: [
                `Não foi possível encontrar a NF ${req.body.queryResult.queryText} informada`
              ]
            }
          }
        ]
      })
    }

    const data = value.rows[0].data_estimada;

    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // +1 porque os meses são indexados de 0 a 11
    const ano = data.getFullYear();
    
    const dataFormatada = `${dia}/${mes}/${ano}`
    console.log(value.rows)
    res.send({
      fulfillmentMessages: [
        {
          text: {
            text: [
              `A data estimada de recebimento da NF: ${value.rows[0].documento} é: ${dataFormatada} com o valor de: R$ ${value.rows[0].valor}`
            ]
          }
        }
      ]
    })
  })
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})