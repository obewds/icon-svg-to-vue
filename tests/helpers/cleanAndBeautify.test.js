// ./tests/helpers/cleanAndBeautify.test.js

import cleanAndBeautify from '../../src/helpers/cleanAndBeautify.mjs'


test('Text that importing cleanAndBeautify returns a truthy value', async () => {

    expect(cleanAndBeautify).toBeTruthy()

})


test('Text that cleanAndBeautify returns an expected value', async () => {

    const svg = `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"><!--! Legal disclaimer comment example --><path d="M20,230 Q40,205 50,230 T90,230"></path></svg>`

    const vueFile = cleanAndBeautify(svg, 'some/test/SvgVueName.vue')

    console.log(vueFile)
    
    expect(vueFile).toBeTruthy()
    expect(vueFile).toContain('<!-- Legal')

})
