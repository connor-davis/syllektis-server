'use strict'
let dotenv = require('dotenv')
dotenv.config()

let express = require('express')
let expressLayouts = require('express-ejs-layouts')

let app = express()
let http = require('http').createServer(app)
let { json, urlencoded } = require('body-parser')
let passport = require('passport')
let { info } = require('./utils/console')
let { JwtStrategy } = require('./strategies/jwt')
let { connect } = require('./utils/database')
let compression = require('compression')
let path = require('path')

let port = process.env.PORT || 8080

let Routes = require('./routes')

app.use(express.static('public'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(expressLayouts)
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(passport.initialize())
app.use(passport.session())
app.use(compression())

passport.use(JwtStrategy)

app.use('/', Routes)

http.listen(port, () => {
    info('Listening on port ' + port)

    connect()
})
