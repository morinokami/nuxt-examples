const app = require('express')()
const { sampleUserData } = require('../utils/sample-data')

app.get('/users', (req, res) => {
  try {
    if (!Array.isArray(sampleUserData)) {
      throw new Error('Cannot find user data')
    }

    res.status(200).json(sampleUserData)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
})

module.exports = app
