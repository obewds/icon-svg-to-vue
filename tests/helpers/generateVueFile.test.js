// ./tests/helpers/generateVueFile.test.js

import generateVueFile from '../../src/helpers/generateVueFile.mjs'


test('Text that importing generateVueFile returns a truthy value', async () => {

    expect(generateVueFile).toBeTruthy()

})


test('Text that generateVueFile returns an expected value', async () => {

    const svg = `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M20,230 Q40,205 50,230 T90,230"></path></svg>`

    const vueFile = generateVueFile(svg, 'some/test/SvgVueName.vue')
    
    expect(vueFile).toBeTruthy()
    expect(vueFile).toContain('<path :class')
    expect(vueFile).toContain('vue')

})
