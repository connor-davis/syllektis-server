'use strict'
let dotenv = require('dotenv')
dotenv.config()

let express = require('express')

let app = express()
let http = require('http').createServer(app)
let { json, urlencoded } = require('body-parser')
let passport = require('passport')
let { info } = require('./utils/console')
let { JwtStrategy } = require('./strategies/jwt')
let { connect } = require('./utils/database')
let compression = require('compression')
let path = require('path')

let port = 8080 || process.env.PORT

let Routes = require('./routes')

;(() => {
    app.set('views', path.join(__dirname, 'views'))
    app.set('view engine', 'ejs')

    app.use(express.static(__dirname + 'public'))
    app.use(json())
    app.use(urlencoded({ extended: true }))
    app.use(passport.initialize())
    app.use(passport.session())
    app.use(compression())

    passport.use(JwtStrategy)

    app.use('/api', Routes)

    http.listen(port, () => {
        info('Listening on port ' + port)

        connect()
    })
})()
