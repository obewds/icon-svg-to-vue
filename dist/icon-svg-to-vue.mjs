#!/usr/bin/env node
// ./dist/icon-svg-to-vue.mjs

import beautify from 'beautify'
import chalk from 'chalk'
import fs from 'fs-extra'

import generateVueFile from './helpers/generateVueFile.mjs'

const cwd = process.env.INIT_CWD
const args = process.argv


if (args.length !== 4) {
    console.error(chalk.redBright('You need to pass two arguments where:'))
    console.error(chalk.red('  - 1st arg = path and filename to an (input) svg from your project root directory'))
    console.error(chalk.red('  - 2nd arg = path and filename to the (output) vue component destination'))
    console.log(' ')
    process.exit()
}


console.error(chalk.yellowBright('CONVERTING SVG: ') + chalk.yellow(cwd + args[2]))
console.error(chalk.yellowBright('TO VUE FILE:    ') + chalk.yellow(cwd + args[3]))
console.log(' ')


async function loadFileAsync (userSvgFilePath, userOutputFilePath) {

    const originFile = cwd + '/' + userSvgFilePath
    const outputFile = cwd + '/' + userOutputFilePath

    await fs.pathExists(originFile).then( async (exists) => {

        // file exists!

        // read the file data asynchronously
        fs.readFile(originFile, 'utf8', function(err, data) {

            if (err) { throw err }

            const cleanedData = data.replace(/!--!/g, '!--').replace(/></g, '>\n<')
            
            fs.outputFileSync(
                outputFile,
                generateVueFile( beautify(cleanedData, {format: 'html'} ),
                userOutputFilePath
            ), { flag: 'w+' })

            console.log(chalk.greenBright('*****************************'))
            console.log(chalk.greenBright('* SVG CONVERSION COMPLETED! *'))
            console.log(chalk.greenBright('*****************************'))
            console.log(' ')

        })

    }).catch( (error) => { throw error } )

}


await loadFileAsync(args[2], args[3])

