export default defineNuxtRouteMiddleware(async (to, from) => {
    // // Skip middleware if already on a specific path (to prevent redirect loops)
    // if (to.path.includes('/some-excluded-path')) {
    //     return
    // }
  
    const { data } = await useFetch('/api/geopip')
    
    // Check for specific countries and redirect accordingly
    if (data.value?.continent_code !== 'EU') {
        return navigateTo('https://mymonty.com.lb', { 
            external: true,
            redirectCode: 302 // Optional: specify redirect status code
        })
    }
})
