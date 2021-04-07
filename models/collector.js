let mongoose = require('mongoose')
const { CollectorSchema } = require('../schemas')

let Collector = mongoose.model('Collector', CollectorSchema)

module.exports = Collector
