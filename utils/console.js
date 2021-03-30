let chalk = require('chalk')
let moment = require('moment')

let info = (text) => {
    console.log(
        chalk.gray(
            `${chalk.blueBright('i')} :: ${chalk.blueBright(
                text
            )} :: ${chalk.blueBright(moment().format('HH:MM:SS'))}`
        )
    )
}

module.exports = { info }
