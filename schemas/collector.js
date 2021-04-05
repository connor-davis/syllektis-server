let mongoose = require('mongoose')
let { Schema } = mongoose

let { CollectorCollectionsSchema } = require('./collection')
let { CollectorPaymentsSchema } = require('./payment')

let CompanyCollectorsSchema = new Schema({
    // Company Collector Data
    collectorId: String,
    collectorFullName: String,
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
    collectorPayments: {
        type: [CollectorPaymentsSchema],
        default: [],
    },
    // Collector Payments Data
    collectorCollections: {
        type: [CollectorCollectionsSchema],
        default: [],
    },
    // Company Data
    companyId: String,
})

module.exports = CompanyCollectorsSchema
