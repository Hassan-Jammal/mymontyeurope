<template>
    <div>
        <section id="section-1" class="my-6 py-6 lg:my-12 lg:py-12">
            <div class="container">
                <div v-if="feature" class="flex flex-col gap-8 lg:gap-12 px-4 py-8 lg:p-12 bg-[#F7F7F7] rounded-[30px]">
                    <NuxtLinkLocale :to="`/features/${ currentCategorySlug }`" class="w-max py-2 px-6 text-base text-white bg-primary hover:bg-black rounded-[30px] select-none font-AeonikMedium transition-all duration-300 ease-in-out">Back to {{ currentCategory }}</NuxtLinkLocale>
                    <NuxtImg class="w-full" :src="`/images/${ feature.image }.webp`" :alt="feature.title" width="960" height="406" />
                    <h1 class="font-AeonikBlack text-3xl md:text-4xl xl:text-5xl 4xl:text-6xl uppercase" v-html="feature.title"></h1>
                    <div class="description flex flex-col gap-8" v-html="feature.description"></div>
                </div>
                <template v-else>
                    <PreloaderFeatures />
                </template>
            </div>
        </section>
    </div>
</template>

<script setup>
    import { featuresData } from '~/data/features'; // Adjust the path accordingly
    import slugify from '~/utils/slugify'; // Assuming you have a slugify utility

    const { t, currentLocale } = useLocale(); 
    const setError = useError();
    const router = useRouter();
    const route = useRoute();

    const currentSubCategorySlug = ref(route.params.subcategory);
    const currentCategorySlug = ref(route.params.category);
    const currentCategory = ref(null);  // Store the category in a ref to reactively update

    // Use watchEffect to fetch features and compute the current category
    watchEffect(async () => {
        try {
            // Fetch all features data asynchronously
            const allFeatures = await featuresData(t, currentLocale.value);

            if (Array.isArray(allFeatures)) {
                const flatFeatures = allFeatures.map(category => category.featuresItems).flat();

                // Find the feature matching the subcategory slug
                const feature = flatFeatures.find(feature => feature.path === currentSubCategorySlug.value);

                // If a feature is found, compute the category
                currentCategory.value = feature 
                    ? allFeatures.find(category => category.featuresItems.includes(feature))?.category 
                    : null;
            } else {
                throw new Error("Features data is not an array");
            }
        } catch (err) {
            setError({ statusCode: 500, message: err.message || 'An error occurred while fetching the features' });
        }
    });

    const feature = ref(null);

    // Fetch features and handle SEO meta updates in a watchEffect
    watchEffect(async () => {
        try {
            // Fetch all features data asynchronously
            const allFeatures = await featuresData(t, currentLocale.value);

            if (Array.isArray(allFeatures)) {
                const flatFeatures = allFeatures.map(category => category.featuresItems).flat();

                // Find the feature matching the subcategory slug
                feature.value = flatFeatures.find(feature => feature.path === currentSubCategorySlug.value);

                if (feature.value) {
                    useSeoMeta({
                        title: feature.value.title,
                        description: feature.value.excerpt || 'Features',
                        ogTitle: feature.value.title,
                        ogDescription: feature.value.excerpt || 'Features',
                        ogImage: `/images/${feature.value.image}.webp`,
                        twitterTitle: feature.value.title,
                        twitterDescription: feature.value.excerpt || 'Features',
                        twitterCard: 'summary_large_image',
                    });
                } else {
                    setError({ statusCode: 404 });
                }
            } else {
                throw new Error("Features data is not an array");
            }
        } catch (err) {
            setError({ statusCode: 500, message: err.message || 'An error occurred while fetching the feature' });
        }
    });
</script>

<style lang="sass" scoped>
    :deep(.description)
        p
            @apply text-xl

            &.special
                @apply font-AeonikMedium text-primary

        h2, h3, h4, h5, h6
            @apply font-AeonikBold text-xl leading-normal
</style>