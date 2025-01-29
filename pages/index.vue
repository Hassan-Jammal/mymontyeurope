<template>
    <div id="homepage" class="homepage">
        <section id="section-1" class="w-full lg:h-[calc(100vh-93px)] bg-[#ECECEE]">
            <div class="relative container flex flex-col justify-center gap-14 h-full">
                <div class="flex flex-col justify-center gap-8 lg:w-4/5 max-lg:mt-14">
                    <h1 class="font-AeonikBlack text-4xl md:text-6xl xl:text-[5.2rem] 4xl:text-8xl 5xl:text-9xl uppercase" v-html="t(`Pages.Homepage.Banner.Title`)"></h1>
                    <p class="lg:w-1/2 text-2xl" v-html="t(`Pages.Homepage.Banner.Description`)"></p>
                    <NuxtLinkLocale :to="`/features/accounts`" class="w-max py-2 px-6 text-base text-white bg-black hover:bg-primary rounded-[30px] select-none font-AeonikMedium transition-all duration-300 ease-in-out">{{ t(`General.Buttons.Get Started`) }}</NuxtLinkLocale>
                    <!-- <button @click="scrollToDownload" class="w-max py-2 px-6 text-base text-white bg-black hover:bg-primary rounded-[30px] select-none font-AeonikMedium transition-all duration-300 ease-in-out">Get Started</button> -->
                </div>
                <div class="lg:absolute lg:bottom-0 lg:right-0 lg:w-[55%]">
                    <img src="/images/main-banner.webp" :alt="t(`Pages.Homepage.Banner.Image Alt`)" width="1424" height="1664">
                </div>
            </div>
        </section>

        <section id="section-2" class="my-6 py-6 lg:my-12 lg:py-12">
            <div class="container">
                <div class="flex flex-col justify-center items-center gap-4 lg:gap-8 lg:w-2/3 mx-auto text-center">
                    <h2 class="font-AeonikBlack text-3xl md:text-4xl xl:text-5xl 4xl:text-6xl uppercase">{{ t(`Pages.Homepage.Section 2.Title`) }}</h2>
                    <p class="text-xl" v-html="t(`Pages.Homepage.Section 2.Description`)"></p>
                    <NuxtLinkLocale :to="'/features'">
                        <button class="py-2 px-4 text-base text-white bg-primary hover:bg-black rounded-[30px] select-none font-AeonikMedium transition-all duration-300 ease-in-out">{{ t(`General.Buttons.View All Features`) }}</button>
                    </NuxtLinkLocale>
                </div>
            </div>
        </section>

        <section id="section-3" class="my-6 py-6 lg:my-12 lg:py-12">
            <div class="container">
                <div class="grid lg:grid-cols-2 justify-start items-center gap-16 lg:gap-32">
                    <div class="flex flex-col justify-start items-start gap-4 lg:gap-8">
                        <h3 class="font-AeonikBlack text-3xl md:text-4xl xl:text-5xl 4xl:text-6xl uppercase">{{ t(`Pages.Homepage.Section 3.Title`) }}</h3>
                        <p class="text-left text-xl" v-html="t(`Pages.Homepage.Section 3.Description`)"></p>
                        <NuxtLinkLocale :to="'/features/payments'">
                            <button class="py-2 px-6 text-base text-white bg-black hover:bg-primary rounded-[30px] select-none font-AeonikMedium transition-all duration-300 ease-in-out">{{ t(`General.Buttons.Payments`) }}</button>
                        </NuxtLinkLocale>
                    </div>
                    <img src="/images/get-on-board-with-us.webp" :alt="t(`Pages.Homepage.Section 3.Image Alt`)" width="1096" height="892">
                </div>
            </div>
        </section>    

        <section id="section-4" class="manage-your-money relative my-12 py-12 lg:my-14 lg:py-36 bg-[url('/images/manage-your-money-bg.webp')] bg-fixed bg-no-repeat bg-cover bg-center">
            <div class="container">
                <div class="flex flex-col justify-center gap-14 h-full">
                    <img class="w-44 lg:w-64" src="/images/manage-your-money.webp" :alt="t(`Pages.Homepage.Section 4.Image Alt`)" width="514" height="384">

                    <div class="flex flex-col justify-start items-start gap-4 lg:gap-8 text-white">
                        <h3 class="font-AeonikBlack text-3xl md:text-4xl xl:text-5xl 4xl:text-6xl uppercase">{{ t(`Pages.Homepage.Section 4.Title`) }}</h3>
                        <ul class="flex flex-col gap-4">
                            <li class="flex gap-2">
                                <img src="/images/icons/check-box-white.svg" :alt="t(`General.Alts.Check Box White`)" width="21" height="20">
                                <p class="text-xl">{{ t(`Pages.Homepage.Section 4.List Items.Item 1`) }}</p>
                            </li>
                            <li class="flex gap-2">
                                <img src="/images/icons/check-box-white.svg" :alt="t(`General.Alts.Check Box White`)" width="21" height="20">
                                <p class="text-xl">{{ t(`Pages.Homepage.Section 4.List Items.Item 2`) }}</p>
                            </li>
                            <li class="flex gap-2">
                                <img src="/images/icons/check-box-white.svg" :alt="t(`General.Alts.Check Box White`)" width="21" height="20">
                                <p class="text-xl">{{ t(`Pages.Homepage.Section 4.List Items.Item 3`) }}</p>
                            </li>
                        </ul>
                        <NuxtLinkLocale :to="'/features/payments'">
                            <button class="py-2 px-6 text-base text-black hover:text-white bg-white hover:bg-primary rounded-[30px] select-none font-AeonikMedium transition-all duration-300 ease-in-out">{{ t(`General.Buttons.Payments`) }}</button>
                        </NuxtLinkLocale>
                    </div>
                </div>
            </div>
        </section>

        <section id="section-5" class="my-6 py-6 lg:my-12 lg:py-12">
            <div class="container">
                <div class="flex flex-col justify-center items-center gap-4 lg:gap-8 lg:w-2/3 mx-auto text-center">
                    <h2 class="font-AeonikBlack text-3xl md:text-4xl xl:text-5xl 4xl:text-6xl uppercase">{{ t(`Pages.Homepage.Section 5.Title`) }}</h2>
                    <p class="text-xl" v-html="t(`Pages.Homepage.Section 5.Description`)"></p>
                </div>
                <img class="w-full mt-8" src="/images/request-money-with-ease.webp" :alt="t(`Pages.Homepage.Section 5.Image Alt`)" width="2124" height="893">
            </div>
        </section>

        <section id="section-6" class="my-6 py-6 lg:my-12 lg:py-12">
            <div class="container">
                <div class="grid lg:grid-cols-2 justify-start items-center gap-16 lg:gap-32">
                    <div class="flex flex-col justify-start items-start gap-4 lg:gap-8 order-1 lg:order-2">
                        <h3 class="font-AeonikBlack text-3xl md:text-4xl xl:text-5xl 4xl:text-6xl uppercase">{{ t(`Pages.Homepage.Section 6.Title`) }}</h3>
                        <ul class="flex flex-col gap-4">
                            <li class="flex gap-2">
                                <img src="/images/icons/check-box-black.svg" :alt="t(`General.Alts.Check Box Black`)" width="21" height="20">
                                <p class="text-xl">{{ t(`Pages.Homepage.Section 6.List Items.Item 1`) }}</p>
                            </li>
                            <li class="flex gap-2">
                                <img src="/images/icons/check-box-black.svg" :alt="t(`General.Alts.Check Box Black`)" width="21" height="20">
                                <p class="text-xl">{{ t(`Pages.Homepage.Section 6.List Items.Item 2`) }}</p>
                            </li>
                            <li class="flex gap-2">
                                <img src="/images/icons/check-box-black.svg" :alt="t(`General.Alts.Check Box Black`)" width="21" height="20">
                                <p class="text-xl">{{ t(`Pages.Homepage.Section 6.List Items.Item 3`) }}</p>
                            </li>
                        </ul>
                        <NuxtLinkLocale :to="'/features/accounts'">
                            <button class="py-2 px-6 text-base text-white bg-black hover:bg-primary rounded-[30px] select-none font-AeonikMedium transition-all duration-300 ease-in-out">{{ t(`General.Buttons.Accounts`) }}</button>
                        </NuxtLinkLocale>
                    </div>
                    <img class="order-2 lg:order-1" src="/images/stay-protected.webp" :alt="t(`Pages.Homepage.Section 6.Image Alt`)" width="1120" height="892">
                </div>
            </div>
        </section>    

        <section id="section-7" class="my-6 py-6 lg:my-12 lg:py-12">
            <div class="container">
                <div class="flex flex-col justify-center items-center gap-4 lg:gap-8 lg:w-2/3 mx-auto text-center">
                    <h2 class="font-AeonikBlack text-3xl md:text-4xl xl:text-5xl 4xl:text-6xl uppercase">{{ t(`Pages.Homepage.Section 7.Title`) }}</h2>
                    <p class="text-xl" v-html="t(`Pages.Homepage.Section 7.Description`)"></p>
                </div>
                <img class="w-full mt-8" src="/images/time-to-go-digital.webp" :alt="t(`Pages.Homepage.Section 7.Image Alt`)" width="2124" height="1022">
            </div>
        </section>

        <section id="section-8" class="my-6 py-6 lg:my-12 lg:py-12">
            <div class="container">
                <div class="flex flex-col justify-center items-center gap-4 lg:gap-8 lg:w-2/3 mx-auto text-center">
                    <h2 class="font-AeonikBlack text-3xl md:text-4xl xl:text-5xl 4xl:text-6xl uppercase">{{ t(`Pages.Homepage.Section 8.Title`) }}</h2>
                    <NuxtLinkLocale :to="'/features'">
                        <button class="py-2 px-4 text-base text-white bg-primary hover:bg-black rounded-[30px] select-none font-AeonikMedium transition-all duration-300 ease-in-out">{{ t(`General.Buttons.View All Features`) }}</button>
                    </NuxtLinkLocale>
                </div>

                <div class="mt-8">
                    <div class="relative grid lg:grid-cols-2 justify-start items-center bg-[#E7EEF1] rounded-[30px] z-10">
                        <img class="hidden lg:block absolute top-12 -left-4 -z-10" src="/images/icons/receipt-check-box-primary.svg" :alt="t(`General.Alts.Receipt Check Box Primary`)" width="77" height="77">
                        
                        <div class="flex flex-col justify-start items-start gap-4 lg:gap-8 py-6 px-8 lg:py-6 lg:px-12 xl:py-12 xl:px-24 z-20">
                            <h3 class="font-AeonikBlack text-3xl md:text-4xl xl:text-5xl 4xl:text-6xl uppercase">{{ t(`Pages.Homepage.Section 8.Features[0].Title`) }}</h3>
                            <p class="text-left text-xl" v-html="t(`Pages.Homepage.Section 8.Features[0].Description`)"></p>
                        </div>
                        <div class="w-full h-full rounded-b-[30px] lg:rounded-r-[30px] lg:rounded-l-none overflow-hidden">
                            <img class="w-full h-full object-cover" src="/images/streamlined-contactless-payments.webp" :alt="t(`Pages.Homepage.Section 8.Features[0].Image Alt`)" width="1040" height="892">
                        </div>
                    </div>

                    <div class="relative grid lg:grid-cols-2 justify-start items-center text-white bg-black rounded-[30px] mt-4 z-10">
                        <img class="hidden lg:block absolute top-12 -right-4 -z-10" src="/images/icons/chat-box-primary.svg" :alt="t(`General.Alts.Chat Box Primary`)" width="77" height="77">

                        <div class="flex flex-col justify-start items-start gap-4 lg:gap-8 py-6 px-8 lg:py-6 lg:px-12 xl:py-12 xl:px-24 order-1 lg:order-2 z-20">
                            <h3 class="font-AeonikBlack text-3xl md:text-4xl xl:text-5xl 4xl:text-6xl uppercase">{{ t(`Pages.Homepage.Section 8.Features[1].Title`) }}</h3>
                            <p class="text-left text-xl" v-html="t(`Pages.Homepage.Section 8.Features[1].Description`)"></p>
                        </div>
                        <div class="w-full h-full rounded-b-[30px] lg:rounded-l-[30px] lg:rounded-r-none overflow-hidden order-2 lg:order-1">
                            <img class="w-full h-full object-cover" src="/images/support-around-the-clock.webp" :alt="t(`Pages.Homepage.Section 8.Features[1].Image Alt`)" width="1040" height="892">
                        </div>
                    </div>
                </div>
            </div>
        </section>  

        <section id="section-9" class="relative my-12 py-12 lg:my-14 lg:py-36 bg-[url('/images/choose-your-plan-bg.webp')] bg-fixed bg-no-repeat bg-cover bg-center">
            <div class="container">
                <div class="flex flex-col justify-center items-center gap-8 lg:w-2/3 mx-auto text-white text-center">
                    <h2 class="font-AeonikBlack text-3xl md:text-4xl xl:text-5xl 4xl:text-6xl uppercase">{{ t(`Pages.Homepage.Section 9.Title`) }}</h2>
                    <p class="text-xl" v-html="t(`Pages.Homepage.Section 9.Description`)"></p>
                    <NuxtLinkLocale :to="'/plans'">
                        <button class="py-2 px-4 text-base text-black hover:text-white bg-white hover:bg-primary rounded-[30px] select-none font-AeonikMedium transition-all duration-300 ease-in-out">{{ t(`General.Buttons.View all plans`) }}</button>
                    </NuxtLinkLocale>
                </div>

                <div class="grid lg:grid-cols-3 justify-start gap-8 xl:w-3/4 mx-auto text-white text-center mt-14">
                    <div class="flex flex-col justify-between gap-14 border border-white rounded-[30px] py-10 px-8">
                        <div>
                            <h3 class="font-AeonikBlack text-2xl md:text-3xl xl:text-4xl 4xl:text-5xl uppercase">{{ t(`Pages.Homepage.Section 9.Plans[0].Title`) }}</h3>
                            <p class="text-xl mt-4" v-html="t(`Pages.Homepage.Section 9.Plans[0].Description`)"></p>
                        </div>
                        <div class="w-full px-4">
                            <ScrollButton target="download" class="w-full py-2 px-4 text-base text-white bg-primary rounded-[30px] select-none font-AeonikMedium">{{ t(`Pages.Homepage.Section 9.Plans[0].Button Label`) }}</ScrollButton>
                        </div>
                    </div>
                    <div class="flex flex-col justify-between gap-14 border border-white rounded-[30px] py-10 px-8">
                        <div>
                            <h3 class="font-AeonikBlack text-2xl md:text-3xl xl:text-4xl 4xl:text-5xl uppercase">{{ t(`Pages.Homepage.Section 9.Plans[1].Title`) }}</h3>
                            <p class="text-xl mt-4" v-html="t(`Pages.Homepage.Section 9.Plans[1].Description`)"></p>
                        </div>
                        <div class="w-full px-4">
                            <p class="font-AeonikMediumItalic text-[#D4D4D4] text-base">{{ t(`Pages.Homepage.Section 9.Plans[1].Status`) }}</p>
                            <button class="w-full py-2 px-4 mt-2 text-base text-white bg-transparent border border-white rounded-[30px] select-none font-AeonikMediumItalic cursor-default">{{ t(`Pages.Homepage.Section 9.Plans[1].Button Label`) }}</button>
                        </div>
                    </div>
                    <div class="flex flex-col justify-between gap-14 border border-white rounded-[30px] py-10 px-8">
                        <div>
                            <h3 class="font-AeonikBlack text-2xl md:text-3xl xl:text-4xl 4xl:text-5xl uppercase">{{ t(`Pages.Homepage.Section 9.Plans[2].Title`) }}</h3>
                            <p class="text-xl mt-4" v-html="t(`Pages.Homepage.Section 9.Plans[2].Description`)"></p>
                        </div>
                        <div class="w-full px-4">
                            <p class="font-AeonikMediumItalic text-[#D4D4D4] text-base">{{ t(`Pages.Homepage.Section 9.Plans[2].Status`) }}</p>
                            <button class="w-full py-2 px-4 mt-2 text-base text-white bg-transparent border border-white rounded-[30px] select-none font-AeonikMediumItalic cursor-default">{{ t(`Pages.Homepage.Section 9.Plans[2].Button Label`) }}</button>
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
        title: t('Pages.Homepage.Seo.Title'),
        description: t('Pages.Homepage.Seo.Description'),

        ogTitle: t('Pages.Homepage.Seo.Og Title'),
        ogDescription: t('Pages.Homepage.Seo.Og Description'),
        ogImage: '',

        twitterTitle: t('Pages.Homepage.Seo.Twitter Title'),
        twitterDescription: t('Pages.Homepage.Seo.Twitter Description'),
        twitterCard: 'summary_large_image',
    })
</script>