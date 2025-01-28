// loadPosts.js
import { ref } from 'vue';

export function usePosts() {
    const totalPages = ref(0);
    const currentPage = ref(1);
    const perPage = ref(6);
    const posts = ref([]);
    
    const { data, pending, error, refresh } = useFetch('https://backend.montypay.com/wp-json/wp/v2/posts', {
        query: { categories: 7, per_page: perPage.value, page: currentPage.value, _embed: '1' },
        lazy: true,
        server: false,
        onResponse({ request, response, options }) {
            totalPages.value = parseInt(response.headers.get('X-WP-TotalPages'));
        }
    });

    // Merge posts when fetched
    posts.value = data;

    const loadMorePosts = async () => {
        if (currentPage.value < totalPages.value) {
            currentPage.value++;
            const newPosts = await $fetch('https://backend.montypay.com/wp-json/wp/v2/posts', {
                query: { categories: 7, per_page: perPage.value, page: currentPage.value, _embed: '1' }
            });
            
            // Merge new posts with existing posts
            posts.value = [...posts.value, ...newPosts];
        }
    };

    return {
        posts,
        loadMorePosts,
        totalPages,
        currentPage,
    };
}
