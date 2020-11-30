const express = require('express')
const router = express.Router()

const Person = require('../models/Person')

router.get('/people', function (req, res) {
  Person.find({}, function (err, people) {
    res.send(people)
  })
})

//exerc1
router.post('/person', function (req, res) {
  let person = req.body
  let p1 = new Person({
    firstName: person.firstName,
    lastName: person.lastName,
    age: person.age
  })
  p1.save()
  res.send()
})

//exrec2
router.put('/person/:id', function (req, res) {
  let id = req.params.id
  Person.findByIdAndUpdate(id, { age: 80 }, function (err, person) {
    res.end()
  })
})

//exrec3
router.delete('/', function (req, res) {
  Person.find({}, function (err, people) {
    people.forEach(p => p.remove())
  })
  res.end()
})

module.exports = router