<template lang="">
    <header id="header" class="h-[93px] min-h-[93px]">
		<div class="h-[93px] min-h-[93px] border-b border-[#D4D4D422] z-[3]">
			<div class="container">
				<NuxtLinkLocale class="flex flex-col justify-center h-[93px] min-h-[93px] p-2" :to="'/'" >
					<img src="/images/logo-white.svg" :alt="t(`General.Alts.Logo`)" width="133" height="28" />
				</NuxtLinkLocale>
			</div>
		</div>
	</header>
<!--  lg:w-4/5 max-lg:mt-14 -->
	<main>
		<section id="section-1" class="w-screen h-[calc(100vh-93px)] flex flex-col justify-center items-center">
			<div class="container flex flex-col justify-center items-center gap-8 text-white text-center">
				<svg width="421" height="158" viewBox="0 0 421 158" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path class="animated-path" d="M351.254 3.26001H400.297V89.04V91.04H402.297H418.987V125.07H402.297H400.297V127.07V154.26H360.177V127.07V125.07H358.177H290.037V92.4195L351.254 3.26001ZM324.403 91.9156L322.279 95.04H326.057H362.177H364.177V93.04V39.91V33.4108L360.523 38.7856L324.403 91.9156ZM63.2171 3.26001H112.26V89.04V91.04H114.26H130.95V125.07H114.26H112.26V127.07V154.26H72.14V127.07V125.07H70.14H2V92.4195L63.2171 3.26001ZM36.366 91.9156L34.2419 95.04H38.02H74.14H76.14V93.04V39.91V33.4108L72.486 38.7856L36.366 91.9156ZM257.745 136.102L259.22 137.453L257.745 136.102C246.141 148.769 229.78 155.52 210.806 155.52C191.832 155.52 175.471 148.769 163.866 136.102C152.275 123.45 145.596 105.079 145.596 82.12V75.4C145.596 52.5437 152.276 34.1749 163.864 21.498C175.466 8.80671 191.827 2 210.806 2C229.784 2 246.145 8.8067 257.747 21.4981C269.335 34.175 276.016 52.5438 276.016 75.4V82.12C276.016 105.079 269.337 123.45 257.745 136.102ZM239.056 80.86V76.66C239.056 62.5756 236.288 51.6411 231.349 44.1628C226.357 36.6053 219.187 32.66 210.806 32.66C202.425 32.66 195.255 36.6053 190.263 44.1628C185.324 51.6411 182.556 62.5756 182.556 76.66V80.86C182.556 95.0463 185.323 105.984 190.265 113.439C195.262 120.976 202.435 124.86 210.806 124.86C219.177 124.86 226.35 120.976 231.347 113.439C236.289 105.984 239.056 95.0463 239.056 80.86Z" stroke="black" stroke-width="4"/>
				</svg>
				<h1 class="font-AeonikBlack text-3xl md:text-4xl xl:text-5xl 4xl:text-6xl" v-html="t(`Pages.Error.Section 1.Title`)"></h1>
				<p class="lg:w-2/3 text-xl" v-html="t(`Pages.Error.Section 1.Description`)"></p>
				<NuxtLinkLocale :to="'/'" >
					<button class="w-max py-2 px-6 text-base text-black hover:text-white bg-white hover:bg-primary rounded-[30px] select-none font-AeonikMedium transition-all duration-300 ease-in-out">{{ t(`General.Buttons.Visit The Homepage`) }}</button>
				</NuxtLinkLocale>
			</div>
        </section>
	</main>
</template>

<script setup lang="ts">
	import { useLocale } from './composables/useLocale'; 
	import type { NuxtError } from '#app'

	const { t } = useLocale(); 

	const props = defineProps({
		error: Object as () => NuxtError
	})

	useServerSeoMeta({
		title: () => t('Pages.Error.Seo.Title', { code: props.error.statusCode || 'Unknown' }),
		description: () => t('Pages.Error.Seo.Description', { message: props.error.message || t('Pages.Error.Seo.Default Message') }),

		ogTitle: () => t('Pages.Error.Seo.Og Title', { code: props.error.statusCode || 'Unknown' }),
		ogDescription: () => t('Pages.Error.Seo.Og Description', { message: props.error.message || t('Pages.Error.Seo.Default Message') }),

		twitterTitle: () => t('Pages.Error.Seo.Og Title', { code: props.error.statusCode || 'Unknown' }),
        twitterDescription: () => t('Pages.Error.Seo.Og Description', { message: props.error.message || t('Pages.Error.Seo.Default Message') }),
	})

	// const handleError = () => clearError({ redirect: '/' })

	useHead({
		bodyAttrs: {
			class: "w-screen h-screen bg-black"
		}
	})
</script>

<style lang="sass" scoped>
	.animated-path
		fill: white
		stroke: none
		stroke-width: 2
		animation: fillStrokeToggle 2s infinite

	@keyframes fillStrokeToggle
		0%, 50%
			fill: white
			stroke: none

		0%, 100%
			fill: none
			stroke: white
</style>