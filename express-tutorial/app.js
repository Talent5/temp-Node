const express = require('express')
const app = express()
let { people } = require('./data')

// static assets
app.use(express.static('./methods-public'))

// parse form data
app.use(express.urlencoded({ extended: false }))

// parse JSON
app.use(express.json())

// Get all people
app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

// Post new person (name, age, occupation)
app.post('/api/people', (req, res) => {
    const { name, age, occupation } = req.body
    if (!name || !age || !occupation) {
        return res.status(400).json({ success: false, msg: 'Please provide all values: name, age, and occupation' })
    }
    const newPerson = { name, age, occupation }
    people.push(newPerson)
    res.status(201).json({ success: true, person: newPerson })
})

// Login route
app.post('/login', (req, res) => {
    const { name } = req.body
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please Provide Credentials')
})

// Start server
app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})
