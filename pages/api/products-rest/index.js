import { getProducts } from "../../../utils/apis/contentful-api-rest";

export default async function handler(req, res) {
  const products = await getProducts();

  res.json(products);
}
