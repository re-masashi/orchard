import { getFeaturedPosts } from '$lib/data/posts';
import { getFeaturedProjects } from '$lib/data/projects';

export async function load() {
	try {
		const [posts, projects] = await Promise.all([getFeaturedPosts(), getFeaturedProjects()]);

		return {
			featuredProjects: projects.slice(0, 3), // Max 3
			recentPosts: posts.slice(0, 2) // Max 2
		};
	} catch (error) {
		console.error('Error in home page load:', error);
		return {
			featuredProjects: [],
			recentPosts: []
		};
	}
}
