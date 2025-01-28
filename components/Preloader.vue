<template>
	<div class="preloader" v-if="preloader">
		<div class="custom-loader"></div>
	</div>
</template>

<script setup>
	const preloader = ref(true);
	
	setTimeout(() => {
		preloader.value = false;
	}, 1000);
</script>

<style scoped lang="sass">
	.preloader 
		display: -webkit-box
		display: -ms-flexbox
		-webkit-box-align: center
		-ms-flex-align: center
		-webkit-box-pack: center
		-ms-flex-pack: center
		@apply fixed top-0 left-0 w-full h-full z-[99999999] flex items-center justify-center bg-black bg-no-repeat bg-center
		
		.custom-loader 
			-webkit-animation: 1s preloader linear infinite
			animation: 1s preloader linear infinite
			@apply w-20 h-20 rounded-full bg-transparent border-2 border-solid border-white border-t-black border-b-black

	/* Preloader */
	@-webkit-keyframes preloader 
		from 
			-webkit-transform: rotate(0deg)
			transform: rotate(0deg)
		
		to 
			-webkit-transform: rotate(360deg)
			transform: rotate(360deg)
		
	
	@keyframes preloader 
		from 
			-webkit-transform: rotate(0deg)
			transform: rotate(0deg)
		
		to 
			-webkit-transform: rotate(360deg)
			transform: rotate(360deg)
</style>
