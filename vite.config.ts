/// <reference types="histoire" />

import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
        environment: "jsdom",
	},
    base: '/huatai-test/',
    histoire: {
        // Histoire config can also go here
    },
});
