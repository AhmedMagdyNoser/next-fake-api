import type { NextApiRequest, NextApiResponse } from "next";

import type { User } from "@/types/user";

import users from "./users.json";

export default function handler(req: NextApiRequest, res: NextApiResponse<User>) {
  switch (req.method) {
    case "GET":
      const user = users.find((user) => user.id === Number(req.query.id));
      if (!user) return res.status(404).end("User not found");
      else return res.status(200).json(user);

    default:
      res.setHeader("Allow", ["GET"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
