// ./src/helpers/iconSvgToVueFile.mjs

import fs from 'fs-extra'

import cleanAndBeautify from './cleanAndBeautify.mjs'
import generateVueFile from './generateVueFile.mjs'
import scriptSuccessConsoleLogs from './scriptSuccessConsoleLogs.mjs'


export default async function (cwd, userSvgFilePath, userOutputFilePath) {

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
