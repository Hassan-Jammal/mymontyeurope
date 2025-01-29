<template>
    <div v-if="pending">
        <div class="container my-6 py-6 lg:my-12 lg:py-12">
            <div class="rounded-[30px] mt-6 h-[50px] max-w-[200px] bg-gradient-to-r from-gray-300 to-gray-200 shimmer"></div>
            <div class="animate-pulse flex flex-col gap-7">
                <div class="rounded-[30px] mt-6 h-[500px] w-full bg-gradient-to-r from-gray-300 to-gray-200 shimmer"></div>
                <div class="rounded-[30px] h-[20px] max-w-[300px] bg-gradient-to-r from-gray-300 to-gray-200 shimmer"></div>
                <div class="rounded-[30px] h-[50px] max-w-[1000px] bg-gradient-to-r from-gray-300 to-gray-200 shimmer"></div>    
            </div>
            <div>
                <div class="rounded-[30px] mt-6 h-[15px] max-w-[1000px] bg-gradient-to-r from-gray-300 to-gray-200 shimmer"></div>
                <div class="rounded-[30px] mt-6 h-[15px] max-w-[700px] bg-gradient-to-r from-gray-300 to-gray-200 shimmer"></div>
                <div class="rounded-[30px] mt-6 h-[15px] max-w-[800px] bg-gradient-to-r from-gray-300 to-gray-200 shimmer"></div>
                <div class="rounded-[30px] mt-6 h-[15px] max-w-[650px] bg-gradient-to-r from-gray-300 to-gray-200 shimmer"></div>
                <div class="rounded-[30px] mt-6 h-[15px] max-w-[300px] bg-gradient-to-r from-gray-300 to-gray-200 shimmer"></div>
                <div class="rounded-[30px] mt-6 h-[15px] max-w-[1000px] bg-gradient-to-r from-gray-300 to-gray-200 shimmer"></div>
                <div class="rounded-[30px] mt-6 h-[15px] max-w-[600px] bg-gradient-to-r from-gray-300 to-gray-200 shimmer"></div>
                <div class="rounded-[30px] mt-6 h-[15px] max-w-[900px] bg-gradient-to-r from-gray-300 to-gray-200 shimmer"></div>
                <div class="rounded-[30px] mt-6 h-[15px] max-w-[450px] bg-gradient-to-r from-gray-300 to-gray-200 shimmer"></div>
            </div>
        </div>
    </div>
    <div v-else>
        <section v-if="post && post.length > 0" id="section-1" class="my-6 py-6 lg:my-12 lg:py-12">
            <div class="container">
                <div class="flex flex-col gap-8 lg:gap-12 px-4 py-8 lg:p-12 bg-[#F7F7F7] rounded-[30px]">
                    <NuxtLinkLocale :to="'/news'" class="w-max py-2 px-6 text-base text-white bg-primary hover:bg-black rounded-[30px] select-none font-AeonikMedium transition-all duration-300 ease-in-out">{{ t(`General.Buttons.Back To News`) }}</NuxtLinkLocale>
                    <img :src="post[0]._embedded['wp:featuredmedia']['0'].source_url" class="w-full rounded-xl overflow-hidden" :alt="post[0].title.rendered" :width="post[0]._embedded['wp:featuredmedia'][0].media_details.width" :height="post[0]._embedded['wp:featuredmedia'][0].media_details.height" />
                    <span>{{ new Date(post[0].date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) }}</span>
                    <h1 class="font-AeonikBlack text-3xl md:text-4xl xl:text-5xl 4xl:text-6xl uppercase" v-html="post[0].title.rendered"></h1>
                    <div class="text-xl" v-html="post[0].content.rendered"></div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    import he from 'he';
    
	const { t } = useLocale(); 

    const route = useRoute();
    const slug = route.params.slug;    

    const {data: post, pending, error, refresh } = await useFetch('http://92.205.130.62:5001/wp-json/wp/v2/posts', {
        query: { slug: slug, _embed: '1', acf_format: 'standard' },
    });

    useSeoMeta({
        title: () => he.decode(post.value[0].title.rendered),
        ogTitle: () => he.decode(post.value[0].title.rendered),
        description: () => he.decode(post.value[0].excerpt.rendered).replace(/<[^>]*>/g, ''),
        ogDescription: () => he.decode(post.value[0].excerpt.rendered).replace(/<[^>]*>/g, ''),
        ogImage: () => he.decode(post.value[0]._embedded['wp:featuredmedia']['0'].source_url),
        twitterCard: 'summary_large_image',
    })
</script>

<style lang="sass" scoped>
    .shimmer
        background-size: 200% 100%
        animation: shimmer 1.5s linear infinite

    @keyframes shimmer
        0% 
            background-position: 200% 0

        100% 
            background-position: -200% 0
				
</style>