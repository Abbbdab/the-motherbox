import scraper from 'metadata-scraper';
import type { Actions, PageServerLoad } from './$types';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const url = data.get('url');

		const test = await scraper(url)
			.then((res) => res)
			.catch((err) => console.error(err));

		return test;
	}
} satisfies Actions;
