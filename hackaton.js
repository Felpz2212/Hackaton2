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


  pool.query('SELECT * from NF', (err, value) => {
    if (err) {
      console.error('Error executing query', err);
      return;
    }
    console.log('Current date from PostgreSQL:', value.rows);
  });


  pool.end()


  res.send(NF)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})