<template>
    <div>
        <MainBanner 
            subTitle="Sub Title"
            title="Title"
            description="Description"
            buttonLink=""
            buttonText="Learn More"
            image="leadership-team"
            alt="Image Alt"
            page="Board Of Directors"
        />

        <section id="section-2" class="my-6 py-6 lg:my-12 lg:py-12">
            <div class="container">
                <!-- <div class="flex flex-col justify-center items-center gap-12 lg:w-2/3 mx-auto text-center">
                    <h2 class="font-AeonikBlack text-3xl md:text-4xl xl:text-5xl 4xl:text-6xl uppercase">{{ t(`Pages.Board Of Directors.Section 2.Title`) }}</h2>
                    <div id="tabs" class="flex justify-center gap-4 w-max">
                        <ScrollButton
                            v-for="(team, index) in executives"
                            :key="index"
                            @click="show(index)"
                            :class="activeTab === index ? 'text-white bg-primary border-primary' : 'text-black bg-transparent border-black'"
                            target="tabs"
                            class="w-max py-2 px-6 text-base border rounded-[30px] select-none font-AeonikMedium transition-all duration-300 ease-in-out"
                        >
                            {{ team.title }}
                        </ScrollButton>
                    </div>
                </div> -->

                <div class="grid lg:grid-cols-2 xl:grid-cols-3 justify-start gap-8 mt-10">
                    <template v-for="(team, teamIndex) in executives" :key="teamIndex">
                        <div v-for="(member, memberIndex) in team.members" :key="`team-${teamIndex}-member-${memberIndex}`" @click="setActive(memberIndex, teamIndex)" :class="{ 'absolute invisible opacity-0': activeTab !== teamIndex }" class="rounded-[30px] overflow-hidden">
                            <div :class="{ active: activeIndex[teamIndex] === memberIndex }" class="inner relative w-full h-full">
                                <div class="front relative transition-transform duration-300 ease-in-out cursor-pointer overflow-hidden z-10">
                                    <NuxtImg loading="lazy" class="w-full" :src="`/images/${member.image}.webp`" :alt="member.name" width="680" height="668" />
                                    <div class="flex flex-col justify-center max-lg:items-center gap-2 mx-auto text-center bg-[#ECECEE] p-6">
                                        <h2 class="font-AeonikBlack text-lg md:text-xl xl:text-2xl 4xl:text-3xl uppercase">{{ member.name }}</h2>
                                        <h3 class="text-xl">{{ member.position }}</h3>
                                    </div>
                                    <div class="absolute top-6 right-6">
                                        <NuxtImg loading="lazy" src="/images/icons/chevron-right-box-gray.svg" :alt="t(`General.Alts.Chevron Right Box Gray`)" width="30" height="30" />
                                    </div>
                                </div>
                                <div class="back absolute top-0 w-full h-full py-20 px-8 text-white bg-black transition-transform duration-300 ease-in-out cursor-pointer overflow-hidden">
                                    <p class="text-base" v-html="member.bio"></p>
                                    <div class="absolute top-6 right-6">
                                        <NuxtImg loading="lazy" src="/images/icons/chevron-left-box-black.svg" :alt="t(`General.Alts.Chevron Left Box Black`)" width="30" height="30" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
	const { t } = useLocale(); 

    useSeoMeta({
        title: t(`Pages.Board Of Directors.Seo.Title`),
        description: '',

        ogTitle: t(`Pages.Board Of Directors.Seo.Og Title`),
        ogDescription: t(`Pages.Board Of Directors.Seo.Og Description`),
        ogImage: '',

        twitterTitle: t(`Pages.Board Of Directors.Seo.Twitter Title`),
        twitterDescription: t(`Pages.Board Of Directors.Seo.Twitter Description`),
        twitterCard: 'summary_large_image',
    })

    const executives = ref([
        {
            title: "Board of Directors",
            members: [
                {
                    name: t(`Pages.Board Of Directors.Section 2.Cards[0].Name`),
                    position: t(`Pages.Board Of Directors.Section 2.Cards[0].Position`),
                    bio: t(`Pages.Board Of Directors.Section 2.Cards[0].Bio`),
                    image: "mountasser-hachem"
                },
                {
                    name: t(`Pages.Board Of Directors.Section 2.Cards[1].Name`),
                    position: t(`Pages.Board Of Directors.Section 2.Cards[1].Position`),
                    bio: t(`Pages.Board Of Directors.Section 2.Cards[1].Bio`),
                    image: "randa-nabulsi"
                },
                {
                    name: t(`Pages.Board Of Directors.Section 2.Cards[2].Name`),
                    position: t(`Pages.Board Of Directors.Section 2.Cards[2].Position`),
                    bio: t(`Pages.Board Of Directors.Section 2.Cards[2].Bio`),
                    image: "susanne-hannestad"
                },
                {
                    name: t(`Pages.Board Of Directors.Section 2.Cards[3].Name`),
                    position: t(`Pages.Board Of Directors.Section 2.Cards[3].Position`),
                    bio: t(`Pages.Board Of Directors.Section 2.Cards[3].Bio`),
                    image: "arvinder-gujral"
                },
                {
                    name: t(`Pages.Board Of Directors.Section 2.Cards[4].Name`),
                    position: t(`Pages.Board Of Directors.Section 2.Cards[4].Position`),
                    bio: t(`Pages.Board Of Directors.Section 2.Cards[4].Bio`),
                    image: "sarah-alateeqi"
                },
                // {
                //     name: t(`Pages.Board Of Directors.Section 2.Cards[5].Name`),
                //     position: t(`Pages.Board Of Directors.Section 2.Cards[5].Position`),
                //     bio: t(`Pages.Board Of Directors.Section 2.Cards[5].Bio`),
                //     image: "mike-quintanilla"
                // }
            ]
        },
        // {
        //     title: "Leadership Team",
        //     members: [
        //         {
        //             name: "Mountasser Hachem",
        //             position: "Chairman & Founder",
        //             bio: "With over two decades of leadership in managing a group of holdings, Mr. Hachem is driven by a relentless pursuit to positively impact lives, even through risk-taking and exploring new sectors. Ambitious and bold, he founded Monty Group and its subsidiaries, delving into the telecommunications industry, where he has built a thriving career. His visionary approach has transformed the company into an international powerhouse with multiple branches worldwide.",
        //             image: "mountasser-hachem"
        //         },
        //         {
        //             name: "Susanne Hannestad",
        //             position: "Board Member",
        //             bio: "With over 30 years of experience in Banking, Insurance, and Financial sectors, Mrs. Hannestad boasts a track record of successfully scaling and launching companies in global markets. Her extensive expertise provides a unique edge in fintech growth and development. Currently serving as a board member of Monty Mobile and MyMonty within Monty Group, she contributes valuable insights to the strategic development of both companies.",
        //             image: "susanne-hannestad"
        //         },
        //         {
        //             name: "Arvinder Gujral",
        //             position: "Board Member",
        //             bio: "Armed with an MBA in Business Management, Mr. Gujral was the first Twitter employee in India to rise to the role of Managing Director for Southeast Asia and Senior Business Development for APAC. With over 22 years of experience spanning Technology, Telecom, and Advertising, he has collaborated with major international players. Currently serving as a board member of MyMonty, the latest Fintech venture under Monty Group, he plays a pivotal role in expanding its digital footprint and market reach.",
        //             image: "arvinder-gujral"
        //         },
        //         {
        //             name: "Randa Naboulsi",
        //             position: "Group Chief Financial Officer",
        //             bio: "Randa Naboulsi, an ambitious and results-oriented Chief Financial Officer, earned her BBA from the University of Balamand in Lebanon in 1995, followed by an MBA from the Lebanese American University of Beirut in 2008. With extensive hands-on experience in Corporate Finance, Treasury, Budgeting & Forecasting, she excels in cultivating strong investor relationships.",
        //             image: "randa-nabulsi"
        //         },
        //         {
        //             name: "Mike Quintanilla",
        //             position: "Board Member",
        //             bio: "Mr. Quintanilla currently serves as the Chief Innovation Officer at GenuBank in Reno, Nevada, USA, leveraging extensive expertise in cryptocurrency and data analytics. With over 15 years in Finance and Fintech, he is recognized as an expert in Fintech strategy and blockchain implementation, having developed and supervised systems across various companies. Recently joining MyMonty as a board member within Monty Group, Mr. Quintanilla brings valuable insights to drive business growth by applying his years of accumulated expertise.",
        //             image: "mike-quintanilla"
        //         },
        //         {
        //             name: "Sarah Alateeqi",
        //             position: "Board Member",
        //             bio: "Mrs. Alateeqi serves as the Vice Chairman and Acting CEO of AlMal Investment Company in Kuwait, bringing extensive expertise as a business leader. Passionate about finance and investments, she has a diverse background that spans investment banking, private equity, and innovation consulting. Holding an MBA from the University of Chicago Booth, she has also worked in Kuwait and London, UK. As a board member of MyMonty, she plays a crucial role in advancing the company's growth strategy and financial innovation.",
        //             image: "sarah-alateeqi"
        //         }
        //     ]
        // }
    ]);

    const activeIndex = ref({});
    const activeTab = ref(0);

    const setActive = (index, catIndex) => {
        // Toggle the active state: if the item is already active, remove the active state
        activeIndex.value[catIndex] = activeIndex.value[catIndex] === index ? null : index;
    };

    const show = (index) => {
        activeTab.value = index;
    };
</script>

<style lang="sass" scoped>
	
</style>