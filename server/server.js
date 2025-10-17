import express from 'express'
import cors from 'cors'
import { dogFacts } from '../src/dogFacts.js'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/dog-fact', (req, res) => {
  try {
    const randomFact = dogFacts[Math.floor(Math.random() * dogFacts.length)]
    res.json({ fact: randomFact })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to get dog fact' })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () =>
  console.log(`Dog Facts API running on http://localhost:${PORT}`)
)
