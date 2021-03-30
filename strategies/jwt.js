let JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt
let fs = require('fs')

let opts = {}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = fs.readFileSync('certs/privateKey.pem')

let { getDatabase } = require('../utils/database')

let _JwtStrategy = new JwtStrategy(opts, function (payload, done) {
    getDatabase(payload.database, (database) => {
        database
            .get(payload.id)
            .then((user) => {
                if (user) {
                    return done(null, user)
                } else {
                    return done(null, false)
                }
            })
            .catch((error) => {
                if (error) {
                    return done(error, false)
                }
            })
    })
})

module.exports = { _JwtStrategy }
