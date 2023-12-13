import { defineConfig } from 'histoire'
import { HstSvelte } from '@histoire/plugin-svelte'

export default defineConfig({
    plugins: [HstSvelte()],
    outDir: 'docs',
    routerMode: 'hash',
    theme: {
        storeColorScheme: false,
        defaultColorScheme: 'dark',
        hideColorSchemeSwitch: true,
    },
    tree: {
        groups: [
            {
                id: 'top',
                title: '',
            },
        ],
    },
})
