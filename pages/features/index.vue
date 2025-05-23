<template>
    <div>
        <MainBanner 
            subTitle="Sub Title"
            title="Title"
            description="Description"
            buttonLink=""
            buttonText="Get Started"
            image="unlock-the-best-of-what-we-offer"
            alt="Image Alt"
            page="Features"
        />

        <section id="section-2" class="my-6 py-6 lg:my-12 lg:py-12">
            <div class="container">
                <div class="relative flex flex-col justify-center items-center gap-12 lg:w-2/3 mx-auto text-center">
                    <h2 class="font-AeonikBlack text-3xl md:text-4xl xl:text-5xl 4xl:text-6xl uppercase">{{ t(`Pages.Features.Section 2.Title`) }}</h2>
                    <p class="text-xl" v-html="t(`Pages.Features.Section 2.Description`)"></p>
                    <div class="w-full overflow-hidden flex justify-center">
                        <div id="tabs" class="flex gap-x-3 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth">
                            <div v-for="(item, index) in featuresItems" :key="index" class="flex-none snap-center">
                                <ScrollButton @click="show(index)" target="tabs" :class="['whitespace-nowrap w-full py-2 px-4 lg:px-6 text-base border rounded-[30px] select-none transition-all duration-300 ease-in-out inline-block text-center', activeTab === index ? 'text-white bg-primary border-primary' : 'text-black bg-transparent border-black']">{{ item.category }}</ScrollButton>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid lg:grid-cols-2 gap-4 mt-10">
                    <template v-for="(category, index) in featuresItems" :key="index">
                        <template v-for="(item, featureIndex) in category.featuresItems" :key="featureIndex">
                            <div :class="{ 'absolute invisible opacity-0': activeTab !== index }" class="flex flex-col justify-between gap-8 p-8 lg:p-12 bg-[#F7F7F7] rounded-[30px]">
                                <div class="flex flex-col gap-2">
                                    <NuxtImg loading="lazy" :src="`/images/icons/${ item.icon }.svg`" :alt="item.title" width="90" height="90" />
                                    <h2 class="font-AeonikBlack text-xl md:text-2xl xl:text-3xl 4xl:text-5xl uppercase mt-6">{{ item.title }}</h2>
                                    <p class="text-xl" v-html="`${item.excerpt}...`"></p>
                                </div>
                                <NuxtLinkLocale :to="`/features/${ category.path }/${ item.path }`">
                                    <button class="w-max ml-auto py-2 px-6 text-base text-white bg-primary hover:bg-black rounded-[30px] select-none font-AeonikMedium transition-all duration-300 ease-in-out">{{ t(`General.Buttons.Read More`) }}</button>
                                </NuxtLinkLocale>
                            </div>
                        </template>
                    </template>
                </div>
            </div>
        </section>
    </div>
</template>
 
<script setup>
    import ScrollButton from '~/components/ScrollButton.vue';
    import slugify from '~/utils/slugify';
    import { featuresData } from '~/data/features'; // Adjust the path accordingly

	const { t, currentLocale } = useLocale(); 

    const route = useRoute();

    useSeoMeta({
        title: t('Pages.Features.Seo.Title'),
        description: t(`Pages.Features.Seo.Description`),

        ogTitle: t('Pages.Features.Seo.Og Title'),
        ogDescription: t('Pages.Features.Seo.Og Description'),
        ogImage: '',

        twitterTitle: t('Pages.Features.Seo.Twitter Title'),
        twitterDescription: t('Pages.Features.Seo.Twitter Description'),
        twitterCard: 'summary_large_image',
    })

    const activeTab = ref(0);

    const show = (index) => {
        activeTab.value = index;
    };

	// const featuresItems = useState('featuresItems', () => featuresData(t));

    const featuresItems = ref([]);

    watchEffect(async () => {
        featuresItems.value = await featuresData(t, currentLocale.value);
    });
    
    // Watch the route to update activeTab based on the URL
    watchEffect(() => {
        const currentPath = route.path.split('/').pop();
        const tabIndex = featuresItems.value.findIndex(item => item.path.toLowerCase() === currentPath.toLowerCase());
        activeTab.value = tabIndex !== -1 ? tabIndex : 0; // Set active tab or default to 0 if not found
    });

    onMounted(() => {
        setTimeout(() => {
            const header = document.getElementById('header');
            const headerHeight = header ? header.clientHeight : 0;
            const targetElement = document.getElementById('tabs');
            const currentPath = route.path.split('/').pop();

            if (targetElement && currentPath != 'features') {
                const y = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

                window.scrollTo({
                    top: y,
                    behavior: 'smooth',
                });
            }
        },100);
    });
</script>

<style lang="sass" scoped>
    #tabs::-webkit-scrollbar 
        display: none

    #tabs
        -ms-overflow-style: none
        scrollbar-width: none
</style>