<template>
	<NuxtLoadingIndicator class="!opacity-100" />
	<Preloader />
	
	<div>
		<AppHeader />
		<main class="mt-[93px]">
			<NuxtPage />
		</main>
		<AppDownload />
		<AppFooter />
	</div>
</template>

<script setup>
	import { useCountry } from '~/composables/useCountry';

	const { detectCountry } = useCountry();

	onMounted(() => {
		detectCountry();  // Detect country on app load
	});

	const route = useRoute()
	const { locale } = useI18n()
	const localePath = useLocalePath()

	// This will generate the correct URL with locale information
	const canonicalUrl = computed(() => {
	// Use localePath to get the correct path for the current route
	const path = localePath(route.fullPath)
		return `https://mymonty.com${path}`
	})

	useHead({
		link: [
			{
				rel: 'canonical',
				href: canonicalUrl
			}
		],
		htmlAttrs: {
			lang: locale
		}
	})
</script>
