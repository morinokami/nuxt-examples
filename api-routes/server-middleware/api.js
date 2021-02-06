const app = require('express')()
const { people } = require('../data')

app.get('/people', (req, res) => {
  res.status(200).json(people)
})

app.get('/people/:id', ({ params: { id }}, res) => {
  const filtered = people.filter((p) => p.id === id)

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `User with id: ${id} not found.` })
  }
})

module.exports = app
