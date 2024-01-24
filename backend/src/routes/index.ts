import { Router, Request, Response } from "express";

export const router = Router();

router.post("/:username", async (req: Request, res: Response) => {
  const username = req.params.username;

  //   if user exists fetch from there, else call api
  console.log(username);
  const data = await fetch(`https://api.github.com/users/${username}`);
  const user = await data.json();

  // get all the mutual friends
  res.send(user);
});

router.get("/search", async (req: Request, res: Response) => {
  // try {
  //   // Validate query parameters
  //   const { error, value } = searchSchema.validate(req.query);
  //   if (error) {
  //     throw new Error(error.details[0].message);
  //   }
  //   const { username, location } = value;
  //   // Construct the SQL query based on the provided parameters
  //   let query = "SELECT * FROM users WHERE 1=1";
  //   const params: any[] = [];
  //   if (username) {
  //     query += " AND username LIKE ?";
  //     params.push(`%${username}%`);
  //   }
  //   if (location) {
  //     query += " AND location LIKE ?";
  //     params.push(`%${location}%`);
  //   }
  //   // Execute the SQL query
  //   const results = await new Promise<any[]>((resolve, reject) => {
  //     db.all(query, params, (err, rows) => {
  //       if (err) reject(err);
  //       else resolve(rows);
  //     });
  //   });
  //   res.status(200).json(results);
  // } catch (error) {
  //   console.error(error);
  //   res.status(400).json({ error: error.message });
  // }
});

router.delete("/:username", async (req: Request, res: Response) => {
  const username = req.params.username;

  console.log(username);

  res.send(username);
});

router.patch("/:username", async (req: Request, res: Response) => {
  res.send("users");
});

router.get("/all", async (req: Request, res: Response) => {
  res.send("users");
});
