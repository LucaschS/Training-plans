import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser, { json, urlencoded } from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import {
  postAddUserRouter,
  getEditUserRouter,
  postEditUserRouter,
  postDeleteUserRouter,
} from "./routes/admin";
import { UserRouter } from "./routes/users";

const app = express();

app.use(cors({ origin: true, credentials: false }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  urlencoded({
    extended: true,
  })
);

app.use(json());

declare global {
  interface CustomError extends Error {
    status?: number;
  }
}

app.use(UserRouter);
app.use(postAddUserRouter);
app.use(getEditUserRouter);
app.use(postEditUserRouter);
app.use(postDeleteUserRouter);

const start = async () => {
  if (!process.env.MONGO_URI) throw new Error("MONGO_URI is required!");

  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (err) {
    throw new Error("database error!");
  }

  app.listen(8080, () => console.log("server is up and running on port 8080"));
};

start();
