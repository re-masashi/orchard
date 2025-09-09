// src/routes/posts/+page.js
import { getPosts } from '$lib/data/posts';

/** @type {import('./$types').PageLoad} */
export async function load() {
	try {
		const posts = await getPosts();

		// Ensure we only return serializable data
		const serializablePosts = posts.map((post) => ({
			...post,
			date: post.date instanceof Date ? post.date.toISOString() : post.date
		}));

		return {
			posts: serializablePosts
		};
	} catch (error) {
		console.error('Error in load function:', error);
		return {
			posts: []
		};
	}
}
