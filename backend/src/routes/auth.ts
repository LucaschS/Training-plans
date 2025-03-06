import express from "express";

import { getLogin, postLogin } from "../controllers/auth";

const router = express.Router();

router.post("/login", postLogin);
router.get("/login", getLogin);

export const loginRouter = router;
