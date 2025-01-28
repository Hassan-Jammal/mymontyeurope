// composables/useScrollToSection.js
export function useScrollToSection() {
    const scrollToSection = (sectionIdOrClass) => {
    const header = document.getElementById('header');
    const headerHeight = header ? header.clientHeight : 0;

    const targetElement = document.querySelector(`#${sectionIdOrClass}, .${sectionIdOrClass}`);
        if (targetElement) {
            const y = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
    
            window.scrollTo({
                top: y,
                behavior: 'smooth',
            });
        }
    };

    return {
        scrollToSection,
    };
}
  