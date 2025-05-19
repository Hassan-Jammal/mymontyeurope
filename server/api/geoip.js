import maxmind from 'maxmind';
import path from 'path';

export default defineEventHandler(async (event) => {
    const testIp = '100.128.0.1'; // Replace with an IP you want to test (US)
    const testIp1 = '109.110.96.1'; // Replace with an IP you want to test (Lebanon)
    const testIp2 = '101.44.32.1'; // Replace with an IP you want to test (Turkey)
    const testIp3 = '101.56.0.1'; // Replace with an IP you want to test (Italy)
    const testIp4 = '109.120.192.1'; // Replace with an IP you want to test (Bulgaria)
    const testIp5 = '178.238.11.6'; // Replace with an IP you want to test (United Kingdom)
    
    // const ip = process.env.NODE_ENV === 'development' ? testIp : getRequestHeader(event, 'x-forwarded-for') || event.node.req.connection.remoteAddress || '127.0.0.1';
    const ip = process.env.NODE_ENV === 'development' ? testIp : getRequestHeader(event, 'x-forwarded-for')?.split(',')[0].trim() || event.node.req.socket.remoteAddress || '127.0.0.1';
    // const forwarded = getRequestHeader(event, 'x-forwarded-for');
    // const ip = forwarded ? forwarded.split(',')[0].trim() : event.node.req.socket.remoteAddress || '127.0.0.1'; // Fallback to localhost

    // Clean IPv6 localhost
    const cleanedIp = ip === '::1' ? '127.0.0.1' : ip;

    const geoDbPath = path.resolve('server/geoip/GeoLite2-Country1.mmdb');

    try {
        const lookup = await maxmind.open(geoDbPath);
        const geoData = lookup.get(cleanedIp);

        if (geoData && geoData.country) {
            return { 
                ip: cleanedIp,
                country: geoData.country.iso_code,
                continent_code: geoData.continent.code,
                flag: 'DETECTED'
            };
        }

        return { ip: cleanedIp, country: 'LB', continent_code: 'AS', flag: 'NOT DETECTED' }; // Default to Lebanon if detection fails
    } catch (error) {
        console.error('Error accessing GeoLite2 database:', error);
        return { error: error, cleanedIp: cleanedIp, country: 'LB', continent_code: 'AS' }; // Default to Lebanon in case of error
    }
});
