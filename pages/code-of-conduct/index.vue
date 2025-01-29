<template>
    <div>
        <MainBanner 
            subTitle="Sub Title"
            title="Title"
            description="Description"
            buttonLink=""
            buttonText="Learn More"
            image="our-code-of-conduct"
            alt="Image Alt"
            page="Code Of Conduct"
        />

        <section id="section-2" class="my-6 py-6 lg:my-12 lg:py-12">
            <div class="container">
                <div class="grid lg:grid-cols-2 gap-4">
                    <div v-for="(item, index) in valuesItems" :key="index" class="p-8 lg:p-12 bg-[#F7F7F7] rounded-[30px]">
                        <div class="flex flex-col lg:flex-row justify-start items-start gap-8">
                            <NuxtImg loading="lazy" class="w-20" :src="`/images/icons/${ item.icon }.svg`" :alt="t(`Pages.Code Of Conduct.Section 2.Cards[${index}].Image Alt`)" width="130" height="130" />
                            <div class="flex flex-col gap-2">
                                <h2 class="font-AeonikBlack text-xl md:text-2xl xl:text-3xl 4xl:text-5xl uppercase">{{ item.title }}</h2>
                                <p class="text-xl" v-html="item.description"></p>
                            </div>
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
        title: t('Pages.Code Of Conduct.Seo.Title'),
        description: '',

        ogTitle: t('Pages.Code Of Conduct.Seo.Og Title'),
        ogDescription: t('Pages.Code Of Conduct.Seo.Og Description'),
        ogImage: '',

        twitterTitle: t('Pages.Code Of Conduct.Seo.Twitter Title'),
        twitterDescription: t('Pages.Code Of Conduct.Seo.Twitter Description'),
        twitterCard: 'summary_large_image',
    })

    const valuesItems = ref([
        {
            icon: "equality",
            title: t(`Pages.Code Of Conduct.Section 2.Cards[0].Title`),
            description: t(`Pages.Code Of Conduct.Section 2.Cards[0].Description`)
        },
        {
            icon: "inclusivity",
            title: t(`Pages.Code Of Conduct.Section 2.Cards[1].Title`),
            description: t(`Pages.Code Of Conduct.Section 2.Cards[1].Description`)
        },
        {
            icon: "integrity",
            title: t(`Pages.Code Of Conduct.Section 2.Cards[2].Title`),
            description: t(`Pages.Code Of Conduct.Section 2.Cards[2].Description`)
        },
        {
            icon: "excellence",
            title: t(`Pages.Code Of Conduct.Section 2.Cards[3].Title`), 
            description: t(`Pages.Code Of Conduct.Section 2.Cards[3].Description`)
        },
        {
            icon: "commitment",
            title: t(`Pages.Code Of Conduct.Section 2.Cards[4].Title`),
            description: t(`Pages.Code Of Conduct.Section 2.Cards[4].Description`)
        },
        {
            icon: "professionalism",
            title: t(`Pages.Code Of Conduct.Section 2.Cards[5].Title`),
            description: t(`Pages.Code Of Conduct.Section 2.Cards[5].Description`)
        },
        {
            icon: "compliance-and-legal-responsibility",
            title: t(`Pages.Code Of Conduct.Section 2.Cards[6].Title`),
            description: t(`Pages.Code Of Conduct.Section 2.Cards[6].Description`)
        },
        {
            icon: "confidentiality-and-data-protection",
            title: t(`Pages.Code Of Conduct.Section 2.Cards[7].Title`),
            description: t(`Pages.Code Of Conduct.Section 2.Cards[7].Description`)
        },
        {
            icon: "customer-focus",
            title: t(`Pages.Code Of Conduct.Section 2.Cards[8].Title`),
            description: t(`Pages.Code Of Conduct.Section 2.Cards[8].Description`)
        },
    ])
</script>

<style lang="" scoped>
	
</style>