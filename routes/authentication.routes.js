let { Router } = require('express')
let router = Router()

let LoginRoutes = require('./login.routes')
let RegisterRoutes = require('./register.routes')

router.use('/login', LoginRoutes)
router.use('/register', RegisterRoutes)

module.exports = router
