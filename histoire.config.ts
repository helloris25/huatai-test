import { defineConfig } from 'histoire'
import { HstSvelte } from '@histoire/plugin-svelte'

export default defineConfig({
    plugins: [HstSvelte()],
    outDir: 'docs',
    routerMode: 'hash',
    tree: {
        groups: [
            {
                id: 'top',
                title: '',
            },
        ],
    },
})
