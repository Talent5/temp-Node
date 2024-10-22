const express = require('express')
const router = express.Router()


const {
        getPeople,
    createPerson,
    postman,
    updatePerson,
    deletePerson
} = require('../controllers/people')
// Get all people
router.get('/', getPeople)


// Post new person (name, age, occupation)
router.post('/',createPerson)

// Login route
router.post('/postman', postman)

// Update person's name by ID
router.put('/:id', updatePerson)

// Delete person by ID
router.delete('/:id', deletePerson)


module.exports = router