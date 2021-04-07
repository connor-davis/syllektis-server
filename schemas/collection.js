let mongoose = require('mongoose')
let { Schema } = mongoose

let CompanyCollectionSchema = new Schema({
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

let CollectorCollectionSchema = new Schema({
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

module.exports = { CompanyCollectionSchema, CollectorCollectionSchema }
