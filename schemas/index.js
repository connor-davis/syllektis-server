let CompanySchema = require('./company')
let CollectorSchema = require('./collector')
let {
    CompanyCollectionSchema,
    CollectorCollectionSchema,
} = require('./collection')
let { CompanyPaymentSchema, CollectorPaymentSchema } = require('./payment')
let ProductSchema = require('./product')

module.exports = {
    CompanySchema,
    CollectorSchema,
    CompanyCollectionSchema,
    CollectorCollectionSchema,
    CompanyPaymentSchema,
    CollectorPaymentSchema,
    ProductSchema,
}
