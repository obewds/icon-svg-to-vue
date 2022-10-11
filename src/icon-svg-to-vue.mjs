#!/usr/bin/env node
// ./src/icon-svg-to-vue.mjs

import beautify from 'beautify'
import chalk from 'chalk'
import fs from 'fs-extra'

import cleanAndBeautify from './helpers/cleanAndBeautify.mjs'
import generateVueFile from './helpers/generateVueFile.mjs'
import iconSvgToVueFile from './helpers/iconSvgToVueFile.mjs'
import processConsoleLogs from './helpers/processConsoleLogs.mjs'
import scriptSuccessConsoleLogs from './helpers/scriptSuccessConsoleLogs.mjs'
import wrongArgsConsoleErrors from './helpers/wrongArgsConsoleErrors.mjs'


const cwd = process.env.INIT_CWD
const args = process.argv


if (args.length !== 4) {

    wrongArgsConsoleErrors()
    process.exit()

}


processConsoleLogs(cwd, args[2], args[3])

/*
async function loadFileAsync (userSvgFilePath, userOutputFilePath) {

    const originFile = cwd + '/' + userSvgFilePath
    const outputFile = cwd + '/' + userOutputFilePath

    await fs.pathExists(originFile).then( async (exists) => {

        // file exists!

        // read the file data asynchronously
        fs.readFile(originFile, 'utf8', function(err, data) {

            if (err) { throw err }
            
            fs.outputFileSync(
                outputFile,
                generateVueFile( cleanAndBeautify(data), userOutputFilePath),
                { flag: 'w+' }
            )

            scriptSuccessConsoleLogs()

        })

    }).catch( (error) => { throw error } )

}
*/

//await loadFileAsync(args[2], args[3])

await iconSvgToVueFile(cwd, args[2], args[3])
