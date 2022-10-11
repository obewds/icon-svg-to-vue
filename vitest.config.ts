// ./vitest.config.ts

import { configDefaults } from 'vitest/config'

export default {
    test: {
        globals: true,
        environment: 'happy-dom',
        exclude: [...configDefaults.exclude],
    },
}
