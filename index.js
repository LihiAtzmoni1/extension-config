const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send({
    proxy:"", token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJicm93c2VyZG9tZSIsInRlbmFudElkIjozOSwiZSI6ImJHbG9hV0ZBYzJWeVlYQm9hV056WldOMWNtbDBlUzVqYjIwPSIsImlhdCI6MTY2MDgxNzI0NX0.ut4E1Z9GtpII8m1H4AhLrs4E1HdLtTwAlVWa81T3nuY"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})