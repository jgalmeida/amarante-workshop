const BASE_URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;
const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

export function api({ query = {}, variables = {}, options = {} }) {
  console.log("Making a request to", BASE_URL);

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

export async function getProducts() {
  const query = `
    {
      productCollection {
        items {
          sys {
            id
          }
          title
          description
          value
          image {
            title
            url
          }
        }
      }
    } 
  `;

  const response = await api({ query });
  const json = await response.json();

  return json.data.productCollection.items.map(transformProduct);
}

export async function getProduct(id) {
  const query = `
    query($id: String!) {
      product(id: $id) {
        sys {
          id
        }
        title
        description
        value
        image {
          title
          url
        }
      }
    }
  `;

  const response = await api({ query, variables: { id } });
  const json = await response.json();

  return transformProduct(json.data.product);
}

export function transformProduct(product) {
  return {
    id: product.sys.id,
    title: product.title,
    description: product.description,
    value: product.value,
    image: { ...product.image },
  };
}

export async function getReviews() {
  const query = `
    {
      reviewCollection {
        items {
          who
          content
        }
      }
    } 
  `;

  const response = await api({ query });

  const json = await response.json();

  return json.data.reviewCollection.items;
}

export async function getHeader() {
  const query = `
    query($id: String!) {
      header(id: $id) {
        name 
        linksCollection {
          items {
            ... on Link {
              title
              url
            }
          }
        }
      }
    } 
  `;

  const response = await api({
    query,
    variables: { id: "4nEVPvNss877qvlDZzaK4p" },
  });

  const json = await response.json();
  const { header } = json.data;

  return {
    name: header.name,
    links: header.linksCollection.items,
  };
}

export async function getFooter() {
  const query = `
    query($id: String!) {
      footer(id: $id) {
        name 
        linksCollection {
          items {
            ... on Link {
              title
              url
            }
          }
        }
      }
    } 
  `;

  const response = await api({
    query,
    variables: { id: "3aSTimhABYROcFcp6qoYle" },
  });

  const json = await response.json();
  const { footer } = json.data;

  return {
    name: footer.name,
    links: footer.linksCollection.items,
  };
}
