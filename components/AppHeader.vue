<template lang="">
    <header id="header" class="fixed top-0 left-0 w-full z-50 min-h-[93px] transition-transform duration-300 ease-in-out bg-white" :class="{ '-translate-y-full': isScrolledDown, 'translate-y-0': isNavOpen }">
        <div class="w-full py-6 border-b border-[#D4D4D422] z-[3]">
            <div class="container flex justify-between items-center">
                <div class="flex justify-between items-center gap-4">
                    <div class="cursor-pointer relative group rounded-full"><!-- hover:bg-[#ECECEE] -->
                        <div class="flex justify-between items-center gap-2 p-2"><!-- p-2 -->
                            <!-- Logo Placeholder -->
                            <NuxtLinkLocale :to="'/'" class="link">
                                <NuxtImg src="/images/logo.svg" :alt="t(`General.Alts.Logo`)" width="133" height="28" />
                            </NuxtLinkLocale>

                            <!-- Location Dropdown Icon -->
                            <span id="location-toggle" class="text-xl text-black cursor-pointer">
                                <NuxtImg src="/images/icons/chevron-down-black.svg" :alt="t(`General.Alts.Chevron Down Black`)" width="14" height="8" />
                            </span>

                            <!-- Invisible hover buffer (1.5padding, 1px border bottom) -->
                            <div class="absolute top-full left-0 h-[calc(1.5rem+1px)] w-full group-hover:block hidden"></div>

                            <!-- Location Dropdown (1.5padding, 1px border bottom) -->
                            <ul class="absolute top-[calc(100%+1.5rem+1px)] left-0 z-10 w-full border-2 border-t border-[#D4D4D422] rounded-b text-base bg-white overflow-hidden invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                <template v-for="(locale, index) in filteredRegions" :key="locale.index">
                                    <li v-if="locale.native" @click.prevent.stop="changeLocale(locale.code)" :class="['flex items-center gap-2 w-full py-3 px-4 transition-all duration-300 ease-in-out font-AeonikRegular text-black cursor-pointer hover:text-primary border-b-2 border-[#D4D4D422]']">
                                        <NuxtImg v-if="locale.native" :src="`/images/flags/${ locale.icon.toUpperCase() }.svg`" :alt="t(`General.Regions.${locale.region}`)" width="24" height="24" />
                                        <span class="text-base font-AeonikRegular">{{ t(`General.Regions.${locale.region}`) }}</span>
                                    </li>
                                </template>    
                                <a href="https://mymonty.com.lb">    
                                    <li class="flex items-center gap-2 w-full py-3 px-4 transition-all duration-300 ease-in-out font-AeonikRegular text-black cursor-pointer hover:text-primary">
                                        <NuxtImg src="/images/flags/LB.svg" :alt="t(`General.Regions.Lebanon`)" width="24" height="24" />
                                        <span class="text-base font-AeonikRegular">{{ t(`General.Regions.Lebanon`) }}</span>
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Navigation Links -->
                <nav class="hidden lg:block">
                    <!--  44px to match the height of the other 2 dropdown -->
                    <ul class="flex items-center gap-1 text-black h-[44px]">
                        <li v-for="(item, index) in menuItems" :key="index" class="relative flex justify-center items-center text-black cursor-pointer group h-full hover:bg-[#ECECEE] rounded-full transition-all duration-300 ease-in-out">
                            <div class="flex justify-between items-center gap-2">
                                <!-- Link if clickable -->
                                <template v-if="item.clickable">
                                    <NuxtLinkLocale :to="`/${item.path}`" class="link py-2 px-6 rounded-full transition-all duration-300 ease-in-out text-base font-AeonikMedium text-black hover:text-primary cursor-pointer select-none">
                                        {{ t(`General.Links.${item.title}`) }}
                                    </NuxtLinkLocale>
                                </template>
                                
                                <!-- title if not clickable -->
                                <template v-else>
                                    <span class="py-2 px-8 rounded-full transition-all duration-300 ease-in-out text-base font-AeonikMedium text-black cursor-pointer select-none">
                                        {{ t(`General.Links.${item.title}`) }}
                                    </span>
                                </template>

                                <!-- Dropdown if children exist -->
                                <template v-if="item.links && item.links.length">
                                    <!-- Invisible hover buffer (1.5 padding, 1px border bottom) -->
                                    <div class="pointer absolute top-full left-0 h-[calc(1.5rem+1px)] w-full group-hover:block hidden before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:bg-transparent before:w-5 before:h-5"></div>

                                    <!-- Children Routes Dropdown -->
                                    <div class="nav fixed top-[93px] left-0 z-10 w-full py-16 border-2 border-t border-[#D4D4D422] text-base bg-white overflow-hidden invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                        <div class="container flex text-center justify-center items-center  gap-y-4 gap-x-4 ">
                                            <div v-for="(subItem, subItemIndex) in item.links" :key="subItemIndex" class="flex flex-col items-center  w-max text-black cursor-pointer hover:text-primary transition-all duration-300 ease-in-out">
                                                <NuxtLinkLocale :to="`/${subItem.path}`" class="link flex justify-center items-center gap-2 group/item">
                                                    <span class="text-base font-AeonikRegular">{{ t(`General.Links.${subItem.title}`) }}</span>
                                                    <NuxtImg class="-translate-x-5 -rotate-90 invisible opacity-0 group-hover/item:visible group-hover/item:translate-x-0 group-hover/item:opacity-100 transition-all duration-300 ease-in-out" src="/images/icons/chevron-right-primary.svg" :alt="t(`General.Alts.Chevron Right Primary`)" width="8" height="8" />
                                                </NuxtLinkLocale>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </div>
                        </li>
                    </ul>
                </nav>

                <div class="hidden lg:flex justify-between items-center gap-6">
                    <div :class="['cursor-pointer relative group rounded-full', { 'hover:bg-[#ECECEE]': filteredLocales.length > 0 }]">
                        <div class="flex justify-between items-center gap-2 p-2">
                            <!-- <NuxtImg src="/images/flags/uk.svg" alt="UK" width="28" height="28" /> -->
                            <NuxtImg :src="`/images/flags/${ currentLocaleDetails.icon.toUpperCase() }.svg`" :alt="t(`General.Regions.${currentLocaleDetails.region}`)" width="28" height="28" />
                            <span class="text-xs font-AeonikMedium">{{ currentLocale.split('-')[0].toUpperCase() }}</span>
                            <!-- <span>{{currentLocale.split('-')[0]}}</span> -->
                            <NuxtImg v-if="filteredLocales.length > 0" src="/images/icons/chevron-down-gray.svg" :alt="t(`General.Alts.Chevron Down Black`)" width="10" height="8" />
                            <!-- Invisible hover buffer (1.5padding, 1px border bottom) -->
                            <div class="absolute top-full left-0 h-[calc(1.5rem+1px)] w-full group-hover:block hidden"></div>
                            
                            <!-- Languages Dropdown (1.5padding, 1px border bottom) -->
                            <div class="absolute top-[calc(100%+1.5rem+1px)] left-0 z-10 w-max border-2 border-t border-[#D4D4D422] rounded-b text-base bg-white overflow-hidden invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                <ul class="w-max">
                                    <template v-if="filteredLocales.length > 0">
                                        <template v-for="(locale, index) in filteredLocales" :key="locale.index">
                                            <li @click.prevent.stop="changeLocale(locale.code)" :class="['flex items-center gap-2 py-3 px-4 transition-all duration-300 ease-in-out hover:text-primary', { 'border-b-2 border-[#D4D4D422]': index !== filteredLocales.length - 1 }]">
                                                <!-- <NuxtImg :src="`/images/flags/${ locale.code.split('-')[0].toUpperCase() }.svg`" :alt="{{ locale.language }}" width="24" height="24" /> -->
                                                <span class="text-base font-AeonikRegular">{{ t(`General.Languages.${locale.language}`) }}</span>
                                            </li>
                                        </template>
                                    </template>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <ScrollButton target="download" class="py-2 px-4 text-base text-white bg-primary hover:bg-black rounded-[30px] select-none font-AeonikMedium transition-all duration-300 ease-in-out">{{ t(`General.Buttons.Download App`) }}</ScrollButton>
                </div>

                <!-- Mobile Menu Toggle Icon -->
                <div id="nav-toggle" class="block lg:hidden rounded cursor-pointer" :class="{ toggled: isNavOpen }" dir="rtl" @click="toggleNav">
                    <div class="line1 w-[20px] h-[3px] bg-black rounded-2xl transition-all duration-300 ease-in-out"></div>
                    <div class="line2 my-1 w-3/4 h-[3px] bg-black rounded-2xl transition-all duration-300 ease-in-out"></div>
                    <div class="line3 w-[20px] h-[3px] bg-black rounded-2xl transition-all duration-300 ease-in-out"></div>
                </div>
            </div>
        </div>

        <!-- Mobile Navigation -->
        <nav id="mobile-nav" :class="{ '-translate-x-full': !isNavOpen }" class="block lg:hidden fixed top-[93px] left-0 h-screen w-full bg-white text-xl z-[2] transition-all duration-300 ease-in-out overflow-y-scroll">
            <div class="container">
                <ul class="flex flex-col gap-6">
                    <li v-for="(item, itemIndex) in menuItems" :key="itemIndex" :class="{ 'active': activeIndices.includes(itemIndex) }" @click="toggleActive(itemIndex)" class="transition-all duration-300 ease-in-out text-base text-black cursor-pointer select-none">
                        <div class="children-toggle flex justify-between items-center">
                            <!-- Render as link if clickable -->
                            <template v-if="item.clickable">
                                <NuxtLinkLocale :to="`/${item.path}`" class="link font-AeonikMedium">{{ t(`General.Links.${item.title}`) }}</NuxtLinkLocale>
                                
                                <!-- Dropdown icon if children exist -->
                                <NuxtImg v-if="item.links && item.links.length" class="transition-all duration-300 ease-in-out" src="/images/icons/chevron-down-black.svg" :alt="t(`General.Alts.Chevron Down Black`)" width="10" height="6" />
                            </template>

                            <!-- Render as text if not clickable -->
                            <template v-else>
                                <span class="font-AeonikMedium">{{ t(`General.Links.${item.title}`) }}</span>
                                <!-- Dropdown icon if children exist -->
                                <NuxtImg v-if="item.links && item.links.length" class="transition-all duration-300 ease-in-out" src="/images/icons/chevron-down-black.svg" :alt="t(`General.Alts.Chevron Down Black`)" width="10" height="6" />
                            </template>
                        </div>

                        <!-- Children menu if children exist -->
                        <ul v-if="item.links && item.links.length" class="children-menu max-h-0 flex flex-col gap-4 px-4 bg-[#ECECEE] rounded-2xl overflow-hidden transition-all duration-300 ease-in-out">
                            <li
                                v-for="(subItem, subItemIndex) in item.links"
                                :key="subItemIndex"
                                :class="{
                                    'mt-4': subItemIndex === 0,
                                    'mb-4': subItemIndex === item.links.length - 1
                                }"
                            >
                                <NuxtLinkLocale :to="`/${subItem.path}`" class="link flex items-center gap-2 cursor-pointer font-AeonikRegular text-sm">{{ t(`General.Links.${subItem.title}`) }}</NuxtLinkLocale>
                            </li>
                        </ul>
                    </li>
                </ul>

                <!-- Languages Dropdown (1.5padding, 1px border bottom)  -->
                <div class="absolute bottom-[calc(93px)] flex flex-col gap-4 w-full left-1/2 -translate-x-1/2 z-50 py-4 text-sm bg-white text-center group">
                    <div class="relative w-full bg-white">
                        <div class="flex justify-center items-center gap-2 w-max py-1 px-2 rounded-full mx-auto bg-[#ECECEE]">
                            <NuxtImg :src="`/images/flags/${ currentLocaleDetails.icon.toUpperCase() }.svg`" :alt="t(`General.Regions.${currentLocaleDetails.region}`)" width="16" height="16" />
                            <span class="text-xs font-AeonikMedium">{{ currentLocale.split('-')[0].toUpperCase() }}</span>

                            <!-- <NuxtImg src="/images/flags/uk.svg" alt="UK" width="16" height="16" /> -->
                            <!-- <span class="text-sm font-AeonikRegular">English</span> -->
                            <NuxtImg v-if="filteredLocales.length > 0" class="rotate-0 group-hover:rotate-180 transition-all duration-300 ease-in-out" src="/images/icons/chevron-up-gray.svg" :alt="t(`General.Alts.Chevron Up Gray`)" width="8" height="6" />
                        </div>
                    </div>

                    <template v-if="filteredLocales.length > 0">
                        <ul class="languages-mobile absolute bottom-full left-1/2 -translate-x-1/2 z-50 grid grid-cols-2 gap-4 w-1/2 mx-auto py-4 px-2 rounded text-white overflow-hidden invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            <template v-for="(locale, index) in filteredLocales" :key="locale.index">
                                <li @click.prevent.stop="changeLocale(locale.code)" class="flex gap-2 justify-start w-max transition-all duration-300 ease-in-out">
                                    <!-- <NuxtImg :src="`/images/flags/${ locale.icon.toUpperCase() }.svg`" alt="{{ locale.language }}" width="24" height="24" /> -->
                                    <span class="text-sm font-AeonikRegular">{{ t(`General.Languages.${locale.language}`) }}</span>
                                </li>
                            </template>
                        </ul>
                    </template>
                        
                    <ScrollButton target="download" @click="closeNav" class="py-2 px-4 text-base text-white bg-primary mx-auto rounded-[30px] select-none font-AeonikMedium transition-all duration-300 ease-in-out">{{ t(`General.Buttons.Download App`) }}</ScrollButton>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
    const { currentLocale, currentRegion, currentLanguage, currentLocaleDetails, filteredLocales, filteredRegions, setLocale, t } = useLocale();
    const i18nCookie = useCookie('i18n_redirected');

    useHead(() => ({
        meta: [
            { name: 'og:locale', content: currentLocale.value.replace('-', '_') }
        ],
        htmlAttrs: {
            lang: currentLocale.value,
        },
    }))

    function changeLocale(localeCode) {
        setLocale(localeCode); // Change the locale using i18n
        i18nCookie.value = localeCode;
    }

    const isOnTop = ref(true);
    const lastScrollPosition = ref(0);
    const isScrolledDown = ref(false);
    const isScrolledUp = ref(false);
    const scrollThreshold = 200;
    const isNavOpen = ref(false);
    const activeIndices = ref([]); // Track the active indices

    const menuItems = ref([
        {
            title: "Company",
            clickable: false,
            links: [
                { title: "Why MyMonty", path: "why-mymonty" },
                { title: "Who We Are", path: "who-we-are" },
                { title: "Careers", path: "careers" },
                { title: "Code of Conduct", path: "code-of-conduct" },
                { title: "News", path: "news" },
                { title: "Blogs", path: "blogs" },
                { title: "Board of Directors", path: "board-of-directors" },
                { title: "FAQs", path: "faqs" }
            ]
        },
        {
            title: "Features",
            path: "features",
            clickable: true,
            links: [
                { title: "Accounts", path: "features/accounts" },
                { title: "Cards", path: "features/cards" },
                { title: "Transfers", path: "features/transfers" },
                { title: "Payments", path: "features/payments" }
            ]
        },
        {
            title: "Plans",
            clickable: true,
            path: "plans"
        },
        {
            title: "Contact Us",
            clickable: true,
            path: "contact-us"
        }
    ]);

    const toggleNav = () => {
        isNavOpen.value = !isNavOpen.value;
        document.body.classList.toggle("overflow-y-hidden", isNavOpen.value);
    };

    const closeNav = () => {
        isNavOpen.value = false
        document.body.classList.toggle("overflow-y-hidden", isNavOpen.value);
    };

    const checkScrollPosition = () => {
        // Check if the user is at the top of the page on mount
        isOnTop.value = window.scrollY === 0;
    };
    
    const handleScroll = () => {
        const currentScrollPosition = window.scrollY;

        // Determine the scroll direction
        const scrollDirection = currentScrollPosition > lastScrollPosition.value ? 'down' : 'up';

        // Set the value for isScrolledUp if the user is scrolling up
        isScrolledUp.value = scrollDirection === 'up';

        // Check if the user has scrolled down more than the threshold
        isScrolledDown.value = scrollDirection === 'down' && currentScrollPosition > scrollThreshold;

        // Check if the user is at the top of the page
        isOnTop.value = currentScrollPosition === 0;

        // Update the last scroll position
        lastScrollPosition.value = currentScrollPosition;
    };

    // Function to toggle active index
    const toggleActive = (index) => {
        const indexInArray = activeIndices.value.indexOf(index);
        if (indexInArray === -1) {
            activeIndices.value.push(index); // Add index if not present
        } else {
            activeIndices.value.splice(indexInArray, 1); // Remove index if already present
        }
    };

    onMounted(() => {
        document.body.addEventListener("click", (e) => {
            if (e.target.classList.contains('link')) {
                closeNav()
                document.body.classList.toggle("overflow-y-hidden", isNavOpen.value);
            }
        });

        window.addEventListener('scroll', handleScroll);
        checkScrollPosition();
    });
</script>