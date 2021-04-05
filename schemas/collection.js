let mongoose = require('mongoose')
let { Schema } = mongoose

let CompanyCollectionsSchema = new Schema({
    // Company Collection Data
    collectionId: String,
    collectionDescription: String,
    collectionDate: Date,
    collectionMass: Number,
    // Company Collector Data
    collectorId: String,
    collectorEarnings: Number,
    // Company Product Data
    productId: String,
    productValue: Number,
    // Company Data
    companyId: String,
})

let CollectorCollectionsSchema = new Schema({
    // Company Collection Data
    collectionId: String,
    collectionDescription: String,
    collectionDate: Date,
    collectionMass: Number,
    // Company Collector Data
    collectorId: String,
    collectorEarnings: Number,
    // Company Product Data
    productId: String,
    productValue: Number,
})

module.exports = { CompanyCollectionsSchema, CollectorCollectionsSchema }
