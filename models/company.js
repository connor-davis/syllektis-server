let mongoose = require('mongoose')
const { CompanySchema } = require('../schemas')

let Company = mongoose.model('Company', CompanySchema)

module.exports = Company
