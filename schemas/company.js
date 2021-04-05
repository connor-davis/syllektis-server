let mongoose = require('mongoose')
let { CompanyCollectionsSchema } = require('./collection')
let CompanyCollectorsSchema = require('./collector')
let { CompanyPaymentsSchema } = require('./payment')
let CompanyProductsSchema = require('./product')
let { Schema } = mongoose

let CompanySchema = new Schema({
    // Company Data
    companyId: String,
    companyName: String,
    companyUsername: String,
    companyEmail: String,
    companyPassword: String,
    // Company Payments Data
    companyPayments: {
        type: [CompanyPaymentsSchema],
        default: [],
    },
    // Company Collections Data
    companyCollections: {
        type: [CompanyCollectionsSchema],
        default: [],
    },
    // Company Collectors Data
    companyCollectors: {
        type: [CompanyCollectorsSchema],
        default: [],
    },
    // Company Products Data
    companyProducts: {
        type: [CompanyProductsSchema],
        default: [],
    },
})

module.exports = CompanySchema
