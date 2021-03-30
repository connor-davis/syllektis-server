let mongoose = require('mongoose')
let CompanySchema = require('../schemas/company')

let Company = mongoose.model('Company', CompanySchema)

module.exports = Company
