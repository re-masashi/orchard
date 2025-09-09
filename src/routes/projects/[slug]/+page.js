import { error } from '@sveltejs/kit';
import { getProjectBySlug } from '$lib/data/projects';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const project = await getProjectBySlug(params.slug);

	if (!project) {
		throw error(404, 'Project not found');
	}

	return { project };
}
