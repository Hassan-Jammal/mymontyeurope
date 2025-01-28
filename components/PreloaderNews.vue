<template>
	<template v-if="preloader" class="preloader">
		<div class="flex flex-col justify-start items-start gap-4 lg:gap-8 py-6 px-8 lg:p-12 xl:p-24">
			<div class="w-5/12 h-10 bg-gradient-to-r from-gray-300 to-gray-200 rounded-[30px] shimmer"></div>
			<div class="w-full h-14 lg:h-24 bg-gradient-to-r from-gray-300 to-gray-200 rounded-[30px] shimmer"></div>
			<div class="w-full h-24 lg:h-56 bg-gradient-to-r from-gray-300 to-gray-200 rounded-[30px] shimmer"></div>
		</div>
		<div class="w-full h-44 md:h-72 lg:h-80 xl:h-96 bg-gradient-to-r from-gray-300 to-gray-200 rounded-b-[30px] lg:rounded-r-[30px] lg:rounded-l-none shimmer"></div>
    </template>
</template>

<script setup>
	const preloader = ref(true);
	
	setTimeout(() => {
		preloader.value = false;
	}, 1000);
</script>

<style scoped lang="sass">
	.preloader 
		display: flex
		align-items: center
		justify-content: center
		@apply w-full h-full z-50 bg-no-repeat bg-center min-h-[40vh]

	.shimmer
		background-size: 200% 100%
		animation: shimmer 1.5s linear infinite

	@keyframes shimmer
		0% 
			background-position: 200% 0
		
		100% 
			background-position: -200% 0
				
</style>
