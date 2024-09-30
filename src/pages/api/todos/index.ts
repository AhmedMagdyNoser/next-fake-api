import type { NextApiRequest, NextApiResponse } from "next";

import todos from "./todos.json";

export default function handler(req: NextApiRequest, res: NextApiResponse<Todo[]>) {
  switch (req.method) {
    case "GET":
      return res.status(200).json(todos);

    default:
      res.setHeader("Allow", ["GET"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
