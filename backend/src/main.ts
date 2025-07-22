import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser, { json, urlencoded } from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import session from "express-session";

import {
  postAddUserRouter,
  getEditUserRouter,
  postEditUserRouter,
  postDeleteUserRouter,
  getUserRouter,
} from "./routes/admin";

import { loginRouter } from "./routes/auth";

import { UserRouter } from "./routes/users";

const app = express();

app.use(cors({ origin: true, credentials: false }));
app.use(express.urlencoded({ extended: true }));

app.use(
  urlencoded({
    extended: true,
  })
);

app.use(express.json());

declare global {
  interface CustomError extends Error {
    status?: number;
  }
}

app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: true,
    // cookie: { httpOnly: false, maxAge: 60000 },
  })
);

app.use(UserRouter);

app.use(postAddUserRouter);
app.use(getEditUserRouter);
app.use(postEditUserRouter);
app.use(postDeleteUserRouter);
app.use(loginRouter);
app.use(getUserRouter);


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
