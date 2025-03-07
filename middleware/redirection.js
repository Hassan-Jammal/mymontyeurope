export default defineNuxtRouteMiddleware(async (to, from) => {
    const { data } = await useFetch('/api/geopip')
    
    // Unwrap the data correctly
    if (data.value && data.value.continent_code !== 'EU') {
        return navigateTo('https://mymonty.com.lb', { 
            external: true,
            redirectCode: 302
        })
    }
})
