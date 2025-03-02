import express from "express";

import { getLogin, postLogin } from "../controllers/auth";

const router = express.Router();

export const postLoginRouter = router.post("/login", postLogin);

export const getLoginRouter = router.get("/login", getLogin);
