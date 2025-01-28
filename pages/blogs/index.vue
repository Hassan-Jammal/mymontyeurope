<template>
    <div>
        <MainBanner 
            subTitle="Sub Title"
            title="Title"
            description="Description"
            buttonLink=""
            buttonText="Learn More"
            image="what-is-happening-at-mymonty"
            alt="Image Alt"
            page="Blogs"
        />

        <section id="section-2" class="my-6 py-6 lg:my-12 lg:py-12">
            <div class="container">
                <template v-if="pending">
                    <div class="flex flex-col gap-8">
                        <div v-for="number in perPage/2" class="grid grid-cols-1 lg:grid-cols-2 justify-start items-center bg-[#F7F7F7] rounded-[30px]">             
                            <PreloaderNews />
                        </div>
                    </div>
                </template>
                <div v-else>
                    <div class="flex flex-col gap-8">
                        <!-- <pre>{{ posts }}</pre> -->
                        <div v-for="(post, index) in posts" :key="index" class="grid lg:grid-cols-2 justify-start items-center bg-[#F7F7F7] rounded-[30px]">
                            <div class="flex flex-col justify-start items-start gap-4 lg:gap-8 py-6 px-8 lg:p-12 xl:p-24">
                                <span class="text-2xl font-AeonikMedium">{{ new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) }}</span>
                                <NuxtLinkLocale :to="`/blogs/${post.slug}`">
                                    <h2 class="font-AeonikBlack text-xl md:text-2xl xl:text-3xl 4xl:text-4xl uppercase" v-html="post.title.rendered"></h2>
                                </NuxtLinkLocale>
                                <p class="text-left text-xl" v-html="post.excerpt.rendered"></p>
                            </div>
                            <div class="w-full h-full rounded-b-[30px] lg:rounded-r-[30px] lg:rounded-l-none overflow-hidden">
                                <img class="w-full h-full object-cover" :src="post._embedded['wp:featuredmedia']['0'].source_url" :alt="post.title.rendered" :width="post._embedded['wp:featuredmedia'][0].media_details.width" :height="post._embedded['wp:featuredmedia'][0].media_details.height">
                            </div>
                        </div>
                    </div>

                    <div class="text-center mx-auto mt-12">
                        <button v-if="currentPage < totalPages" @click="loadMorePosts" class="w-max py-2 px-6 text-base text-white bg-black hover:bg-primary rounded-[30px] select-none font-AeonikMedium transition-all duration-300 ease-in-out">{{ t(`General.Buttons.View More`) }}</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    // import { usePosts } from './composables/loadPosts.js'; // Adjust the path
    // const { posts, loadMorePosts, totalPages, currentPage } = usePosts();
	const { t } = useLocale(); 
	
    useSeoMeta({
        title: t(`Pages.Blogs.Seo.Title`),
        description: '',

        ogTitle: t(`Pages.Blogs.Seo.Og Title`),
        ogDescription: t(`Pages.Blogs.Seo.Og Description`),
        ogImage: '',

        twitterTitle: t(`Pages.Blogs.Seo.Twitter Title`),
        twitterDescription: t(`Pages.Blogs.Seo.Twitter Description`),
        twitterCard: 'summary_large_image',
    })

    const totalPages = ref(0);
    const currentPage = ref(1);
    const perPage = ref(6);
    const postsSection = ref(null);

    const { data: posts, pending, error, refresh } = await useFetch('http://92.205.130.62:5001/wp-json/wp/v2/posts', {
        query: { categories: 3, per_page: perPage.value, page: currentPage.value, _embed: '1' },
        lazy: true,
        server: false,
        onResponse({ request, response, options }) {
            totalPages.value = parseInt(response.headers.get('X-WP-TotalPages'));
        }
    });

    const loadMorePosts = async () => {
        if (currentPage.value < totalPages.value) {
            currentPage.value++;
            // Use $fetch instead of useFetch to avoid the warning
            const newPosts = await $fetch('http://92.205.130.62:5001/wp-json/wp/v2/posts', {
                query: { categories: 3, per_page: perPage.value, page: currentPage.value, _embed: '1' }
            });
            
            // Merge new posts with existing posts
            posts.value = [...posts.value, ...newPosts];
        }
    };
</script>

<style lang="" scoped>
	
</style>