let { Router } = require('express')
const { Collector, Company } = require('../models')
let router = Router()
let uuid = require('uuid')
let bcrypt = require('bcrypt')

router.get('/:type', async (request, response) => {
    response.status(200).render('pages/register', {
        pageName: 'Create An Account',
        type: request.params.type,
    })
})

router.post('/', async (request, response) => {
    let { body } = request

    switch (body.type) {
        case 'company':
            let company = new Company({
                // Personal Details
                companyId: uuid.v4(),
                companyName: body.name,
                companyUsername: body.name.toLowerCase().split(' ').join('-'),
                companyEmail: body.email,
                companyPassword: await bcrypt.hashSync(body.password, 1024),
            })

            try {
                company.save()

                return response.status(200).json({
                    success: 'company-created',
                    data: company.toJSON(),
                })
            } catch (error) {
                return response.status(500).json({
                    error,
                })
            }
        case 'collector':
            let collector = new Collector({
                // Personal Details
                collectorId: uuid.v4(),
                collectorFirstName: body.firstName,
                collectorLastName: body.lastName,
                collectorEmail: body.email,
                collectorPassword: await bcrypt.hashSync(body.password, 1024),
                collectorPhoneNumber: body.phoneNumber,
                // Bank Details
                collectorAccountNumber: body.accountNumber,
                collectorBranchCode: body.branchCode,
                collectorBankName: body.bankName,
                // Location Details
                collectorStreetAddress: body.streetAddress,
                collectorCity: body.city,
                collectorAreaCode: body.areaCode,
                collectorProvince: body.province,
                collectorCountry: body.country,
            })

            try {
                collector.save()

                return response.status(200).json({
                    success: 'collector-created',
                    data: collector.toJSON(),
                })
            } catch (error) {
                return response.status(500).json({
                    error,
                })
            }
        default:
            return response.status(500).json({
                error: 'type-not-specified',
            })
    }
})

module.exports = router
