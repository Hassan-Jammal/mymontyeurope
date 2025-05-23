// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';

export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	// ssr: true,
	css: ["~/assets/sass/app.sass"],
	pages: true,
	modules: ['@nuxtjs/tailwindcss', 'nuxt-gtag', '@nuxtjs/sitemap', 'nuxt-aos', "@vueuse/nuxt", "@nuxtjs/i18n", "@nuxt/scripts", '@nuxtjs/google-fonts', "@nuxt/image"],
	// googleFonts: {
	// 	families: {
	// 	  'Exo 2': '400..900'
	// 	} 
	// },
	// site: {
	// 	url: 'https://mymonty.com',
	// },
	sitemap: {
		// exclude all URLs that start with /secret
		// exclude: ['/team/**']
	},
	gtag: {
		id: 'G-S79FRGY3FC'
	},
	app: {
		head: {
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			titleTemplate: "%s | MyMonty",
			htmlAttrs: {
				lang: "en",
			},
			link: [
				{
					rel: "icon",
					type: "image/png",
					href: "https://mymonty.com/images/favicon-64x64.png",
				},
				{
					rel: "icon",
					type: "image/png",
					href: "https://mymonty.com/images/favicon-32x32.png",
				},
				{
					rel: "icon",
					type: "image/png",
					href: "https://mymonty.com/images/favicon-16x16.png",
				},
				{
					rel: "apple-touch-icon",
					type: "image/png",
					href: "https://mymonty.com/images/apple-touch-icon-180x180.png",
				},
				{
					rel: "mask-icon",
					href: "https://mymonty.com/images/icons/mask-icon.svg",
					color: "#32393C",
				},
				{
					rel: "icon",
					sizes: "192x192",
					href: "https://mymonty.com/images/android-chrome-192x192.png",
				},
				{
					rel: "icon",
					sizes: "512x512",
					href: "https://mymonty.com/images/android-chrome-512x512.png",
				},
			],
			meta: [
				{ name: "theme-color", content: "#32393C" },
				{ name: "format-detection", content: "telephone=no" },
				{ name: "author", content: "MyMonty Europe" },
				{ name: "og:site_name", content: "MyMonty Europe" },
				{ name: "og:image:alt", content: "MyMonty Europe" },
				{ name: "og:image:width", content: "1200" },
				{ name: "og:image:height", content: "630" },
				{ name: "mobile-web-app-capable", content: "yes" },
				{ name: "apple-mobile-web-app-capable", content: "yes" },
				{ name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
				{ name: "robots", content: "index, follow" },
			],
			script: [
				{
					type: 'application/ld+json',
					children: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Organization",
						"name": "MyMonty",
						"url": "https://www.mymonty.com",
						"description": "With MyMonty, you get the most comprehensive global digital banking experience, anytime, anywhere.",
						"logo": "https://mymonty.com/images/logo.svg", // png
						"sameAs": [
							"https://www.facebook.com/mymonty",
							"https://x.com/mymontyapp",
							"https://www.instagram.com/mymonty",
							"https://www.linkedin.com/company/my-monty",
							"https://www.youtube.com/@mymonty4395",
							"https://apps.apple.com/lb/app/mymonty-europe/id6451243007",
							"https://play.google.com/store/apps/details?id=com.mymonty.wallet",
						]
					})
				},
				{
					id: 'usercentrics-cmp',
					src: 'https://app.usercentrics.eu/browser-ui/latest/loader.js',
					'data-settings-id': 'tW29tCoGG_Dyes',
					async: true,
				},
				{
					type: 'text/javascript',
					innerHTML: `
						var Tawk_API = Tawk_API || {},
							Tawk_LoadStart = new Date();
						(function() {
							setTimeout(function() {
								var s1 = document.createElement("script"),
									s0 = document.getElementsByTagName("script")[0];
								s1.async = true;
								s1.src = 'https://embed.tawk.to/62b30582b0d10b6f3e78c152/1g65kr25b';
								s1.charset = 'UTF-8';
								s1.setAttribute('crossorigin', '*');
								s0.parentNode.insertBefore(s1, s0);
							}, 20000);
						})();
					`,
					// This ensures that Nuxt does not escape the script's content
					body: true, // If you prefer it to be in the body, otherwise remove this line
				},
			],
			__dangerouslyDisableSanitizersByTagID: {
				'tawk-to-script': ['innerHTML'],
			},
		},
		//pageTransition: { name: 'page', mode: 'out-in' }
	},
	hooks: {
		'pages:extend'(pages) {
			const indexFile = resolve('pages/features/index.vue'); // Resolves the file path

			pages.push({
				name: 'Accounts',
				path: '/features/accounts',
				file: indexFile, // Reuse the index.vue file for Accounts
			});
			pages.push({
				name: 'Cards',
				path: '/features/cards',
				file: indexFile, // Reuse the index.vue file for Cards
			});
			pages.push({
				name: 'Transfers',
				path: '/features/transfers',
				file: indexFile, // Reuse the index.vue file for Transfers
			});
			pages.push({
				name: 'Payments',
				path: '/features/payments',
				file: indexFile, // Reuse the index.vue file for Payments
			});
		},
	},
	i18n: {
		legacy: false,
		// baseUrl: 'http://92.205.130.62:5000',
		locales: [
			{
				code: 'en-EU',
				iso: 'en-EU',
				region: 'Europe',
				language: 'English',
				icon: 'eu',
				file: 'en-EU.json',
				native: true,
				hideLanguages: false,
			},
			{
				code: 'es-EU',
				iso: 'es-EU',
				region: 'Europe',
				language: 'Spanish',
				icon: 'eu',
				file: 'es-EU.json',
				native: false,
				hideLanguages: false,
			},
			{
				code: 'it-EU',
				iso: 'it-EU',
				region: 'Europe',
				language: 'Italian',
				icon: 'eu',
				file: 'it-EU.json',
				native: false,
				hideLanguages: false,
			},
			{
				code: 'fr-EU',
				iso: 'fr-EU',
				region: 'Europe',
				language: 'French',
				icon: 'eu',
				file: 'fr-EU.json',
				native: false,
				hideLanguages: false,
			},
		],
		restructureDir: './',
		// lazy: true, // If false, this will show the translation not yet translate.
		langDir: './locales/', // Ensure this directory exists
		defaultLocale: 'en-EU',
		detectBrowserLanguage: false,
		// detectBrowserLanguage: {
		// 	useCookie: true,  // Store the detected locale in a cookie
		// 	cookieKey: 'i18n_redirected', // Name of the cookie
		// 	alwaysRedirect: true, // Always redirect to the user's browser language if not set
		// 	fallbackLocale: 'en-EU'
		// },
		compilation: {
			strictMessage: false,
			// escapeHtml: true,
		},
		strategy: 'prefix_and_default',
		// // //  {{ $t('Header.' + locale.language) }} or {{ $t('Header.Features) }}
	},
	webpack: {
		extractCSS: true
	},
	image: {
		provider: "twicpics",
	},
})