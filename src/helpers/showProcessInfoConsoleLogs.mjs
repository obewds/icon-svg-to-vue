// ./src/helpers/showProcessInfoConsoleLogs.mjs

import chalk from 'chalk'

export default function (cwd, processArgTwo, processArgThree) {

    console.error(chalk.yellowBright('CONVERTING SVG: ') + chalk.yellow(cwd + processArgTwo))
    console.error(chalk.yellowBright('TO VUE FILE:    ') + chalk.yellow(cwd + processArgThree))
    console.log(' ')

}
