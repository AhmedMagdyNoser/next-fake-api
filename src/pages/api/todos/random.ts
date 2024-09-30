import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";

const dataFilePath = path.join(process.cwd(), "src/db/todos.json");
const todos: Todo[] = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));

export default function handler(req: NextApiRequest, res: NextApiResponse<Todo>) {
  switch (req.method) {
    case "GET":
      const randomIndex = Math.floor(Math.random() * todos.length);
      return res.status(200).json(todos[randomIndex]);

    default:
      res.setHeader("Allow", ["GET"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
