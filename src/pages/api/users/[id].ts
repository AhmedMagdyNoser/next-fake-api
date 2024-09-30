import type { NextApiRequest, NextApiResponse } from "next";

import users from "@/db/users.json";

export default function handler(req: NextApiRequest, res: NextApiResponse<User | { message: string }>) {
  switch (req.method) {
    case "GET":
      const user = users.find((user) => user.id === Number(req.query.id));
      if (!user) return res.status(404).json({ message: `User with ID ${req.query.id} not found` });
      else return res.status(200).json(user);

    default:
      res.setHeader("Allow", ["GET"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
