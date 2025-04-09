// import featureData from '~/locales/en-EU.json' // import the JSON data

// export const featuresData = (t) => {
//     return featureData.Pages["Features"]["Section 3"].map((section, sectionIndex) => ({
//         category: t(`Pages.Features.Section 3[${sectionIndex}].Category`),
//         path: t(`Pages.Features.Section 3[${sectionIndex}].Path`),
//         featuresItems: section.Cards.map((card, cardIndex) => ({
//             title: t(`Pages.Features.Section 3[${sectionIndex}].Cards[${cardIndex}].Title`),
//             excerpt: t(`Pages.Features.Section 3[${sectionIndex}].Cards[${cardIndex}].Excerpt`),
//             description: t(`Pages.Features.Section 3[${sectionIndex}].Cards[${cardIndex}].Description`),
//             icon: t(`Pages.Features.Section 3[${sectionIndex}].Cards[${cardIndex}].Icon`),
//             image: t(`Pages.Features.Section 3[${sectionIndex}].Cards[${cardIndex}].Image`),
//         }))
//     }));
// };


export const featuresData = async (t, locale) => {
    const featureModule = await import(`~/locales/${locale}.json`);
    const featureData = featureModule.default;
    return featureData.Pages["Features"]["Section 3"].map((section, sectionIndex) => ({
        category: t(`Pages.Features.Section 3[${sectionIndex}].Category`),
        path: t(`Pages.Features.Section 3[${sectionIndex}].Path`),
        featuresItems: section.Cards.map((card, cardIndex) => ({
            title: t(`Pages.Features.Section 3[${sectionIndex}].Cards[${cardIndex}].Title`),
            path: t(`Pages.Features.Section 3[${sectionIndex}].Cards[${cardIndex}].Path`),
            excerpt: t(`Pages.Features.Section 3[${sectionIndex}].Cards[${cardIndex}].Excerpt`),
            description: t(`Pages.Features.Section 3[${sectionIndex}].Cards[${cardIndex}].Description`),
            icon: t(`Pages.Features.Section 3[${sectionIndex}].Cards[${cardIndex}].Icon`),
            image: t(`Pages.Features.Section 3[${sectionIndex}].Cards[${cardIndex}].Image`),
            seo_title: t(`Pages.Features.Section 3[${sectionIndex}].Cards[${cardIndex}].Seo.Title`),
            seo_description: t(`Pages.Features.Section 3[${sectionIndex}].Cards[${cardIndex}].Seo.Description`),
        }))
    }));
};