// ./src/helpers/showWrongArgsConsoleError.mjs

import chalk from 'chalk'

export default function () {

    console.error(chalk.redBright('You need to pass two arguments where:'))
    console.error(chalk.red('  - 1st arg = path and filename to an (input) svg from your project root directory'))
    console.error(chalk.red('  - 2nd arg = path and filename to the (output) vue component destination'))
    console.log(' ')

}
