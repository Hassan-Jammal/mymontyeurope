export default defineNuxtRouteMiddleware(async (to, from) => {
    console.log('Redirection Middleware Triggered');

    const response = await fetch('/api/geoip');
    const data = await response.json();

    console.log('GeoIP Data:', data); // Log the response to debug

    if (data && data.continent_code !== 'EU') {
        console.log('Redirecting to mymonty.com.lb');
        return navigateTo('https://mymonty.com.lb', { 
            external: true,
            redirectCode: 302
        });
    }
});
