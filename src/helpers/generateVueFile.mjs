// ./src/helpers/generateVueFile.mjs

import beautify from 'beautify'

export default function (svgMarkup, destinationFilePath) {

const svg = svgMarkup.replace(/<path /g, '<path :class="fillClasses" ')

const output = `<!-- ./${destinationFilePath} -->

<script lang="ts">
    import { defineComponent } from 'vue'
    export default defineComponent({
        props: {
            fillClasses: {
                type: String,
                default: 'fill-black',
            },
        },
    })
</script>

<template>
    ${svg}
</template>

`

return beautify(output, {format: 'html'})
    
}
