// ./src/helpers/cleanAndBeautify.mjs

import beautify from 'beautify'

export default function (fileContents) {

    const cleaned = fileContents.replace(/!--!/g, '!--')// .replace(/></g, '>\n<')

    const beautified = beautify(cleaned, {format: 'html'})

    return beautified.replace(/><\/path>/g, '/>')

}
