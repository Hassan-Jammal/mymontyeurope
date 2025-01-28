<template>
    <div>
        <MainBanner 
            subTitle="Sub Title"
            title="Title"
            description="Description"
            buttonLink="contact-us"
            buttonText="Contact Us"
            image="frequently-asked-questions"
            alt="Image Alt"
            page="Frequently Asked Questions"
        />

        <section id="section-2" class="my-6 py-6 lg:my-12 lg:py-12">
            <div class="container flex flex-col gap-8 lg:gap-14">
                <div class="relative">
                    <input v-model="searchQuery" type="text" class="relative w-full py-4 px-6 bg-[#ECECEE] rounded-full leading-none outline-none" :placeholder="t(`General.Placeholders.Search`)" />
                    <img v-if="!searchQuery" src="/images/icons/search-gray.svg" class="absolute top-1/2 right-6 -translate-y-1/2" :alt="t(`General.Alts.Search Gray`)" width="20" height="20">
                    <img v-else @click="searchQuery = ''" src="/images/icons/close-gray.svg" class="absolute top-1/2 right-6 -translate-y-1/2 cursor-pointer" :alt="t(`General.Alts.Search Gray`)" width="16" height="16">
                </div>
                <!-- <div class="flex flex-col justify-center items-center gap-4 lg:gap-8 lg:w-2/3 mx-auto text-center mt-8">
                    <h2 class="font-AeonikBlack text-3xl md:text-4xl xl:text-5xl 4xl:text-6xl uppercase">{{ faqsItems[selectedCategoryIndex]?.topic || 'No Category Selected' }}</h2>
                </div> -->

                <div class="grid md:grid-cols-3 lg:grid-cols-5 items-start gap-14 md:gap-8 lg:gap-14">
                    <div class="lg:sticky lg:top-[93px] md:col-span-1 lg:col-span-1">
                        <h2 class="font-AeonikBlack text-xl md:text-2xl xl:text-3xl 4xl:text-4xl uppercase">{{ t('Pages.Frequently Asked Questions.Section 2.Topic Heading') }}</h2>
                        <div class="flex flex-col gap-4 lg:gap-6 mt-8">
                            <ScrollButton target="questions-answers" v-for="(item, index) in faqsItems" :key="index" @click="selectCategory(index)" :class="['relative p-2 lg:p-4 rounded-2xl select-none cursor-pointer', selectedCategoryIndex === index ? 'text-white bg-primary' : 'hover:bg-[#D4D4D4]']">
                                <h3 class="text-xl font-AeonikMedium text-left">{{ item.topic }}</h3>
                                <!-- Check if any FAQ question matches the search query -->
                                <div v-if="searchQuery && hasMatchingFaqs(item.faqsItems)" class="absolute top-2 right-2 lg:top-3 lg:right-3 w-1 h-1 lg:w-2 lg:h-2 bg-red-400 rounded-full"></div>
                            </ScrollButton>
                        </div>
                    </div>

                    <div id="questions-answers" class="md:col-span-2 lg:col-span-4" :class="{'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4': selectedFaqIndex === null}"> <!-- sm:grid-cols-2 -->
                        <template v-if="selectedCategoryIndex !== null">
                            <template v-if="showQuestions">
                                <!-- Check if there are any filtered FAQs -->
                                <template v-if="filteredFaqs.length > 0" v-for="(faq, faqIndex) in filteredFaqs" :key="faqIndex">
                                    <ScrollButton target="questions-answers" @click="selectQuestion(faqIndex)" :class="['p-4 lg:p-8 rounded-2xl bg-[#ECECEE] hover:bg-[#D4D4D4] select-none cursor-pointer', { 'bg-[#D4D4D4]': faqIndex === selectedFaqIndex, 'bg-[#ECECEE]': !faqMatch(faq.question) }]">
                                        <h4 class="text-xl" :class="{'text-primary': faqMatch(faq.question)}">{{ faq.question }}</h4>
                                    </ScrollButton>
                                </template>
                                <!-- Fallback if no matching questions -->
                                <div v-else class="text-center text-gray-500">
                                    <p>{{ t('Pages.Frequently Asked Questions.Section 2.Question Not Found') }}</p>
                                </div>
                            </template>
                        </template>

                        <!-- If a question is selected, display its answer -->
                        <div v-if="selectedFaqIndex !== null" class="p-4 lg:p-8 bg-[#ECECEE] rounded-2xl">
                            <h4 class="font-AeonikBold text-2xl">{{ faqsItems[selectedCategoryIndex].faqsItems[selectedFaqIndex].question }}</h4>
                            <p class="mt-4" v-html="faqsItems[selectedCategoryIndex].faqsItems[selectedFaqIndex].answer"></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    import ScrollButton from '~/components/ScrollButton.vue';
    import { faqsData } from '~/data/faqs'; // Adjust the path accordingly
    
	const { t, currentLocale } = useLocale(); 

    useSeoMeta({
        title: t('Pages.Frequently Asked Questions.Seo.Title'),
        description: '',

        ogTitle: t('Pages.Frequently Asked Questions.Seo.Og Title'),
        ogDescription: t('Pages.Frequently Asked Questions.Seo.Og Description'),
        ogImage: '',

        twitterTitle: t('Pages.Frequently Asked Questions.Seo.Twitter Title'),
        twitterDescription: t('Pages.Frequently Asked Questions.Seo.Twitter Description'),
        twitterCard: 'summary_large_image',
    })

	// const faqsItems = useState('faqsItems', () => faqsData(t));

    const faqsItems = ref([]);

    watchEffect(async () => {
        faqsItems.value = await faqsData(t, currentLocale.value);
    });

    const selectedCategoryIndex = ref(0);
    const selectedFaqIndex = ref(null);
    const showQuestions = ref(true);
    const searchQuery = ref('');

    const selectCategory = (index) => {
        selectedCategoryIndex.value = index;
        selectedFaqIndex.value = null; 
        showQuestions.value = true; 
    };

    // Select a specific FAQ question
    const selectQuestion = (faqIndex) => {
        const filteredFaqIndex = filteredFaqs.value[faqIndex]; // Get the FAQ object from filteredFaqs
        selectedFaqIndex.value = faqsItems.value[selectedCategoryIndex.value].faqsItems.indexOf(filteredFaqIndex); // Find its original index in the full FAQ list
        showQuestions.value = false; // Hide questions and show the selected answer
    };

    // Method to check if any FAQ in the category matches the search query
    const hasMatchingFaqs = (faqs) => {
        return faqs.some((faq) => faq.question.toLowerCase().includes(searchQuery.value.toLowerCase()));
    };

    const filteredFaqs = computed(() => {
        if (!searchQuery.value) {
            return faqsItems.value[selectedCategoryIndex.value]?.faqsItems || [];
        }
        return faqsItems.value[selectedCategoryIndex.value]?.faqsItems.filter(faq =>
            faq.question.toLowerCase().includes(searchQuery.value.toLowerCase())
        ) || [];
    });

    function faqMatch(question) {
        if (searchQuery.value.trim() === "") {
            return false;
        }
        return question.toLowerCase().includes(searchQuery.value.toLowerCase());
    }
</script>

<style lang="sass" scoped>
    :deep(ul)
        list-style-type: disc
        list-style-position: outside
        padding-left: 20px
</style>