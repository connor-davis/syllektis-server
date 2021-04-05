let { Router } = require('express')
const passport = require('passport')
let router = Router()

router.get('/', async (request, response) => {})

router.get(
    '/:company',
    passport.authenticate('jwt', { session: false }),
    async (request, response) => {}
)

module.exports = router
