let mongoose = require('mongoose')
const { CompanySchema } = require('.')
let { Schema } = mongoose

let CompanyCollectorSchema = new Schema({
    // Company Collector Data
    collectorId: String,
    collectorFirstName: String,
    collectorLastName: String,
    collectorPhoneNumber: Number,
    collectorIdNumber: Number,
    collectorEmail: String,
    collectorPassword: String,
    collectorAccountNumber: Number,
    collectorBranchCode: Number,
    collectorBankName: String,
    collectorStreetAddress: String,
    collectorCity: String,
    collectorAreaCode: Number,
    collectorProvince: String,
    collectorCountry: String,
    // Collector Payments Data
    // Where [String] contains Id's
    collectorPayments: {
        type: [String],
        default: [],
    },
    // Collector Payments Data
    // Where [String] contains Id's
    collectorCollections: {
        type: [String],
        default: [],
    },
    // Company Data
    // Where [String] contains Id's
    collectorCompanies: {
        type: [String],
        default: [],
    },
})

module.exports = CompanyCollectorSchema
