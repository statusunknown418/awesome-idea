// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data?: Record<string, unknown>[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data = await prisma?.user.findMany();
  res.status(200).json({ data: data ? data : [] });
}
