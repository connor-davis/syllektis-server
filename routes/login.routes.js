let { Router } = require('express')
let router = Router()

router.get('/', async (request, response) => {
    response.status(200).render('pages/login')
})

router.post('/', async (request, response) => {
    let { body } = request
})

module.exports = router
