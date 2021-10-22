import { getPosts } from "../../../utils/contentful-api-graphql";

export default async function handler(req, res) {
	const posts = await getPosts();

	res.json(posts);
}
