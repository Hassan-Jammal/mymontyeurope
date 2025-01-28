<template lang="">
    <footer class="py-6 sm:py-12 bg-black">
        <div class="container">
            <div class="grid lg:grid-cols-3 lg:justify-between gap-16 sm:gap-20 w-full py-6 sm:py-12">
                <div class="flex flex-col justify-start items-start gap-6">
                    <h3 class="font-AeonikBlack text-white text-xl uppercase">{{ t(`Footer.Newsletter.Title`) }}</h3>
                    <p class="text-[#D4D4D4] text-base">{{ t(`Footer.Newsletter.Description`) }}</p>
                    <div class="flex flex-col gap-1 w-full">
                        <input v-model="form.newsletter_email" type="text" class="w-full py-4 px-6 bg-white rounded-full leading-none outline-none" :placeholder="t(`General.Placeholders.Email`)" />
                        <div v-if="errors.newsletter_email" class="text-xs text-red-500">{{ errors.newsletter_email }}</div>
                        <div v-if="submissionMessage" class="text-xs text-gray-500">{{ submissionMessage }}</div>
                    </div>
                    <button @click.prevent="handleSubmit" class="py-2 px-4 text-base text-white hover:text-black bg-primary hover:bg-white rounded-[30px] select-none font-AeonikMedium transition-all duration-300 ease-in-out">{{ t(`General.Buttons.Subscribe`) }}</button>
                    <p class="text-[#727272] text-sm">{{ t(`Footer.Newsletter.Acknowlegment1`) }} <NuxtLinkLocale :to="`/terms-and-conditions`">{{ t(`General.Links.Terms & Conditions`) }}</NuxtLinkLocale>; {{ t(`Footer.Newsletter.Acknowlegment2`) }} <NuxtLinkLocale :to="`/terms-and-conditions`">{{ t(`General.Links.Privacy Policy`) }}</NuxtLinkLocale>.</p>
                </div>
                <ul class="lg:col-span-2 grid sm:grid-cols-4 sm:justify-between gap-6 sm:gap-3">
                    <li v-for="(item, index) in menuItems" :key="index" :class="{ 'active': activeIndices.includes(index) }" @click="toggleActive(index)" class="flex flex-col sm:gap-10 group">
                        <template v-if="item.clickable">
                            <div class="children-toggle max-sm:flex max-sm:justify-between max-sm:gap-4 font-AeonikBold text-white hover:text-primary text-xl transition-all duration-300 ease-in-out">
                                <NuxtLinkLocale :to="`/${item.path}`">{{ t(`General.Links.${item.title}`) }}</NuxtLinkLocale>
                                <img v-if="item.links && item.links.length > 0" class="block sm:hidden transition-all duration-300 ease-in-out" src="/images/icons/chevron-down-white.svg" :alt="t(`General.Alts.Chevron Down White`)" width="14" height="8" />
                            </div>
                        </template>

                        <!-- Render as text if not clickable -->
                        <template v-else>
                            <div class="children-toggle max-sm:flex max-sm:justify-between max-sm:gap-4 font-AeonikBold text-white text-xl">
                                <span>{{ t(`General.Links.${item.title}`) }}</span>
                                <img v-if="item.links && item.links.length > 0" class="block sm:hidden transition-all duration-300 ease-in-out" src="/images/icons/chevron-down-white.svg" :alt="t(`General.Alts.Chevron Down White`)" width="14" height="8" />
                            </div>
                        </template>

                        <ul v-if="item.links && item.links.length > 0" class="children-menu flex flex-col gap-2 max-sm:max-h-0 max-sm:ml-4 text-base text-[#D4D4D4] overflow-hidden transition-all duration-300 ease-in-out">
                            <li v-for="(subItem, linkIndex) in item.links" :key="linkIndex">
                                <NuxtLinkLocale :to="`/${subItem.path}`" class="hover:text-primary transition-all duration-300 ease-in-out">{{ t(`General.Links.${subItem.title}`) }}</NuxtLinkLocale>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <hr class="border-[#72727222]" />

            <div class="grid grid-cols-1 md:grid-cols-2 justify-between gap-8 md:gap-4 py-6 md:py-12 max-md:text-center">
                <div class="flex flex-col gap-2">
                    <div class="flex max-md:justify-center items-center gap-8">
                        <a href="https://www.facebook.com/mymonty" class="cursor-pointer" target="_blank" rel="noopener noreferrer" aria-title="Facebook">
                            <img src="/images/icons/facebook.svg" alt="Facebook" width="24" height="24" />
                        </a>
                        <a href="https://x.com/mymontyapp" class="cursor-pointer" target="_blank" rel="noopener noreferrer" aria-title="X">
                            <img src="/images/icons/x.svg" alt="X" width="24" height="24" />
                        </a>
                        <a href="https://www.instagram.com/mymonty" class="cursor-pointer" target="_blank" rel="noopener noreferrer" aria-title="Instagram">
                            <img src="/images/icons/instagram.svg" alt="instagram" width="24" height="24" />
                        </a>
                        <a href="https://www.linkedin.com/company/my-monty" class="cursor-pointer" target="_blank" rel="noopener noreferrer" aria-title="Linkedin">
                            <img src="/images/icons/linkedin.svg" alt="Linkedin" width="24" height="24" />
                        </a>
                        <a href="https://www.youtube.com/@mymonty4395" class="cursor-pointer" target="_blank" rel="noopener noreferrer" aria-title="Youtube">
                            <img src="/images/icons/youtube.svg" alt="Youtube" width="24" height="24" />
                        </a>
                    </div>
                    <p class="text-[#727272] text-sm mt-2">{{ t(`Footer.Toll-Free Number`) }}: <a href="tel:+448082387522" class="underline underline-offset-4">+44 808 238 7522</a></p>
                    <p class="text-[#727272] text-sm"><a href="mailto:support@mymonty.com" class="underline underline-offset-4">{{ t(`Footer.Email Us`) }}</a></p>
                </div>

                <div class="flex flex-col gap-2 md:ml-auto text-[#727272]">
                    <div class="flex max-md:justify-center items-center gap-6 md:ml-auto text-[#727272]">
                        <NuxtLinkLocale :to="'/terms-and-conditions'" class="text-sm underline underline-offset-4 hover:text-primary transition-all duration-300 ease-in-out">{{ t(`General.Links.Terms & Conditions`) }}</NuxtLinkLocale>
                        <NuxtLinkLocale :to="'/privacy-policy'" class="text-sm underline underline-offset-4 hover:text-primary transition-all duration-300 ease-in-out">{{ t(`General.Links.Privacy Policy`) }}</NuxtLinkLocale>
                        <NuxtLinkLocale :to="'/cookie-policy'" class="text-sm underline underline-offset-4 hover:text-primary transition-all duration-300 ease-in-out">{{ t(`General.Links.Cookie Policy`) }}</NuxtLinkLocale>
                        <a @click="showCookieSettings" class="text-sm underline underline-offset-4 hover:text-primary transition-all duration-300 ease-in-out cursor-pointer">{{ t(`General.Links.Cookie Settings`) }}</a>
                    </div>
                    <div class="flex max-md:justify-center items-center gap-6 text-[#727272]">
                        <NuxtLinkLocale :to="'/paynetics-terms-and-conditions'" class="text-sm underline underline-offset-4 hover:text-primary transition-all duration-300 ease-in-out">{{ t(`General.Links.Paynetics Terms & Conditions`) }}</NuxtLinkLocale>
                        <NuxtLinkLocale :to="'/paynetics-privacy-policy'" class="text-sm underline underline-offset-4 hover:text-primary transition-all duration-300 ease-in-out">{{ t(`General.Links.Paynetics Privacy Policy`) }}</NuxtLinkLocale>
                    </div>
                </div>
            </div>

            <hr class="border-[#72727222]" />

            <div class="flex flex-col gap-6 py-6 sm:py-12">
                <p class="text-base text-[#727272]" v-html="t(`Footer.Copyright`)"></p>
                <p class="text-[#727272] text-sm mt-2" v-html="t(`Footer.Paynetics Agreement`)"></p>
            </div>
        </div>
    </footer>
