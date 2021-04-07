let mongoose = require('mongoose')
let { Schema } = mongoose

let CompanyProductSchema = new Schema({
    // Company Product Data
    productId: String,
    productDescription: String,
    productMaterial: String,
    productValue: Number,
    // Company Data
    companyId: String,
})

module.exports = CompanyProductSchema
