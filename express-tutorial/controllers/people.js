let { people } = require('../data')


const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people })
}




const createPerson = (req, res) => {
    const { name, age, occupation } = req.body
    if (!name || !age || !occupation) {
        return res.status(400).json({ success: false, msg: 'Please provide all values: name, age, and occupation' })
    }
    const newPerson = { id: people.length + 1, name, age, occupation }
    people.push(newPerson)
    res.status(201).json({ success: true, person: newPerson })
}

const postman = (req, res) => {
    const { name } = req.body
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please Provide Credentials')
}

const updatePerson = (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const person = people.find((person) => person.id === Number(id))
    if (!person) {
        return res.status(404).json({ success: false, msg: `No person with id ${id}` })
    }
    const updatedPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name || person.name  // Update name if provided
        }
        return person
    })
    res.status(200).json({ success: true, data: updatedPeople })
}

const deletePerson = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
        return res.status(404).json({ success: false, msg: `No person with id ${req.params.id}` })
    }
    people = people.filter((person) => person.id !== Number(req.params.id))
    res.status(200).json({ success: true, data: people })
}


module.exports = {
    getPeople,
    createPerson,
    postman,
    updatePerson,
    deletePerson
}
