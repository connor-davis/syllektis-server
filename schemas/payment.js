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

let CollectorPaymentsSchema = new Schema({
    // Company Payment Data
    paymentId: String,
    paymentDate: Date,
    paymentAmount: Number,
    // Company Collector Data
    collectorId: String,
})

module.exports = { CompanyPaymentsSchema, CollectorPaymentsSchema }
