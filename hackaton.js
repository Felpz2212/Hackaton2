const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const { Pool } = require('pg');

  const pool = new Pool({
    user: 'deploy',
    host: 'dpg-cnqpunen7f5s7388smlg-a.oregon-postgres.render.com',
    database: 'dbhackaton_vs6u',
    password: 'E8AasENMyCvyjLaPNjKw52Hwi0NnmKvq',
    port: '5432',
  });

  pool.end();

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