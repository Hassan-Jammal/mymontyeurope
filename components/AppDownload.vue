<template>
    <section id="download" class="my-2 py-2 lg:my-14 lg:py-14">
        <div class="container">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-14 py-12 lg:py-24 px-8 lg:px-24 text-white bg-black rounded-[30px]">
                <div class="lg:col-span-2 flex flex-col justify-center lg:justify-between max-lg:items-center max-lg:text-center gap-14 lg:gap-24">
                    <div>
                        <h2 class="font-AeonikBlack text-3xl md:text-4xl xl:text-5xl 4xl:text-6xl uppercase">{{ t(`General.Download.Title`) }}</h2>
                        <p class="text-xl mt-4">{{ t(`General.Download.Description`) }}</p>
                    </div>
                    <div class="flex gap-4">
                        <a href="https://play.google.com/store/apps/details?id=com.mymonty.wallet" :aria-label="t(`General.Alts.Google Play`)" target="_blank" rel="noopener noreferrer">
                            <div class="py-4 px-4 lg:px-6 min-w-32 bg-white rounded-xl cursor-pointer transition-all duration-300 ease-in-out">
                                <NuxtImg loading="lazy" src="/images/icons/google-play.svg" :alt="t(`General.Alts.Google Play`)" width="150" height="40" />
                            </div>
                        </a>
                        <a href="https://apps.apple.com/lb/app/mymonty-europe/id6451243007" aria-label="t(`General.Alts.Apple Store`)" target="_blank" rel="noopener noreferrer">
                            <div class="py-4 px-4 lg:px-6 min-w-32 bg-white rounded-xl cursor-pointer transition-all duration-300 ease-in-out">
                                <NuxtImg loading="lazy" src="/images/icons/app-store.svg" :alt="t(`General.Alts.Apple Store`)" width="150" height="40" />
                            </div>
                        </a>
                    </div>
                </div>
                <div class="mx-auto lg:ms-auto lg:mx-0 text-right">
                    <NuxtImg loading="lazy" src="/images/icons/qr-code.svg" :alt="t(`General.Alts.Qr Code`)" width="180" height="180" />
                    <p class="text-center text-xl mt-4" v-html="t(`General.Download.Scan Qr`)"></p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
	const { t } = useLocale(); 
</script>