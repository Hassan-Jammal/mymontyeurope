<template>
    <div>
        <MainBanner 
            subTitle="Sub Title"
            title="Title"
            description="Description"
            buttonLink=""
            buttonText="Learn More"
            image="one-app-for-all-things-money"
            alt="Image Alt"
            page="Who We Are"
        />

        <section id="section-2" class="my-6 py-6 lg:my-12 lg:py-12">
            <div class="container flex flex-col gap-8 lg:gap-14">
                <div class="flex flex-col justify-center items-center gap-4 lg:gap-8 lg:w-2/3 mx-auto text-center">
                    <h2 class="font-AeonikBlack text-3xl md:text-4xl xl:text-5xl 4xl:text-6xl uppercase">{{ t(`Pages.Who We Are.Section 2.Title`) }}</h2>
                    <p class="text-xl" v-html="t(`Pages.Who We Are.Section 2.Description`)"></p>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div class="flex flex-col justify-center max-lg:items-center gap-4 lg:gap-8 mx-auto max-lg:text-center">
                        <h2 class="font-AeonikBlack text-3xl md:text-4xl xl:text-5xl 4xl:text-6xl uppercase">{{ t(`Pages.Who We Are.Section 2.Cards[0].Title`) }}</h2>
                        <p class="text-xl" v-html="t(`Pages.Who We Are.Section 2.Cards[0].Description`)"></p>
                    </div>
                    <div class="lg:col-span-2">
                        <img src="/images/newpngs/this-is-the-future.png" :alt="t(`Pages.Who We Are.Section 2.Cards[0].Image Alt`)" width="1300" height="892">
                    </div>
                </div>
            </div>
        </section>
            
        <section id="section-3" class="my-6 py-6 lg:my-12 lg:py-12">
            <div class="container">
                <div class="flex flex-col justify-center items-center gap-4 lg:gap-8 lg:w-2/3 mx-auto text-center">
                    <h2 class="font-AeonikBlack text-3xl md:text-4xl xl:text-5xl 4xl:text-6xl uppercase">{{ t(`Pages.Who We Are.Section 3.Title`) }}</h2>
                    <p class="text-xl" v-html="t(`Pages.Who We Are.Section 3.Description`)"></p>
                </div>
                <div class="lg:w-3/4 mx-auto mt-8">
                    <img src="/images/newpngs/equal-opportunities-for-all.png" :alt="t(`Pages.Who We Are.Section 3.Image Alt`)" width="918" height="460">
                </div>
            </div>
        </section>

        <section id="section-4" class="my-6 py-6 lg:my-12 lg:py-12">
            <div class="container grid lg:grid-cols-2 gap-8">
                <div class="relative flex flex-col justify-center  gap-4 lg:gap-8 mx-auto mx-lg:text-center order-1 lg:order-2">
                    <h2 class="font-AeonikBlack text-3xl md:text-4xl xl:text-5xl 4xl:text-6xl uppercase">{{ t(`Pages.Who We Are.Section 4.Title`) }}</h2>
                    <p class="text-xl" v-html="t(`Pages.Who We Are.Section 4.Description`)"></p>
                    <img class="max-lg:hidden absolute bottom-0 -left-14 -z-10" src="/images/icons/monty-mobile-gray.svg" :alt="t(`General.Alts.Monty Mobile Gray`)" width="249" height="128">
                </div>
                <div class="order-2 lg:order-1">
                    <img src="/images/digital-all-the-way.webp" :alt="t(`Pages.Who We Are.Section 4.Image Alt`)" width="489" height="474">
                </div>
            </div>
        </section>

        <section id="section-5" class="my-6 py-6 lg:my-12 lg:py-12">
            <div class="container">
                <div class="lg:w-3/4 lg:mx-auto flex flex-col justify-center gap-8">
                    <h2 class="lg:w-3/4 font-AeonikBlack text-3xl md:text-4xl xl:text-5xl 4xl:text-6xl uppercase">{{ t(`Pages.Who We Are.Section 5.Title`) }}</h2>
                </div>
                <div class="grid grid-cold-2 lg:grid-cols-3 gap-4 lg:w-3/4 mx-auto justify-start items-start mt-4 lg:mt-8">
                    <div class="lg:col-span-2 flex flex-col justify-center max-lg:items-center gap-8 mx-auto mx-lg:text-center">
                        <p class="text-xl" v-html="t(`Pages.Who We Are.Section 5.Description`)"></p>
                        <img class="aspect-[14.8/12] object-cover object-center rounded-[30px]" src="/images/our-culture-building-on-diversity-1.webp" :alt="t(`Pages.Who We Are.Section 5.Image Alt`)" width="1040" height="920">
                    </div>
                    <div class="max-lg:hidden flex flex-col gap-4 order-2 lg:order-1">
                        <img src="/images/our-culture-building-on-diversity-2.webp" :alt="t(`Pages.Who We Are.Section 5.Image Alt`)" width="680" height="920">
                        <img src="/images/our-culture-building-on-diversity-3.webp" :alt="t(`Pages.Who We Are.Section 5.Image Alt`)" width="680" height="408">
                    </div>
                </div>
            </div>
        </section>

        <section id="section-6" class="my-6 py-6 lg:my-12 lg:py-12">
            <div class="container flex flex-col gap-8 lg:gap-14">
                <div class="flex flex-col justify-center items-center gap-4 lg:gap-8 lg:w-2/3 mx-auto text-center">
                    <h2 class="font-AeonikBlack text-3xl md:text-4xl xl:text-5xl 4xl:text-6xl uppercase">{{ t(`Pages.Who We Are.Section 6.Title`) }}</h2>
                    <p class="text-xl" v-html="t(`Pages.Who We Are.Section 6.Description`)"></p>
                </div>
                <div class="grid lg:grid-cols-2 gap-4 overflow-hidden text-white">
                    <div class="relative flex flex-col gap-8 p-8 lg:p-16 bg-[url('/images/uk.webp')] bg-cover bg-bottom bg-no-repeat rounded-[30px]">
                        <NuxtLinkLocale :to="'/contact-us'" class="lg:ml-auto">
                            <button class="order-2 lg:order-1 w-max lg:ml-auto py-2 px-6 text-base text-white bg-black hover:bg-primary rounded-[30px] select-none font-AeonikMedium transition-all duration-300 ease-in-out">{{ t(`General.Buttons.Contact Us`) }}</button>
                        </NuxtLinkLocale>
                        <div class="order-1 lg:order-2 flex flex-col gap-4">
                            <h2 class="font-AeonikBlack text-2xl md:text-3xl xl:text-4xl 4xl:text-5xl uppercase">{{ t(`Pages.Who We Are.Section 6.Cards[0].Location`) }}</h2>
                            <a href="tel:+441174090583" class="flex items-start gap-2 text-xl underline underline-offset-4">
                                <img src="/images/icons/telephone-white.svg" :alt="t(`General.Alts.Telephone White`)" width="28" height="28">
                                <span>+44 117 409 0583</span>
                            </a>
                            <p class="flex items-start gap-2  text-xl">
                                <img src="/images/icons/marker-pin-white.svg" :alt="t(`General.Alts.Marker Pin White`)" width="28" height="28">
                                <span v-html="t(`Pages.Who We Are.Section 6.Cards[0].Address`)"></span>
                            </p>
                        </div>
                    </div>
                    <div class="relative flex flex-col gap-8 p-8 lg:p-16 bg-[url('/images/uae.webp')] bg-cover bg-bottom bg-no-repeat rounded-[30px]">
                        <NuxtLinkLocale :to="'/contact-us'" class="lg:ml-auto">
                            <button class="order-2 lg:order-1 w-max py-2 px-6 text-base text-white bg-black hover:bg-primary rounded-[30px] select-none font-AeonikMedium transition-all duration-300 ease-in-out">{{ t(`General.Buttons.Contact Us`) }}</button>
                        </NuxtLinkLocale>
                        <div class="order-1 lg:order-2 flex flex-col gap-4">
                            <h2 class="font-AeonikBlack text-2xl md:text-3xl xl:text-4xl 4xl:text-5xl uppercase">{{ t(`Pages.Who We Are.Section 6.Cards[1].Location`) }}</h2>
                            <a href="tel:+97145657743" class="flex items-start gap-2 text-xl underline underline-offset-4">
                                <img src="/images/icons/telephone-white.svg" :alt="t(`General.Alts.Telephone White`)" width="28" height="28">
                                <span>+971 4 5657743</span>
                            </a>
                            <p class="flex items-start gap-2 text-xl">
                                <img src="/images/icons/marker-pin-white.svg" :alt="t(`General.Alts.Marker Pin White`)" width="28" height="28">
                                <span v-html="t(`Pages.Who We Are.Section 6.Cards[1].Address`)"></span>    
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
	const { t } = useLocale(); 

    useSeoMeta({
        title: t('Pages.Who We Are.Seo.Title'),
        description: '',

        ogTitle: t('Pages.Who We Are.Seo.Og Title'),
        ogDescription: t('Pages.Who We Are.Seo.Og Description'),
        ogImage: '',

        twitterTitle: t('Pages.Who We Are.Seo.Twitter Title'),
        twitterDescription: t('Pages.Who We Are.Seo.Twitter Description'),
        twitterCard: 'summary_large_image',
    })
</script>

<style lang="" scoped>
	
</style>