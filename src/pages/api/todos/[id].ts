import type { NextApiRequest, NextApiResponse } from "next";

import todos from "./todos.json";

export default function handler(req: NextApiRequest, res: NextApiResponse<Todo | { message: string }>) {
  switch (req.method) {
    case "GET":
      const todo = todos.find((todo) => todo.id === req.query.id);
      if (!todo) return res.status(404).json({ message: `Todo with ID ${req.query.id} not found` });
      else return res.status(200).json(todo);

    default:
      res.setHeader("Allow", ["GET"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