</template>

<script setup>
    import { useWindowSize } from '@vueuse/core'
    
	const { t } = useLocale(); 

    const showCookieSettings = () => {
        // Check if UC_UI is defined and the method exists to prevent errors
        if (typeof UC_UI !== 'undefined' && typeof UC_UI.showSecondLayer === 'function') {
            UC_UI.showSecondLayer();
        } else {
            console.error('UC_UI or the showSecondLayer method is not available');
        }
    };

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

    const { width } = useWindowSize() // Optional: width tracking

    // Function to toggle active index
    const toggleActive = (index) => {
        if (width.value <= 640) {
            const indexInArray = activeIndices.value.indexOf(index);
            if (indexInArray === -1) {
                activeIndices.value.push(index); // Add index if not present
            } else {
                activeIndices.value.splice(indexInArray, 1); // Remove index if already present
            }
        }
    };

    const clearActiveOnResize = () => {
        if (width.value > 640) {
            activeIndices.value = []; // Clear active indices if the screen is wider than 640
        }
    };

    onMounted(() => {
        window.addEventListener('resize', clearActiveOnResize);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('resize', clearActiveOnResize); // Clean up the listener
    });

    // Submission State
    const submissionMessage = ref('');
    const isSubmitting = ref(false);

    const form = ref({
        newsletter_email: '',
    });

    const errors = ref({
        newsletter_email: '',
    });

    const validationRules = {
		newsletter_email: {
            required: t(`General.Messages.Errors.Required.Email`),
            email: t(`General.Messages.Errors.Valid Email`),
            safe: t(`General.Messages.Errors.Safe`)
        },
    };

	// Submitting the form
	const handleSubmit = async () => {
        // Disable the submit button
        isSubmitting.value = true;

        // Validate form fields
        const isFormValid = validateForm(form, errors, validationRules);

        // If either form or file validation fails, stop submission
        if (!isFormValid) {
            // console.log('Validation failed:', errors.value);
            isSubmitting.value = false; // Re-enable the button
            return; // Stop submission if form or file validation fails
        }
        try {
            // Check this route in the plugins of the backend (Check Email plugin)
            // Add the form ID to the request
            const emailCheckResponse = await fetch(`http://92.205.130.62:5001/wp-json/custom/v1/check-email?email=${form.value.newsletter_email}`);
            
            if (!emailCheckResponse.ok) {
                throw new Error('Failed to check email');
            }

            const emailCheckData = await emailCheckResponse.json();

            if (emailCheckData.exists) {
                errors.value.newsletter_email = t(`General.Messages.Errors.Unique Email`);
                isSubmitting.value = false; // Re-enable the button
                return;
            }
            
            const API_ENDPOINT = 'http://92.205.130.62:5001/wp-json/contact-form-7/v1/contact-forms/10/feedback';
            const formData = new FormData();

            // Append top-level fields

            Object.keys(form.value).forEach((key) => {
				formData.append(key, form.value[key]);
            });
            formData.append('_wpcf7_unit_tag', 'rte');

            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                    // 'Content-Type': 'multipart/form-data' // No need to set this header for FormData
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            // console.log("Form submitted successfully:", data);

            if(data.status == 'validation_failed'){
                throw new Error('Validation Error');
            }

            submissionMessage.value = t(`General.Messages.Success.Newsletter`);
            
            // Clear success message after 2 seconds
            setTimeout(() => {
                submissionMessage.value = '';
            }, 2000);

            resetForm();
            //Handle success response, such as notifying the user or redirecting
        } catch (error) {
            // console.error("Form submission error:", error);
        } finally {
            // Re-enable the submit button
            isSubmitting.value = false;
        }
    };

    const resetForm = () => {
        form.value = {
			newsletter_email: '',
        };
        errors.value = {
			newsletter_email: '',
        };
    };
</script>