let mongoose = require('mongoose')
let { Schema } = mongoose

let CompanyPaymentsSchema = new Schema({
    // Company Payment Data
    paymentId: String,
    paymentDate: Date,
    paymentAmount: Number,
    // Company Collector Data
    collectorId: String,
    // Company Data
    companyId: String,
})

let CompanyCollectionsSchema = new Schema({
    // Company Collection Data
    collectionId: String,
    collectionDescription: String,
    collectionDate: Date,
    collectionMass: Number,
    // Company Collector Data
    collectorId: String,
    collectorEarnings: Number,
    // Company Data
    companyId: String,
})

let CompanyCollectorsSchema = new Schema({
    // TODO: Company Collector Data
    // TODO: Company Data
})

let CompanyProductsSchema = new Schema({
    // TODO: Company Product Data
    // TODO: Company Data
})

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
