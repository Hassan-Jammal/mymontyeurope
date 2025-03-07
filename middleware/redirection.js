export default defineNuxtRouteMiddleware(async (to, from) => {
    console.log('Redirection Middleware Triggered');

    const response = await useFetch('/api/geoip');
    const data = response.data.value; 

    console.log('GeoIP Data:', data);

    if (data && data.continent_code !== 'EU') {
        console.log('Redirecting to mymonty.com.lb');
        return navigateTo('https://mymonty.com.lb', { 
            external: true,
            redirectCode: 302
        });
    }
});
