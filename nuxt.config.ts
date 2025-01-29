// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	// ssr: true,
	css: ["~/assets/sass/app.sass"],
	pages: true,
	modules: ['@nuxtjs/tailwindcss', 'nuxt-gtag', '@nuxtjs/sitemap', 'nuxt-aos', "@vueuse/nuxt", "@nuxtjs/i18n", "@nuxt/scripts", '@nuxtjs/google-fonts'],
	// googleFonts: {
	// 	families: {
	// 	  'Exo 2': '400..900'
	// 	} 
	// },
	site: {
		url: 'https://mymonty.com',
	},
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
			titleTemplate: "%s | MyMonty Europe",
			htmlAttrs: {
				lang: "en",
			},
			link: [
				{
					rel: "icon",
					type: "image/png",
					href: "http://92.205.130.62:5000/images/favicon-64x64.png",
				},
				{
					rel: "icon",
					type: "image/png",
					href: "http://92.205.130.62:5000/images/favicon-32x32.png",
				},
				{
					rel: "icon",
					type: "image/png",
					href: "http://92.205.130.62:5000/images/favicon-16x16.png",
				},
				{
					rel: "apple-touch-icon",
					type: "image/png",
					href: "http://92.205.130.62:5000/images/apple-touch-icon-180x180.png",
				},
				{
					rel: "mask-icon",
					href: "http://92.205.130.62:5000/images/icons/mask-icon.svg",
					color: "#32393C",
				},
				{
					rel: "icon",
					sizes: "192x192",
					href: "http://92.205.130.62:5000/images/android-chrome-192x192.png",
				},
				{
					rel: "icon",
					sizes: "512x512",
					href: "http://92.205.130.62:5000/images/android-chrome-512x512.png",
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
						"description": "MyMonty is a super digital wallet, setting the digital stage for your money to take the spotlight and dance like no one's watching!",
						"logo": "http://92.205.130.62:5000/images/logo.svg", // png
						"sameAs": [
							"https://www.facebook.com/mymonty",
							"https://x.com/mymontyapp",
							"https://www.instagram.com/mymonty",
							"https://www.linkedin.com/company/my-monty",
							"https://www.tiktok.com/@revolutapp",
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
			pages.push({
				name: 'Accounts',
				path: '/features/accounts',
				file: '~/pages/features/index.vue', // Reuse the index.vue file for Accounts
			});
			pages.push({
				name: 'Cards',
				path: '/features/cards',
				file: '~/pages/features/index.vue', // Reuse the index.vue file for Cards
			});
			pages.push({
				name: 'Transfers',
				path: '/features/transfers',
				file: '~/pages/features/index.vue', // Reuse the index.vue file for Transfers
			});
			pages.push({
				name: 'Payments',
				path: '/features/payments',
				file: '~/pages/features/index.vue', // Reuse the index.vue file for Payments
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
			// {
			// 	code: 'es-EU',
			// 	iso: 'es-EU',
			// 	region: 'Europe',
			// 	language: 'Spanish',
			// 	icon: 'eu',
			// 	file: 'es-EU.json',
			// 	native: false,
			// 	hideLanguages: false,
			// },
			// {
			// 	code: 'it-EU',
			// 	iso: 'it-EU',
			// 	region: 'Europe',
			// 	language: 'Italian',
			// 	icon: 'eu',
			// 	file: 'it-EU.json',
			// 	native: false,
			// 	hideLanguages: false,
			// },
			// {
			// 	code: 'fr-EU',
			// 	iso: 'fr-EU',
			// 	region: 'Europe',
			// 	language: 'French',
			// 	icon: 'eu',
			// 	file: 'fr-EU.json',
			// 	native: false,
			// 	hideLanguages: false,
			// },
		],
		restructureDir: './',
		langDir: './locales/', // Ensure this directory exists
		// lazy: true, // If false, this will show the translation not yet translate.
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
		strategy: 'prefix_except_default',
		// // //  {{ $t('Header.' + locale.language) }} or {{ $t('Header.Features) }}
	},
	webpack: {
		extractCSS: true
	}
})