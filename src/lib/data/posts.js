import { compile } from 'mdsvex';

// src/lib/data/posts.js
export const getPosts = async () => {
	try {
		const allContent = import.meta.glob('/src/content/posts/*.svx', { eager: true });
		const posts = [];

		for (const path in allContent) {
			const module = allContent[path];
			const slug = path.split('/').pop().replace('.svx', '');

			// Only include serializable data, not component functions
			posts.push({
				...module.metadata,
				slug
				// Don't include content here for list view
			});
		}

		return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
	} catch (error) {
		console.error('Error fetching posts:', error);
		return [];
	}
};

export const getPostBySlug = async (slug) => {
	try {
		// Ensure this path matches your content directory structure
		const modules = import.meta.glob('/src/content/posts/*.svx', { eager: true });

		for (const path in modules) {
			const module = modules[path];
			const postSlug = path.split('/').pop().replace('.svx', '');

			if (postSlug === slug) {
				return {
					...module.metadata,
					slug: postSlug,
					content: module.default // or rendered HTML if using mdsvex
				};
			}
		}

		return null; // Post not found
	} catch (e) {
		console.error('Error loading post:', e);
		return null;
	}
};

export const getFeaturedPosts = async () => {
	const posts = await getPosts();
	return posts.filter((post) => post.featured === true);
};
