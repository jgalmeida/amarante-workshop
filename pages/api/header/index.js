import { getHeader } from "../../../utils/apis/contentful-api-graphql";

export default async function handler(req, res) {
  const headerItems = await getHeader();

  res.json(headerItems);
}
