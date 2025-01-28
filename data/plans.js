// import planData from '~/locales/en-UK.json' // import the JSON data

// export const plansData = (t) => {
//     return planData.Pages["Plans"]["Section 2"].map((section, sectionIndex) => ({
//         category: t(`Pages.Plans.Section 2[${sectionIndex}].Category`),
//         price: t(`Pages.Plans.Section 2[${sectionIndex}].Price`),
//         description: t(`Pages.Plans.Section 2[${sectionIndex}].Description`),
//         layout: t(`Pages.Plans.Section 2[${sectionIndex}].Layout`),
//         buttonText: t(`Pages.Plans.Section 2[${sectionIndex}].Button Text`),
//         plansItems: section.Features.map((_, featureIndex) => 
//             t(`Pages.Plans.Section 2[${sectionIndex}].Features[${featureIndex}]`)
//         )
//     }));
// };

export const plansData = async (t, locale) => {
    const planModule = await import(`~/locales/${locale}.json`);
    const planData = planModule.default;
    return planData.Pages["Plans"]["Section 2"].map((section, sectionIndex) => ({
        category: t(`Pages.Plans.Section 2[${sectionIndex}].Category`),
        price: t(`Pages.Plans.Section 2[${sectionIndex}].Price`),
        description: t(`Pages.Plans.Section 2[${sectionIndex}].Description`),
        layout: t(`Pages.Plans.Section 2[${sectionIndex}].Layout`),
        buttonText: t(`Pages.Plans.Section 2[${sectionIndex}].Button Text`),
        plansItems: section.Features.map((_, featureIndex) => 
            t(`Pages.Plans.Section 2[${sectionIndex}].Features[${featureIndex}]`)
        )
    }));
};