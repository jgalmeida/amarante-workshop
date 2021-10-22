import { getPost } from "../../../utils/contentful-api-graphql";

export default async function handler(req, res) {
	const posts = await getPost(req.query.id);

	res.json(posts);
}
