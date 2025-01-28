<template>
    <div v-if="pending">
        <div class="container my-6 py-6 lg:my-12 lg:py-12">
            <div class="rounded-[30px] mt-6 h-[50px] max-w-[200px] bg-[#f2f2f2]"></div>
            <div class="animate-pulse flex flex-col gap-7">
                <div class="rounded-[30px] mt-6 h-[500px] w-full bg-[#f2f2f2]"></div>
                <div class="rounded-[30px] h-[20px] max-w-[300px] bg-[#f2f2f2]"></div>
                <div class="rounded-[30px] h-[50px] max-w-[1000px] bg-[#f2f2f2]"></div>    
            </div>
            <div>
                <div class="rounded-[30px] mt-6 h-[15px] max-w-[1000px] bg-[#f2f2f2]"></div>
                <div class="rounded-[30px] mt-6 h-[15px] max-w-[700px] bg-[#f2f2f2]"></div>
                <div class="rounded-[30px] mt-6 h-[15px] max-w-[800px] bg-[#f2f2f2]"></div>
                <div class="rounded-[30px] mt-6 h-[15px] max-w-[650px] bg-[#f2f2f2]"></div>
                <div class="rounded-[30px] mt-6 h-[15px] max-w-[300px] bg-[#f2f2f2]"></div>
                <div class="rounded-[30px] mt-6 h-[15px] max-w-[1000px] bg-[#f2f2f2]"></div>
                <div class="rounded-[30px] mt-6 h-[15px] max-w-[600px] bg-[#f2f2f2]"></div>
                <div class="rounded-[30px] mt-6 h-[15px] max-w-[900px] bg-[#f2f2f2]"></div>
                <div class="rounded-[30px] mt-6 h-[15px] max-w-[450px] bg-[#f2f2f2]"></div>
            </div>
        </div>
    </div>
    <div v-else>
        <section v-if="post && post.length > 0" id="section-1" class="my-6 py-6 lg:my-12 lg:py-12">
            <div class="container">
                <div class="flex flex-col gap-8 lg:gap-12 px-4 py-8 lg:p-12 bg-[#F7F7F7] rounded-[30px]">
                    <NuxtLinkLocale :to="'/blogs'" class="w-max py-2 px-6 text-base text-white bg-primary hover:bg-black rounded-[30px] select-none font-AeonikMedium transition-all duration-300 ease-in-out">{{ t(`General.Buttons.Back To Blogs`) }}</NuxtLinkLocale>
                    <img :src="post[0]._embedded['wp:featuredmedia']['0'].source_url" class="w-full rounded-xl overflow-hidden" :alt="post[0].title.rendered" width="" height="" />
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
        ogImage: () => post.value[0].acf.inner_image.sizes.large,
        twitterCard: 'summary_large_image',
    })
</script>