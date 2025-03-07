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

	onMounted(async () => {
		const { data } = await useFetch('/api/geoip');
		
		if (data.value && data.value.continent_code !== 'EU') {
			window.location.href = 'https://mymonty.com.lb';
		}

		detectCountry();  // Detect country on app load
	});
</script>
