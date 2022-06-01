// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data?: Record<string, unknown>[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ data: req.body });
}
