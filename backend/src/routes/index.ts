import { Router, Request, Response } from "express";

export const router = Router();

router.post("/:username", async (req: Request, res: Response) => {
  const username = req.params.username;

  console.log(username)
  const data = await fetch(`https://api.github.com/users/${username}`);
  const user = await data.json();

  res.send(user);
});
