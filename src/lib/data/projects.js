import { compile } from 'mdsvex';

// src/lib/data/projects.js
export const getProjects = async () => {
	try {
		const allContent = import.meta.glob('/src/content/projects/*.svx', { eager: true });
		const projects = [];

		for (const path in allContent) {
			const module = allContent[path];
			const slug = path.split('/').pop().replace('.svx', '');

			// Only include serializable data, not component functions
			projects.push({
				...module.metadata,
				slug
				// Don't include content here for list view
			});
		}

		return projects.sort((a, b) => new Date(b.date) - new Date(a.date));
	} catch (error) {
		console.error('Error fetching projects:', error);
		return [];
	}
};

export const getProjectBySlug = async (slug) => {
	try {
		// Ensure this path matches your content directory structure
		const modules = import.meta.glob('/src/content/projects/*.svx', { eager: true });

		for (const path in modules) {
			const module = modules[path];
			const projectSlug = path.split('/').pop().replace('.svx', '');

			if (projectSlug === slug) {
				return {
					...module.metadata,
					slug: projectSlug,
					content: module.default // or rendered HTML if using mdsvex
				};
			}
		}

		return null; // project not found
	} catch (e) {
		console.error('Error loading project:', e);
		return null;
	}
};

export const getFeaturedProjects = async () => {
	const projects = await getProjects();
	return projects.filter((project) => project.featured === true);
};
