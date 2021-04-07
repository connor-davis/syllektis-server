let mongoose = require('mongoose')
let { Schema } = mongoose

let CompanySchema = new Schema({
    // Company Data
    companyId: String,
    companyName: String,
    companyUsername: String,
    companyEmail: String,
    companyPassword: String,
    // Company Payments Data
    // Where [String] contains Id's
    companyPayments: {
        type: [String],
        default: [],
    },
    // Company Collections Data
    // Where [String] contains Id's
    companyCollections: {
        type: [String],
        default: [],
    },
    // Company Collectors Data
    // Where [String] contains Id's
    companyCollectors: {
        type: [String],
        default: [],
    },
    // Company Products Data
    // Where [String] contains Id's
    companyProducts: {
        type: [String],
        default: [],
    },
})

module.exports = CompanySchema
