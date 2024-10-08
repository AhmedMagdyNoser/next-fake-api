import type { NextApiRequest, NextApiResponse } from "next";

import users from "@/db/users.json";

export default function handler(req: NextApiRequest, res: NextApiResponse<User[]>) {
  switch (req.method) {
    case "GET":
      return res.status(200).json(users);

    default:
      res.setHeader("Allow", ["GET"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
