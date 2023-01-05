// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import {groq} from "next-sanity";
import { sanityClient } from "../../sanity"

type Data = {
    categories: Category[]
}

// Execute Query
const query = groq`*[_type == 'category']{
_id,
  ...,
    "products": *[_type == 'product' && references(^._id)]
}`

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const categories = await sanityClient.fetch(query);
    res.status(200).json({ categories });

}
