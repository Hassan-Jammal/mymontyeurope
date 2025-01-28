<template>
    <div>
        <MainBanner 
            subTitle="Sub Title"
            title="Title"
            description="Description"
            buttonLink=""
            buttonText="Learn More"
            image="got-any-questions"
            alt="Image Alt"
            page="Contact Us"
        />

        <section id="section-2" class="my-6 py-6 lg:my-12 lg:py-12">
            <div class="container">
                <div class="flex flex-col justify-center items-center gap-4 lg:gap-8 lg:w-2/3 mx-auto text-center">
                    <h2 class="font-AeonikBlack text-3xl md:text-4xl xl:text-5xl 4xl:text-6xl uppercase">{{ t(`Pages.Careers.Section 2.Title`) }}</h2>
                </div>

                <div class="p-4 lg:p-12 bg-[#F7F7F7] rounded-[30px] mt-12">
                    <div class="flex flex-col gap-4 lg:gap-8">
                        <div class="flex max-lg:flex-col gap-4 justify-between items-start">
                            <div class="flex flex-col gap-1 w-full">
                                <label for="full-name" class="text-base">{{ t(`General.Labels.Full Name`) }}</label>
                                <input v-model="form.full_name" type="text" :placeholder="t(`General.Placeholders.Full Name`)" id="full-name" class="w-full h-full min-h-14 py-3 px-3 bg-white border border-[#D4D4D4] rounded-lg outline-none" />
                                <div v-if="errors.full_name" class="text-xs text-red-500">{{ errors.full_name }}</div>
                            </div>
                            <div class="flex flex-col gap-1 w-full">
                                <label for="email-address" class="text-base">{{ t(`General.Labels.Email Address`) }}</label>
                                <input v-model="form.email" type="text" :placeholder="t(`General.Placeholders.Email Address`)" id="email-address" class="w-full h-full min-h-14 py-3 px-3 bg-white border border-[#D4D4D4] rounded-lg outline-none" />
                                <div v-if="errors.email" class="text-xs text-red-500">{{ errors.email }}</div>
                            </div>
                        </div>

                        <div class="flex max-lg:flex-col gap-4 justify-between items-start">
                            <div class="flex flex-col gap-1 w-full">
                                <label for="company-name" class="text-base">{{ t(`General.Labels.Company Name`) }} <span class="text-[#9CA3AF]">({{ t(`General.Labels.Optional`) }})</span></label>
                                <input v-model="form.company" type="text" :placeholder="t(`General.Placeholders.Company Name`)" id="full-name" class="w-full h-full min-h-14 py-3 px-3 bg-white border border-[#D4D4D4] rounded-lg outline-none">
                                <div v-if="errors.company" class="text-xs text-red-500">{{ errors.company }}</div>
                            </div>
                            <div class="flex flex-col gap-1 w-full">
                                <label for="profession" class="text-base">{{ t(`General.Labels.Profession`) }} <span class="text-[#9CA3AF]">({{ t(`General.Labels.Optional`) }})</span></label>
                                <input v-model="form.profession" type="text" :placeholder="t(`General.Placeholders.Profession`)" id="full-name" class="w-full h-full min-h-14 py-3 px-3 bg-white border border-[#D4D4D4] rounded-lg outline-none">
                                <div v-if="errors.profession" class="text-xs text-red-500">{{ errors.profession }}</div>
                            </div>
                        </div>

                        <div class="flex max-lg:flex-col gap-4 justify-between items-start">
                            <div class="flex flex-col gap-1 w-full">
                                <label for="mobile-number" class="text-base">{{ t(`General.Labels.Mobile Number`) }}</label>
                                <div class="relative flex flex-row items-start gap-1">
                                    <div class="flex flex-col gap-1 w-[160px]">
                                        <div @click="toggleDropdown" class="custom-dropdown w-full h-full min-h-14 py-3 px-3 bg-white border border-[#D4D4D4] rounded-lg outline-none cursor-pointer">
                                            <div id="selected-country" class="flex justify-start items-center gap-2 select-none">
                                                <img :src="`/images/flags/${selectedCountry.iso2 || 'LB' }.svg`" :alt="selectedCountry.name || 'Lebanon'" width="20" height="20">
                                                <span>+{{ selectedCountry.code || '961' }}</span>
                                            </div>
                                        </div>
                                        <input v-model="form.code" type="hidden" id="code">
                                        <div v-if="errors.code" class="text-xs text-red-500">{{ errors.code }}</div>
                                    </div>

                                    <ul v-if="showDropdown" ref="dropdownContainer" @scroll="handleScroll" class="dropdown-container shadow-black/20 shadow-md absolute top-full left-0 w-full max-h-[200px] text-sm rounded-xl bg-white text-black mt-2 overflow-auto z-50">
                                        <input v-model="searchQuery" type="text" id="search" :placeholder="t(`General.Placeholders.Search`)" class="sticky top-0 left-0 w-full bg-white px-4 py-2 border-b border-b-[#D4D4D4] outline-0 z-10">
                                        <template v-for="country in filteredCountries">
                                            <li v-if="country.status == 1" :key="country.id" @click="selectCountry(country)" class="flex gap-2 text-black p-2 hover:bg-[#D4D4D4] cursor-pointer">
                                                <img :src="`/images/flags/${country.iso2}.svg`" :alt="country.name" width="20" height="20" />
                                                <span class="text-xs text-[#73788B]">(+{{ country.code }})</span>
                                                <span class="text-xs">{{ country.name }}</span>
                                            </li>
                                        </template>
                                    </ul>

                                    <div class="flex flex-col gap-1 w-full">
                                        <input v-model="form.mobile" type="text" id="mobile" :placeholder="t(`General.Placeholders.Mobile Number`)" class="w-full h-full min-h-14 py-3 px-3 bg-white border border-[#D4D4D4] rounded-lg outline-none">
                                        <div v-if="errors.mobile" class="text-xs text-red-500">{{ errors.mobile }}</div>
                                    </div>
                                </div>
                                <!-- <input type="text" placeholder="Mobile Number" id="full-name" class="w-full h-full min-h-14 py-3 px-3 bg-white border border-[#D4D4D4] rounded-lg outline-none"> -->
                            </div>
                            <div class="flex flex-col gap-1 w-full h-full">
                                <div class="flex flex-col gap-1 w-full">
                                    <label for="subject" class="text-base">{{ t(`General.Labels.Subject`) }}</label>
                                    <input v-model="form.subject" type="text" :placeholder="t(`General.Placeholders.Subject`)" id="full-name" class="w-full h-full min-h-14 py-3 px-3 bg-white border border-[#D4D4D4] rounded-lg outline-none">
                                    <div v-if="errors.subject" class="text-xs text-red-500">{{ errors.subject }}</div>
                                </div>
                            </div>
                        </div>

                        <div class="flex max-lg:flex-col gap-4 justify-between items-start">
                            <div class="flex flex-col gap-1 w-full">
                                <label for="message" class="text-base">{{ t(`General.Labels.Message`) }}</label>
                                <textarea v-model="form.message" rows="10" Lplaveholder="{{ t(`General.Placeholders.Subject`) }}" class="w-full h-full min-h-14 py-3 px-3 bg-white border border-[#D4D4D4] rounded-lg outline-none"></textarea>
                                <div v-if="errors.message" class="text-xs text-red-500">{{ errors.message }}</div>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 lg:grid-cols-3">
                            <div class="col-span-2 flex flex-col gap-8">
                                <div class="flex flex-col gap-1 w-full">
                                    <div class="flex justify-between items-baseline gap-2">
                                        <input v-model="isAcknowledged" type="checkbox" class="inline cursor-pointer">
                                        <p class="inline">{{ t(`General.Labels.Acknowlegment.Part 1`) }} <NuxtLinkLocale :to="'/privacy-policy'" class="text-primary">{{ t(`General.Links.Privacy Policy`) }}</NuxtLinkLocale>, <NuxtLinkLocale :to="'/cookie-policy'" class="text-primary">{{ t(`General.Links.Cookie Policy`) }}</NuxtLinkLocale>, {{ t(`General.And`) }} <NuxtLinkLocale :to="'terms-and-conditions'" class="text-primary">{{ t(`General.Links.Terms & Conditions`) }}</NuxtLinkLocale> {{ t(`General.Labels.Acknowlegment.Part 2`) }}.</p>
                                    </div>
                                </div>
                                <button :disabled="!isAcknowledged" @click.prevent="handleSubmit" class="max-sm:w-full w-max py-2 px-14 text-base text-white bg-black hover:bg-primary rounded-[30px] select-none font-AeonikMedium transition-all duration-300 ease-in-out disabled:bg-[#D4D4D4]">{{ t(`General.Buttons.Submit`) }}</button>
                                <div v-if="submissionMessage" :class="{'text-red-500': isError, 'text-gray-500': !isError}">{{ submissionMessage }}</div>
                            </div>
                            <!-- <div class="lg:text-right">
                                GOOGLE RECATPCHA
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- need to be replaced -->
        <section id="section-3" class="relative my-12 py-12 lg:my-14 lg:py-36 bg-[url('/images/always-there-for-you-bg.webp')] bg-fixed bg-no-repeat bg-cover bg-center">
            <div class="container">
                <div class="grid lg:grid-cols-2 gap-16">
                    <div class="flex flex-col justify-between items-start gap-4 lg:gap-8 text-white">
                        <h3 class="font-AeonikBlack text-3xl md:text-4xl xl:text-5xl 4xl:text-6xl uppercase">{{ t(`Pages.Contact Us.Section 3.Title`) }}</h3>
                        <p class="text-xl 4xl:text-2xl uppercase" v-html="t(`Pages.Contact Us.Section 3.Description 1`)"></p>
                    </div>
                    <div class="flex flex-col justify-between items-start gap-4 lg:gap-8 text-white">
                        <img class="" src="/images/icons/phone-box-primary.svg" :alt="t(`General.Alts.Phone Box Blue`)" width="78" height="78">
                        <p class="text-2xl 4xl:text-3xl" v-html="t(`Pages.Contact Us.Section 3.Description 2`)"> </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
	import { useCountry } from '~/composables/useCountry';

    const { t } = useLocale(); 

    useSeoMeta({
        title: t('Pages.Contact Us.Seo.Title'),
        description: '',

        ogTitle: t('Pages.Contact Us.Seo.Og Title'),
        ogDescription: t('Pages.Contact Us.Seo.Og Description'),
        ogImage: '',

        twitterTitle: t('Pages.Contact Us.Seo.Twitter Title'),
        twitterDescription: t('Pages.Contact Us.Seo.Twitter Description'),
        twitterCard: 'summary_large_image',
    })

    const { selectedCountry, detectCountry, countriesData } = useCountry();

    const emit = defineEmits();

    const route = useRoute();
    const currentPath = route.path;

    // Country-related State
    const countries = ref([]);
    const showDropdown = ref(false);
    const placeholder = 'Code';
    const filteredCountries = ref([]);
    const searchQuery = ref('');
    const dropdownContainer = ref(null);
    const lastLoadedIndex = ref(0);
    const searchFlag = ref(false);
    const initialCode = ref(''); // Store initial value
    const initialCountry = ref(''); // Store initial value

    // Submission State
    const submissionMessage = ref('');
    const isSubmitting = ref(false);
    const isError = ref(false);


    onMounted(async () => {
        // Load initial countries in the country code dropdown
        loadInitialCountries();

        // Detect country immediately on component mount and assign it to form.value.code
        detectCountry().then(() => {
            initialCode.value = selectedCountry.value.code
            form.value.code = selectedCountry.value.code;
        });
    });

    const isAcknowledged = ref(false)
    const form = ref({
        full_name: '',
        email: '',
        company: '',
        profession: '',
        code: '',
        mobile: '',
        subject: '',
        message: '',
    });

    const errors = ref({
        full_name: '',
        email: '',
        company: '',
        profession: '',
        code: '',
        mobile: '',
        subject: '',
        message: '',
    });

    const validationRules = {
        full_name: {
            required: t(`General.Messages.Errors.Required.Full Name`),
            safe: t(`General.Messages.Errors.Safe`)
        },
        email: {
            required: t(`General.Messages.Errors.Required.Email`),
            email: t(`General.Messages.Errors.Valid Email`),
            safe: t(`General.Messages.Errors.Safe`)
        },
        company: {
            safe: t(`General.Messages.Errors.Safe`)
        },
        profession: {
            safe: t(`General.Messages.Errors.Safe`)
        },
        code: {
            required: t(`General.Messages.Errors.Required.Code`),
            code: t(`General.Messages.Errors.Valid Code`),
            safe: t(`General.Messages.Errors.Safe`)
        },
        mobile: {
            required: t(`General.Messages.Errors.Required.Mobile Number`),
            numeric: t(`General.Messages.Errors.Numeric`),
            length: t(`General.Messages.Errors.Length`),
            safe: t(`General.Messages.Errors.Safe`)
        },
        subject: {
            required: t(`General.Messages.Errors.Required.Subject`),
            safe: t(`General.Messages.Errors.Safe`)
        },
        message: {
            required: t(`General.Messages.Errors.Required.Message`),
            safe: t(`General.Messages.Errors.Safe`)
        },
    };

    // Submitting the form
    const handleSubmit = async () => {

        if(!isAcknowledged) {
            isSubmitting.value = false; // Re-enable the button
            submissionMessage.value = t('General.Messages.Errors.Confirm Policies'); // Re-enable the button
            isError.value = true;
            return
        }

        // Disable the submit button
        isSubmitting.value = true;

        // Validate form fields
        const isFormValid = validateForm(form, errors, validationRules);

        // If either form or file validation fails, stop submission
        if (!isFormValid) {
            // console.log('Validation failed:', errors.value);
            isSubmitting.value = false; // Re-enable the button
            submissionMessage.value = 'Please ensure all required fields are correctly filled and try submitting again.'; // Re-enable the butto
            isError.value = true;
            return; // Stop submission if form or file validation fails
        }

        try {
            const API_ENDPOINT = 'http://92.205.130.62:5001/wp-json/contact-form-7/v1/contact-forms/11/feedback';
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
                submissionMessage.value = t('General.Messages.Errors.Api Response Validation Failed');
                isError.value = true;

                // Clear error message after 2 seconds
                setTimeout(() => {
                    submissionMessage.value = '';
                }, 2000);
                throw new Error('Validation Error');
            }

            submissionMessage.value = t('General.Messages.Success.Career');
            isError.value = false;
            // Clear success message after 2 seconds
            setTimeout(() => {
                submissionMessage.value = '';
            }, 2000);

            resetForm();
            //Handle success response, such as notifying the user or redirecting
        } catch (error) {
            // console.error("Form submission error:", error);
            // Set error message
            submissionMessage.value = t('General.Messages.Errors.Api Failed');
            isError.value = true;

            // Clear error message after 2 seconds
            setTimeout(() => {
                submissionMessage.value = '';
            }, 2000);
        } finally {
            // Re-enable the submit button
            isSubmitting.value = false;
        }
    };

    // Resetting the form
    const resetForm = () => {
        form.value = {
            full_name: '',
            email: '',
            company: '',
            profession: '',
            code: selectedCountry.value ? selectedCountry.value.code : initialCode.value,
            mobile: '',
            subject: '',
            message: '',
        };
        errors.value = {
            full_name: '',
            email: '',
            company: '',
            profession: '',
            code: '',
            mobile: '',
            subject: '',
            message: '',
        };
        isAcknowledged.value = false
    };

    // Choosing Country
    const toggleDropdown = () => {
        showDropdown.value = !showDropdown.value;

        // Reset country list and lastLoadedIndex when closing the dropdown
        if (!showDropdown.value) {
            resetDropdown();
        }
    };

    const resetDropdown = () => {
        countries.value = [];
        lastLoadedIndex.value = 0;
        filteredCountries.value = [];
        searchFlag.value = false
        searchQuery.value = ''
        loadInitialCountries();
    };

    const closeDropdown = () => {
        loadInitialCountries();
    };

    const selectCountry = (country) => {
        selectedCountry.value = country;
        form.value.code = country.code;
        emit('select', country);
        showDropdown.value = false;
        resetDropdown()
    };

    const loadInitialCountries = () => {
        loadNextCountries();
    };

    const loadNextCountries = () => {
        const batchSize = 10;
        const startIndex = lastLoadedIndex.value;
        const endIndex = startIndex + batchSize;
        const nextBatch = countriesData.slice(startIndex, endIndex);

        countries.value = [...countries.value, ...nextBatch];
        lastLoadedIndex.value = endIndex;
        filteredCountries.value = countries.value;
    };

    const handleScroll = () => {
        const container = dropdownContainer.value;
        if (searchQuery.value === '' && container.scrollTop + container.clientHeight >= container.scrollHeight - 20) {
            if (!searchFlag.value) {
                loadNextCountries();
            }
        }
    };

    const searchCountries = () => {
        const searchResults = countriesData.filter((country) =>
            country.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
        if (searchQuery.value != '') {
            filteredCountries.value = searchResults;
            searchFlag.value = true
        }
        else {
            resetDropdown();
        }
    };

    watch(searchQuery, searchCountries);
</script>

<style lang="" scoped>
	
</style>