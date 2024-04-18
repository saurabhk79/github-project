import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/github")
  .then(() => console.log("connected successfully!!"))
  .catch(() => console.log("connection failed!!"));

app.get("/", async (req: Request, res: Response) => {
  console.log("Hello world");
  res.send("Hello world");
});

app.use("/user", router);
const port = process.env.PORT || 8080;

app.listen(port, (): void => {
  console.log(`App is listening at http://localhost:${port}`);
});
