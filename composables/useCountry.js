import countriesData from '~/data/countries.json';

export const useCountry = () => { // (manualSelection)
    const selectedCountry = ref({});
    const countryIsEU = ref(false);
    const initialCode = ref(''); // Store the initial value
    const errors = ref({ country: null });
    const router = useRouter();
    const { locale,locales, setLocale } = useI18n();
    const i18nCookie = useCookie('i18n_redirected');

    const findNearestLocale = (iso2) => {
        const availableLocales = locales.value;
        
        // First, look for an exact country match
        const exactCountryMatch = availableLocales.find(locale => {
            const [lang, country] = locale.code.split('-');
            return country.toLowerCase() === iso2.toLowerCase();
        });
        if (exactCountryMatch) return exactCountryMatch.code;
        
        // If no exact country match, look for a language match with EU
        const languageEUMatch = availableLocales.find(locale => {
            const [lang, country] = locale.code.split('-');
            return lang.toLowerCase() === iso2.toLowerCase() && country === 'EU';
        });
        if (languageEUMatch) return languageEUMatch.code;
        
        // If still no match, default to en-EU
        return 'en-EU';
    };

    const detectCountry = async () => {
        try {
            const response = await fetch('/api/geoip');
            const data = await response.json();
            
            if (data && data.country) {
                const detectedCountry = countriesData.find(country => country.iso2 === data.country);
                
                if (detectedCountry) {
                    if (!selectedCountry.value || !selectedCountry.value.iso2) {
                        countryIsEU.value = detectedCountry.is_eu;
                        selectedCountry.value = detectedCountry;
                        initialCode.value = detectedCountry.code;
                        // console.log(selectedCountry.value)

                        if (!i18nCookie.value) {
                            const nearestLocale = findNearestLocale(detectedCountry.iso2);
                            i18nCookie.value = nearestLocale;
                            await setLocale(nearestLocale);
                            return;
                        }
                    
                        // // // Check if the i18n_redirected cookie exists
                        // // if (i18nCookie.value) return;

                        // const nearestLocale = findNearestLocale(detectedCountry.iso2);
                        // // console.log(nearestLocale)

                        // // Set the locale
                        // await setLocale(nearestLocale);

                        // // Set the cookie
                        // i18nCookie.value = nearestLocale;

                        // // // Redirect to the new locale
                        // await router.push(useLocalePath()('/'));
                        
                    }
                } else {
                    // console.warn('Detected country not found in countries data');
                }
            } else {
                errors.value.country = 'No country data found';
            }
        } catch (error) {
            errors.value.country = 'Unable to detect country';
            // console.error('Error detecting country:', error);
        }
    };

    return {
        countriesData,
        selectedCountry,
        countryIsEU,
        initialCode,
        errors,
        detectCountry,
    };
};
