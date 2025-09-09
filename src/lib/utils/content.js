// src/lib/utils/content.js
import { browser } from '$app/environment';

// Import all MD files from content directory
export const importContent = async (contentType) => {
	if (browser) return [];

	// Use static glob pattern
	const allContent = import.meta.glob('/src/content/**/*.svx', { eager: true });
	console.log(allContent, 'all');

	const contentItems = [];

	for (const path in allContent) {
		// Filter by content type
		if (path.includes(`/src/content/${contentType}/`)) {
			const module = allContent[path];
			const slug = path.split('/').pop().replace('.svx', '');

			contentItems.push({
				...module.metadata,
				slug,
				content: module.default
			});
		}
	}

	return contentItems.sort((a, b) => new Date(b.date) - new Date(a.date));
};

// Get single content item
export const getContentBySlug = async (contentType, slug) => {
	if (browser) return null;

	const allContent = import.meta.glob('/src/content/**/*.svx', { eager: true });

	const path = `/src/content/${contentType}/${slug}.svx`;

	if (allContent[path]) {
		const module = allContent[path];
		return {
			...module.metadata,
			slug,
			content: module.default
		};
	}

	return null;
};
