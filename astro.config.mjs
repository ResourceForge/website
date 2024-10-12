import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://resourceforge.net',
	integrations: [
		starlight({
			title: 'ResourceForge',
			favicon: './favicon.ico',
			logo: {
				light: './src/assets/resourceforge_logo_light.png',
				dark: './src/assets/resourceforge_logo_dark.png',
				alt: 'Site logo',
				replacesTitle: false
			},
			social: {
				github: 'https://github.com/resourceforge',
			},
			sidebar: [
				{
					label: 'General',
					items: [
                        {
                            label: 'Getting started',
                            link: '/getting-started'
                        },
					]
				},
                {
                    label: 'Character selector',
                    autogenerate: { directory: 'character-selector',  }
                }
			],
			customCss: [
				'./src/styles/sidebar.css'
			],
            expressiveCode: {
                themes: [ 'dark-plus', 'light-plus' ]
            }
		}),
	],
});
