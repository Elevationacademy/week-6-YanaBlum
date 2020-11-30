// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/peopleDB', { useNewUrlParser: true })

// const Schema = mongoose.Schema

// const addressSchema = new Schema({
//   city: String,
//   street: String,
//   apartment: Number
// })

// const personSchema = new Schema({
//   firstName: String,
//   lastName: String,
//   age: Number,
//   address: addressSchema
// })

// const Person = mongoose.model('person', personSchema)
// let p1 = new Person({ firstName: "David", lastName: "Smith", age: 25 }) //purposefully ignoring the `address` field
// // console.log(p1)
// // p1.save()

// let peoplePromise = Person.find({})

// peoplePromise.then(function (people) {
//     console.log(people)
// })

// let p2 = new Person({ firstName: "Shoo", lastName: "Bert", age: 50 })
// let p3 = new Person({ firstName: "Shoob", lastName: "Ert", age: 34 })
// let p4 = new Person({ firstName: "Sh", lastName: "Oobert", age: 10 })
// let p5 = new Person({ firstName: "Shoober", lastName: "T", age: 44 })

// let allTheShooberts = [p2, p3, p4, p5]
// allTheShooberts.forEach(s => s.save())


// Person.findByIdAndUpdate("5fc3694c5152b333c7a7438c", { age: 70 }, { new: true }, function (err, person) {
//   console.log(person)
// })

// Person.findById("5fc3694c5152b333c7a7438c", function (err, person) {
//   person.remove(function (err) {
//       console.log(err) //usually this will be `null`, unless something went wrong
//   })
// })


//spotcheck1 

// mongoose.connect('mongodb://localhost/computerDB', { useNewUrlParser: true })

// const Schema = mongoose.Schema

// const computerSchema = new Schema({
//   maker: String,
//   price: Number
// })

// const Computer = mongoose.model('computer', computerSchema)
// let c1 = new Computer({maker: "Apple", price: 15000})
// let c2 = new Computer({maker: "Dell", price: 8000})

// const allComputers = [c1 , c2]

// allComputers.forEach(c => c.save())




