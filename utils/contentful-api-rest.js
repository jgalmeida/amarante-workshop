const BASE_URL = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`;
const TOKEN = process.env.CONTENTFUL_DELIVERY_API_TOKEN;

export function api(url, options = {}) {
	return fetch(url, {
		headers: {
			...options.headers,
			Authorization: `Bearer ${TOKEN}`,
		},
	});
}
export async function getPosts() {
	const response = await api(
		`${BASE_URL}/entries?content_type=post&select=sys.id,fields.name,fields.description,fields.image`
	);

	return response.json();
}

export async function getPost(id) {
	const response = await api(`${BASE_URL}/entries/${id}`);

	return response.json();
}
