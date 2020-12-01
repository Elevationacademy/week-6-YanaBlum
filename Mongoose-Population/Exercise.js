const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/Mongoose-Population', { useNewUrlParser: true })

const SolarSystemSchema = new Schema({
  planets: [{ type: Schema.Types.ObjectId, ref: 'Planet' }],
  starName: String
})

const PlanetSchema = new Schema({
  name: String,
  system: { type: Schema.Types.ObjectId, ref: 'SolarSystem' },
  visitors: [{ type: Schema.Types.ObjectId, ref: 'Visitor' }]
})

const VisitorSchema = new Schema({
  name: String,
  homePlanet: { type: Schema.Types.ObjectId, ref: 'Planet' },
  visitedPlanets: [{ type: Schema.Types.ObjectId, ref: 'Planet' }]
})

const SolarSystem = mongoose.model("SolarSystem", SolarSystemSchema)
const Planet = mongoose.model("Planet", PlanetSchema)
const Visitor = mongoose.model("Visitor", VisitorSchema)

module.exports = SolarSystem
module.exports = Planet
module.exports = Visitor

let s1 = new SolarSystem({
  planets: [],
  starName: "Sun"
})

let p1 = new Planet({
  name: "Venus",
  system: s1,
  visitors: []
})

let p2 = new Planet({
  name: "Earth",
  system: s1,
  visitors: []
})

let v1 = new Visitor({
  name: "yana",
  homePlanet: p1,
  visitedPlanets: []
})

// s1.planets.push(p1)
// s1.planets.push(p2)
// v1.visitedPlanets.push(p1)
// p1.visitors.push(v1)

// s1.save()
// p1.save()
// p2.save()
// v1.save()


// Visitor.findOne({}).populate("visitedPlanets").exec(function (err, visitor) {
//   visitor.visitedPlanets.forEach(vp => console.log(vp.name))
// })


// Planet.findOne({}).populate("visitors").exec(function (err, planet) {
//   planet.visitors.forEach(v => console.log(v.name))
// })


// SolarSystem.findOne({}).populate({
//   path: "planets",
//   populate: {
//     path: "visitors"
//   }
// }).exec(function (err, solarSystem) {

//   for (planet of solarSystem.planets) {
//     planet.visitors.forEach(v => console.log(v.name))
//   }
// })




