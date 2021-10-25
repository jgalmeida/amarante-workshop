import { getProducts } from "../../../utils/apis/contentful-api-graphql";

export default async function handler(req, res) {
  const products = await getProducts();

  res.json(products);
}
