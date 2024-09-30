import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import crypto from "crypto";

const dataFilePath = path.join(process.cwd(), "src/db/todos.json");
const todos: Todo[] = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return res.status(200).json(todos);

    case "POST":
      try {
        const { title } = req.body;
        if (!title) return res.status(400).json({ message: "Title is required" });
        const newTodo: Todo = {
          id: crypto.randomBytes(4).toString("hex"),
          completed: false,
          title,
        };
        const updatedTodos = [...todos, newTodo];
        fs.writeFileSync(dataFilePath, JSON.stringify(updatedTodos, null, 2));
        return res.status(201).json(newTodo);
      } catch (error) {
        return res.status(500).json({ error });
      }

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
