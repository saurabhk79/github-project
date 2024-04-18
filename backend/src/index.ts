import express, { Request, Response } from "express";
import { Database, sqlite3 } from "sqlite3";
import path from 'path';
import cors from "cors";
import {router} from "./routes";

const dbPath = path.resolve(__dirname, 'db', 'db.sqlite3');

const app = express();

app.use(express.json())
app.use(cors())

export const db = new Database(dbPath, (err) => {
  if (err) console.error(err.message);  
  else console.log("Connected to the database.");
});

app.get("/", async (req: Request, res: Response) => {
  console.log("Hello world");
  res.send("Hello world");
});

app.use("/user", router)
const port = process.env.PORT || 8080;

app.listen(port, (): void => {
  console.log(`App is listening at http://localhost:${port}`);
});
