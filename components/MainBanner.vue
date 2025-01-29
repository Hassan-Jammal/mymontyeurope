<template>
    <section id="section-1" class="w-screen lg:h-[calc(100vh-93px)] bg-black">
        <div class="relative container grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-8 py-14 h-full">
            <div class="lg:col-span-2 flex flex-col justify-center gap-8 lg:w-4/5 text-white">
                <span class="text-2xl text-[#D4D4D4] font-AeonikBold">{{ t(`Pages.${ page }.Banner.${ subTitle }`) }}</span>
                <h1 class="font-AeonikBlack text-4xl md:text-6xl xl:text-[5.2rem] 4xl:text-8xl 5xl:text-9xl uppercase">{{ t(`Pages.${ page }.Banner.${ title }`) }}</h1>
                <p class="text-2xl" v-html="t(`Pages.${ page }.Banner.${ description }`)"></p>
                <NuxtLink v-if="buttonLink != ''" :to="`/${ buttonLink }`">
                    <button class="w-max py-2 px-6 text-base text-black hover:text-white bg-white hover:bg-primary rounded-[30px] select-none font-AeonikMedium transition-all duration-300 ease-in-out">{{ t(`General.Buttons.${ buttonText }`) }}</button>
                </NuxtLink>
                <ScrollButton v-else target="section-2" class="w-max py-2 px-6 text-base text-black hover:text-white bg-white hover:bg-primary rounded-[30px] select-none font-AeonikMedium transition-all duration-300 ease-in-out">{{ t(`General.Buttons.${ buttonText }`) }}</ScrollButton>
            </div>
            <div class="w-full">
                <img loading="lazy" class="w-full" :src="`/images/${ image }.webp`" :alt="t(`Pages.${ page }.Banner.${ alt }`)" width="826" height="950">
            </div>
        </div>
    </section>
</template>

<script setup>
	const { t } = useLocale(); 

    const props = defineProps({
        subTitle: { type: String, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        buttonText: { type: String, required: false },
        buttonLink: { type: String, required: false },
        image: { type: String, required: true },
        alt: { type: String, required: true },
        page: { type: String, required: true },
    });
</script>