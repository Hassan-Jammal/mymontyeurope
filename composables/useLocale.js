export const useLocale = () => {
    // Fetch the current locale and available locales
    const { locale, locales, setLocale, t } = useI18n();
    const currentLocale = ref('');

    // Watch for locale changes and update the currentLocale
    watchEffect(() => {
        currentLocale.value = locale.value;
    });

    // Extract region and language from current locale
    const currentRegion = computed(() => currentLocale.value.split('-')[1]);
    const currentLanguage = computed(() => currentLocale.value.split('-')[0]);

    // Find current locale details from locales list
    const currentLocaleDetails = computed(() => {
        return locales.value.find(loc => loc.code === currentLocale.value) || {};
    });

    // Filter available locales based on the current region
    const filteredLocales = computed(() => {
        // Get the current region and language
        const availableLocalesForRegion = locales.value.filter(
            (loc) => loc.code.split('-')[1] === currentRegion.value
        );

        // If the region only has one language, return an empty array to exclude the language options for this region
        if (availableLocalesForRegion.length === 1) return [];

        // Filter out the current locale from the available locales
        return availableLocalesForRegion.filter(
            (loc) => loc.code !== currentLocale.value
        );
    });

    // Filter available regions for the dropdown (exclude current region)
    const filteredRegions = computed(() => {
        return locales.value.filter(
            (locale) => locale.code.split('-')[1] !== currentRegion.value
        );
    });

    return {
        currentLocale,
        currentRegion,
        currentLanguage,
        currentLocaleDetails,
        filteredLocales,
        filteredRegions,
        setLocale,
        t
    };
};
