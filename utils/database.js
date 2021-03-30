let mongoose = require('mongoose')
let { info } = require('./console')

let connect = () =>
    mongoose.connect(
        'mongodb://localhost/my_database',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        },
        (error) => {
            if (error) console.log(error)
            info('MongoDB Connected.')
        }
    )

module.exports = { connect }
