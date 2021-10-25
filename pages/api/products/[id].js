import { getProduct } from "../../../utils/apis/contentful-api-graphql";

export default async function handler(req, res) {
  const product = await getProduct(req.query.id);

  res.json(product);
}
