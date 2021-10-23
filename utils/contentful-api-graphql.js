const BASE_URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;
const TOKEN = process.env.CONTENTFUL_DELIVERY_API_TOKEN;

export function api({ query = {}, variables = {}, options = {} }) {
	return fetch(BASE_URL, {
		method: "POST",
		headers: {
			...options.headers,
			Authorization: `Bearer ${TOKEN}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ query, variables }),
	});
}

export async function getPosts() {
	const query = `
    {
      postCollection {
        items {
          sys {
            id
          }
          name
          description
          image {
            title
            url
          }
        }
      }
    } 
  `;

	const response = await api({ query });

	return response.json();
}

export async function getPost(id) {
	const query = `
    query($id: String!) {
      post(id: $id) {
        sys {
          id
        }
        name
        description
        image {
          title
          url
        }
      }
    }
  `;

	const response = await api({ query, variables: { id } });

	return response.json();
}
