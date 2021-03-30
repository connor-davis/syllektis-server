'use strict'
let dotenv = require('dotenv')
dotenv.config()

let express = require('express')

let app = express()
let http = require('http').createServer(app)
let { json, urlencoded } = require('body-parser')
let passport = require('passport')
let { info } = require('./utils/console')
let { _JwtStrategy } = require('./strategies/jwt')
let { connect } = require('./utils/database')

let port = 8080 || process.env.PORT

let Routes = require('./routes')

;(() => {
    app.use(express.static('public'))
    app.use(json())
    app.use(urlencoded({ extended: true }))
    app.use(passport.initialize())
    app.use(passport.session())

    passport.use(_JwtStrategy)

    app.use('/api', Routes)

    http.listen(port, () => {
        info('Listening on port ' + port)

        connect()
    })
})()
