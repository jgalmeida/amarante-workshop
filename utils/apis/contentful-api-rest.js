const BASE_URL = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`;
const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

export function api(url, options = {}) {
  return fetch(url, {
    headers: {
      ...options.headers,
      Authorization: `Bearer ${TOKEN}`,
    },
  });
}
export async function getProducts() {
  const response = await api(
    `${BASE_URL}/entries?content_type=product&select=sys.id,fields.name,fields.description,fields.value,fields.image`
  );

  return response.json();
}

export async function getProduct(id) {
  const response = await api(`${BASE_URL}/entries/${id}`);

  return response.json();
}
