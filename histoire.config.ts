import { HstSvelte } from '@histoire/plugin-svelte'
import { defaultColors, defineConfig } from 'histoire'

export default defineConfig({
    plugins: [HstSvelte()],
    outDir: 'histoire-dist',
    routerMode: 'hash',
		storyMatch: [
			'src/**/*.story.svelte',
		],
    theme: {
        storeColorScheme: true,
        defaultColorScheme: 'dark',
        hideColorSchemeSwitch: false,
        colors: {
            gray: defaultColors.gray,
            primary: defaultColors.gray,
        }
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
