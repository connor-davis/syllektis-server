let mongoose = require('mongoose')
let { Schema } = mongoose

let CompanyPaymentSchema = new Schema({
    // Company Payment Data
    paymentId: String,
    paymentDate: Date,
    paymentAmount: Number,
    // Company Collector Data
    collectorId: String,
    // Company Data
    companyId: String,
})

let CollectorPaymentSchema = new Schema({
    // Company Payment Data
    paymentId: String,
    paymentDate: Date,
    paymentAmount: Number,
    // Company Collector Data
    collectorId: String,
})

module.exports = { CompanyPaymentSchema, CollectorPaymentSchema }
