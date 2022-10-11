#!/usr/bin/env node
// ./src/icon-svg-to-vue.mjs

import iconSvgToVueFile from './helpers/iconSvgToVueFile.mjs'
import showProcessInfoConsoleLogs from './helpers/showProcessInfoConsoleLogs.mjs'
import showWrongArgsConsoleError from './helpers/showWrongArgsConsoleError.mjs'


const cwd = process.env.INIT_CWD
const args = process.argv


if (args.length !== 4) {
    showWrongArgsConsoleError()
    process.exit()
}


showProcessInfoConsoleLogs(cwd, args[2], args[3])


await iconSvgToVueFile(cwd, args[2], args[3])
