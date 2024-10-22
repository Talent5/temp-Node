const express = require('express')
const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth')


// static assets
app.use(express.static('./methods-public'))

// parse form data
app.use(express.urlencoded({ extended: false }))

// parse JSON
app.use(express.json())

// Use routes with correct paths
app.use('/api/people', people)  // Added leading slash
app.use('/login', auth)

// Start server
app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})

