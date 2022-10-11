// ./src/helpers/cleanAndBeautify.mjs

import beautify from 'beautify'

export default function (fileContents) {

    const cleaned = fileContents.replace(/!--!/g, '!--') // remove FontAwesome's comment keeping exclamation point which causes weird typescript issues
                                .replace(' class="w-6 h-6"', '') // remove heroicons default svg class attr and value
                                .replace(' class="w-5 h-5"', '') // remove heroicons default mini svg class attr and value
                                //.replace(/></g, '>\n<')

    const beautified = beautify(cleaned, {format: 'html'})

    return beautified.replace(/><\/path>/g, '/>')

}
