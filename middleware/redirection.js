export default defineNuxtRouteMiddleware(async (to, from) => {
    const response = await fetch('/api/geoip');
    const data = await response.json();
    
    // Unwrap the data correctly
    if (data && data.continent_code !== 'EU') {
        return navigateTo('https://mymonty.com.lb', { 
            external: true,
            redirectCode: 302
        })
    }
})
