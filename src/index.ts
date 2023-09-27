import express from 'express'
import './db/database'
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('¡Hola, Express en TypeScript!')
  console.log('Hola, Express en TypeScript')
})

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`)
})
