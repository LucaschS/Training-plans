import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser, { json, urlencoded } from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import session from "express-session";

// import {
//   postAddUserRouter,
//   getEditUserRouter,
//   postEditUserRouter,
//   postDeleteUserRouter,
//   getUserRouter,
// } from "./routes/admin";

import { loginRouter } from "./routes/auth";

// import { UserRouter } from "./routes/users";

const app = express();

app.use(cors({ origin: true, credentials: false }));
app.use(bodyParser.json());
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
let cookieParser = require("cookie-parser");
app.use(cookieParser());
app.set("trust proxy", 1); // Trust first proxy

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }, // Set to true if you are using HTTPS
  })
);

app.use(loginRouter);

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
