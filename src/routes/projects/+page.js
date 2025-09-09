import { getProjects } from '$lib/data/projects';

/** @type {import('./$types').PageLoad} */
export async function load() {
	try {
		const projects = await getProjects();

		// Ensure we only return serializable data
		const serializableProjects = projects.map((project) => ({
			...project,
			date: project.date instanceof Date ? project.date.toISOString() : project.date
		}));

		return {
			projects: serializableProjects
		};
	} catch (error) {
		console.error('Error in load function:', error);
		return {
			projects: []
		};
	}
}
