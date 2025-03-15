const express = require('express')

const app = express()
const PORT = 3000

app.use(express.static('./static'))

app.get('/hello', (req, res) => {
  res.status(200).send('Hello World!!!')
})

app.listen(PORT, () => console.log('Server running on port', PORT))
