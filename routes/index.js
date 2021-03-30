let { Router } = require('express')
let router = Router()

let AuthenticationRoutes = require('./authentication.routes')
let DatabaseRoutes = require('./database.routes')

router.use('/databases', DatabaseRoutes)
router.use('/authentication', AuthenticationRoutes)

module.exports = router
