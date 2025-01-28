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
</script>
