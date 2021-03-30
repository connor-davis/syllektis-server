let { Router } = require('express')
const passport = require('passport')
const { getAllDatabases } = require('../utils/database')
let router = Router()

router.get('/', async (request, response) => {
    getAllDatabases((databases) => {
        if (databases.length > 0)
            response.json(
                databases.map((database) => {
                    name: database.name
                })
            )
        else
            response.json({
                error: 'no-databases',
            })
    })
})

router.get(
    '/:name',
    passport.authenticate('jwt', { session: false }),
    async (request, response) => {
        console.log(request.params.name)
    }
)

module.exports = router
