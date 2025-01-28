import slugify from 'slugify';

export default function (str) {
    return slugify(str, {
        lower: true,          // Convert to lowercase
        remove: /[^\w\s-]/g,  // Remove non-alphanumeric characters
        replacement: '-',     // Replace spaces with hyphens
    });
}